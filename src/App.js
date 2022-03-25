import "./App.css";
import LeftSidebar from "./containers/LeftSidebar/LeftSidebar";
import MainContent from "./containers/MainContent/MainContent";

function App() {
  return (
    <div className="container-fluid d-flex my-5">
      <LeftSidebar></LeftSidebar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
