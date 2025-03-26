import React from "react";
import { getStatusBadge, getStatusLabel } from "@/util/applicationStatus";
import { mapString } from "@/util/map";

const ApplicationCard = ({
  application,
  showPreferences = false,
  showStatus = true,
  showUniversityInfo = false,
  onSelect = null,
}) => {
  return (
    <div className="card shadow-lg border-0 mb-4 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="card-header bg-primary py-3 border-bottom border-light">
        <h5 className="card-title fw-bold mb-0 d-flex align-items-center text-white">
          {application.name} {application.surname}
        </h5>
      </div>

      <div className="card-body p-4">
        {showUniversityInfo && (
          <div className="university-info mb-4 pb-3 border-bottom border-light">
            <p className="text-capitalize mb-2 d-flex align-items-center">
              <i className="bi bi-building me-2 text-primary fs-5"></i>
              <span className="fw-semibold">
                {mapString(application.university)}
              </span>
            </p>
            <p className="text-capitalize mb-0 d-flex align-items-center">
              <i className="bi bi-journal-bookmark me-2 text-primary fs-5"></i>
              <span>
                {mapString(application.major)} - {mapString(application.grade)}
              </span>
            </p>
          </div>
        )}

        {showPreferences && (
          <div className="preferences-section mb-4 pb-3 border-bottom border-light">
            <h6 className="fw-semibold text-secondary mb-3">Tercihler</h6>
            <div className="row mb-2">
              <div className="col-md-4 fw-semibold text-muted">1. Tercih:</div>
              <div className="col">{application["preference-first"]}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-4 fw-semibold text-muted">2. Tercih:</div>
              <div className="col">{application["preference-second"]}</div>
            </div>
            <div className="row mb-0">
              <div className="col-md-4 fw-semibold text-muted">3. Tercih:</div>
              <div className="col">{application["preference-third"]}</div>
            </div>
          </div>
        )}

        {showStatus && (
          <div className="status-section mt-3">
            {application.status ? (
              <div className="d-flex align-items-center">
                <span className="me-2 fw-semibold">Durum:</span>
                <span
                  className={`badge ${getStatusBadge(
                    application.status,
                    application.result
                  )} py-2 px-3 rounded-pill`}
                >
                  {getStatusLabel(application.status, application.result)}
                </span>
              </div>
            ) : onSelect ? (
              <div className="text-end mt-3">
                <button
                  onClick={() => onSelect(application)}
                  className="btn btn-primary btn-sm rounded-pill px-4 py-2"
                >
                  <i className="bi bi-search me-2"></i> İncele
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationCard;
