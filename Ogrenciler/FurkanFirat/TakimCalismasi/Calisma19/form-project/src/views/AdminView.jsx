import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  addDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { ApplicationsTable } from '../components/organisms/ApplicationsTable';
import { ApplicationModal } from '../components/organisms/ApplicationModal';
import { useNavigate } from 'react-router';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import { Button } from '../components/atoms/Button';
import { allQuestions } from '../constants/allQuestions';
import { ExamContentModal } from '../components/organisms/ExamContentModal';

export const AdminView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchApplications();
  }, [currentUser, navigate]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const applicationsQuery = query(collection(db, 'applications'));
      const querySnapshot = await getDocs(applicationsQuery);
      const applicationsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplications(applicationsList);
    } catch (error) {
      console.error('Error loading applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationAction = async (id, status) => {
    try {
      setActionLoading(true);
      const applicationRef = doc(db, 'applications', id);
      await updateDoc(applicationRef, {
        status,
        updatedAt: new Date(),
        updatedBy: currentUser.uid,
      });

      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === id ? { ...app, status } : app
        )
      );

      setSelectedApplication(null);
    } catch (error) {
      console.error('Error updating application:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteApplication = async (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      try {
        const applicationRef = doc(db, 'applications', id);
        await deleteDoc(applicationRef);
        await fetchApplications();
      } catch (error) {
        console.error('Error deleting application:', error);
      }
    }
  };

  const handleSendExam = () => {};

  const handlePushQuestionsToFirestore = async () => {
    try {
      const questionsRef = collection(db, 'examQuestions');
      const existingSnapshot = await getDocs(questionsRef);
      const existingQuestions = existingSnapshot.docs.map((doc) => doc.data());

      let addedCount = 0;

      for (const question of allQuestions) {
        const alreadyExists = existingQuestions.some(
          (q) =>
            q.question.trim().toLowerCase() ===
            question.question.trim().toLowerCase()
        );

        if (!alreadyExists) {
          await addDoc(questionsRef, question);
          addedCount++;
        }
      }

      alert(`${addedCount} new questions added to Firestore.`);
    } catch (error) {
      console.error('Error adding questions to Firestore:', error);
      alert('An error occurred while pushing questions.');
    }
  };

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Application Management</h2>
      <div className='d-flex justify-content-between mb-3'>
        <h4>Total Applications: {applications.length}</h4>
        <div className='d-flex gap-3'>
          <Button variant='success' onClick={handlePushQuestionsToFirestore}>
            Push Questions to Firestore
          </Button>
          <Button variant='primary' onClick={fetchApplications}>
            Refresh
          </Button>
        </div>
      </div>

      <ApplicationsTable
        applications={applications}
        onViewApplication={setSelectedApplication}
        onDeleteApplication={handleDeleteApplication}
        onSendExam={handleSendExam}
      />

      <ApplicationModal
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
        onApprove={(id) => handleApplicationAction(id, 'approved')}
        onReject={(id) => handleApplicationAction(id, 'rejected')}
        actionLoading={actionLoading}
      />

      <ExamContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
