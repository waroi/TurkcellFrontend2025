import React, { useEffect } from 'react';
import { useToast } from '../../hooks/use-toast';
import './toaster.scss';

const Toaster = () => {
  const { toasts, dismiss } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        dismiss(toasts[0].id);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts, dismiss]);

  return (
    <div className="toaster">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className={`toaster-message ${toast.variant}`}
          onClick={() => dismiss(toast.id)}
        >
          {toast.title && <div className="toast-title">{toast.title}</div>}
          {toast.description && <div className="toast-description">{toast.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default Toaster;
