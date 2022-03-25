import React from "react";

const Module = ({ module }) => {
  return (
    <div
      className="nav flex-column nav-pills me-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        className="nav-link active"
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
      >
        {module.name}
      </button>
    </div>
  );
};

export default Module;
