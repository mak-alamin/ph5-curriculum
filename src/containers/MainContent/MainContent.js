import React from "react";

const MainContent = () => {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        ...
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        ...
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-messages"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
      >
        ...
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-settings"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        ...
      </div>
    </div>
  );
};

export default MainContent;
