import React from "react";

const FormSubmitButton = ({ isSubmitting }) => {
  return (
    <div className="d-grid gap-2 mt-4">
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Gönderiliyor...
          </>
        ) : (
          "Başvuruyu Tamamla"
        )}
      </button>
    </div>
  );
};

export default FormSubmitButton;
