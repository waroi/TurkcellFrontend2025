import React from "react";

const Accordion = ({ sections = [] }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="accordion" id="accordion">
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {section.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{section.fields}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
