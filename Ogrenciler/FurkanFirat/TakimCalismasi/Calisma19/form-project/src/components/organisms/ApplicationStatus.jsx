import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { LoadingSpinner } from '../atoms/LoadingSpinner';
import { RedirectLink } from '../atoms/RedirectLink';

export const ApplicationStatus = () => {
  const [application, setApplication] = useState(null);
  const [applicationLoading, setApplicationLoading] = useState(true);
  const { currentUser, isLoading } = useAuth();

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      if (!currentUser) {
        setApplicationLoading(false);
        return;
      }

      try {
        const applicationsQuery = query(
          collection(db, 'applications'),
          where('email', '==', currentUser.email)
        );

        const querySnapshot = await getDocs(applicationsQuery);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setApplication({
            id: querySnapshot.docs[0].id,
            ...docData,
          });
        } else {
          setApplication(null);
        }
      } catch (error) {
        console.error('Error fetching application status:', error);
        setApplication(null);
      } finally {
        setApplicationLoading(false);
      }
    };

    fetchApplicationStatus();
  }, [currentUser, isLoading]);

  if (isLoading || applicationLoading) {
    return (
      <div className='text-center py-4'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className='card p-4 my-4'>
        <h4>Please Login</h4>
        <p>
          You need to login to check your application status or submit a new
          application.
        </p>
        <Link to='/login'>
          <Button variant='primary'>Login</Button>
        </Link>
        <RedirectLink
          textContent="Don't have an account?"
          linkText='Register'
          to='/register'
          className='text-muted mt-3'
        />
      </div>
    );
  }

  if (!application) {
    return (
      <div className='card p-4 my-4'>
        <h4>Application Status</h4>
        <div>
          <p>You haven't submitted an application yet.</p>
          <Link to='/application-form'>
            <Button variant='primary'>Apply Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='card p-4 my-4'>
      <h4>Application Status</h4>
      <div>
        <p>
          Your application has been submitted on{' '}
          {application.timestamp?.toDate
            ? application.timestamp.toDate().toLocaleDateString('en-US')
            : 'N/A'}
        </p>
        <p>
          Current status: <Badge status={application.status} />
        </p>
        <div className='mt-3'>
          {application.status === 'pending' && (
            <p className='text-info'>
              Your application is being reviewed. We will notify you once
              there's an update.
            </p>
          )}
          {application.status === 'approved' && (
            <>
              <p className='text-success'>
                Congratulations! Your application has been approved. You can now
                take the exam.
              </p>
              <NavLink to='/technical-exam'>
                <Button variant='primary'>Take exam</Button>
              </NavLink>
            </>
          )}
          {application.status === 'rejected' && (
            <p className='text-danger'>
              We're sorry, but your application has been rejected. Please
              contact support for more information.
            </p>
          )}
          {application.status === 'exam passed' && (
            <p className='text-success'>
              Congrats! You have passed the exam. We will contact you soon.
            </p>
          )}
          {application.status === 'exam failed' && (
            <p className='text-danger'>
              You have failed the test. Unfortunately, we will not be moving
              forward.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
