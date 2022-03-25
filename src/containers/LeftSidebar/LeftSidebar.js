import { useEffect, useState } from "react";
import Milestone from "../../components/Milestone/Milestone";

const LeftSidebar = () => {
  const [milestones, setMilestones] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/course/curriculum")
      .then((res) => res.json())
      .then((data) => {
        setMilestones(Object.values(data)[1]);
      });
  }, []);

  return (
    <div className="left-sidebar">
      <p>Total Milestones: {milestones.length}</p>
      {milestones.map((milestone) => {
        return (
          <Milestone milestone={milestone} key={milestone["_id"]}></Milestone>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
