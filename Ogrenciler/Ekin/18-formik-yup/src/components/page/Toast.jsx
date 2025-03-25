import { useRef, useEffect } from "react";

import useStore from "@/store/useStore";

export default function Toast() {
  const { toast } = useStore();

  return (
    <section className="position-fixed top-0 start-50 translate-middle-x z-3">
      {toast.map(({ key, message, variant }) => {
        return (
          <ToastInstance
            key={key}
            toastKey={key}
            message={message}
            variant={variant}
          />
        );
      })}
    </section>
  );
}

function ToastInstance({ toastKey, message, variant = "primary" }) {
  const toast = useRef();
  const store = useStore();

  useEffect(() => {
    new bootstrap.Toast(toast.current).show();

    toast.current.addEventListener("hidden.bs.toast", (event) => {
      event.preventDefault();
      store.removeToast(toastKey);
    });
  }, []);

  return (
    <div
      className={`toast align-items-center border-0 my-3 text-bg-${variant}`}
      role="alert"
      ref={toast}
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
        ></button>
      </div>
    </div>
  );
}
