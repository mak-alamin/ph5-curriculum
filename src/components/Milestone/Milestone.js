import React from "react";
import Module from "../Module/Module";

const Milestone = ({ milestone }) => {
  return (
    <div
      className="milestone accordion accordion-flush"
      id={`milestone-${milestone["_id"]}`}
    >
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={`flush-heading-${milestone["_id"]}`}
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-${milestone["_id"]}`}
          >
            {milestone.name}
          </button>
        </h2>
        <div
          id={`flush-collapse-${milestone["_id"]}`}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent={`#milestone-${milestone["_id"]}`}
        >
          <div className="accordion-body">
            {milestone.modules.map((module) => (
              <Module module={module} key={module["_id"]}></Module>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
