'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { hideNotification } from '@/lib/features/notification/notificationSlice';
import { useEffect } from 'react';

export default function GenericAlert() {
  const dispatch = useDispatch();
  const { visible, message, type } = useSelector(
    (state: RootState) => state.notification
  );

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  return (
    <div
      className={`alert alert-${type} position-fixed top-10 start-50 translate-middle-x mt-12 z-99`}
      style={{ minWidth: '300px' }}
      role='alert'
    >
      {message}
    </div>
  );
}
