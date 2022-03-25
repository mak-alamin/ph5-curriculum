import "./App.css";
import LeftSidebar from "./containers/LeftSidebar/LeftSidebar";
import MainContent from "./containers/MainContent/MainContent";

function App() {
  return (
    <div className="d-flex align-items-start">
      <LeftSidebar></LeftSidebar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
