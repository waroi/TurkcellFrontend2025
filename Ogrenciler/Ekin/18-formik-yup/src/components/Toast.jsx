import { useRef, useEffect } from "react";
import useStore from "../store/useStore";

export default function Toast() {
  const store = useStore();
  const toast = useRef();

  const bootstrapToast = new bootstrap.Toast(toast.current);

  useEffect(() => {
    if (store.toast) {
      bootstrapToast.show();

      console.log("allo");
    }
  }, [store.toast]);

  return (
    <div
      className="toast align-items-center text-bg-primary border-0 position-fixed top-50 start-50 translate-middle-x z"
      role="alert"
      ref={toast}
    >
      <div className="d-flex">
        <div className="toast-body">{store.toast}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
        ></button>
      </div>
    </div>
  );
}
