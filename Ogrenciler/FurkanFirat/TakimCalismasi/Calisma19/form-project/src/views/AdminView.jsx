import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import { useNavigate } from 'react-router';

export const AdminView = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchApplications();
  }, []);

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
      await fetchApplications();
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error updating application:', error);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading)
    return (
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Application Management</h2>
      <div className='d-flex justify-content-between mb-3'>
        <h4>Total Applications: {applications.length}</h4>
        <button className='btn btn-primary' onClick={fetchApplications}>
          Refresh
        </button>
      </div>
      {applications.length === 0 ? (
        <div className='text-center p-4'>
          <h4>No applications yet.</h4>
        </div>
      ) : (
        <table className='table table-striped table-bordered table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Application Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id}>
                <td>{index + 1}</td>
                <td>{app.fullName || `${app.firstName} ${app.lastName}`}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>
                  {app.timestamp?.toDate
                    ? app.timestamp.toDate().toLocaleDateString('en-US')
                    : 'Not Provided'}
                </td>
                <td>
                  <span
                    className={`badge bg-${
                      app.status === 'approved'
                        ? 'success'
                        : app.status === 'rejected'
                        ? 'danger'
                        : 'warning'
                    }`}
                  >
                    {app.status === 'approved'
                      ? 'Approved'
                      : app.status === 'rejected'
                      ? 'Rejected'
                      : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    className='btn btn-info btn-sm me-2'
                    onClick={() => setSelectedApplication(app)}
                  >
                    View
                  </button>
                  <button className='btn btn-danger btn-sm' onClick={() => {}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* MODAL */}
      {selectedApplication && (
        <div
          className='modal fade show d-block text-secondary'
          tabIndex='-1'
          role='dialog'
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <div className='modal-dialog modal-lg' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Application Details</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setSelectedApplication(null)}
                ></button>
              </div>
              <div className='modal-body'>
                <h4>
                  {selectedApplication.fullName ||
                    `${selectedApplication.firstName} ${selectedApplication.lastName}`}
                </h4>
                <p>
                  <strong>Email:</strong> {selectedApplication.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedApplication.phone}
                </p>
                <p>
                  <strong>Status:</strong> {selectedApplication.status}
                </p>
              </div>
              <div className='modal-footer'>
                {selectedApplication.status !== 'approved' && (
                  <button
                    className='btn btn-success'
                    onClick={() =>
                      handleApplicationAction(
                        selectedApplication.id,
                        'approved'
                      )
                    }
                    disabled={actionLoading}
                  >
                    {actionLoading ? 'Processing...' : 'Approve'}
                  </button>
                )}
                {selectedApplication.status !== 'rejected' && (
                  <button
                    className='btn btn-danger'
                    onClick={() =>
                      handleApplicationAction(
                        selectedApplication.id,
                        'rejected'
                      )
                    }
                    disabled={actionLoading}
                  >
                    {actionLoading ? 'Processing...' : 'Reject'}
                  </button>
                )}
                <button
                  className='btn btn-secondary'
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
