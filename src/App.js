import "./App.css";
import heroBg from "./Images/hero-bg.webp";
import TopInfo from "./component/TopInfo";
import Education from "./component/Education";
import WorkExperience from "./component/WorkExperience";

function App() {
  return (
    <div className="main">
      <div className="bg-img">
        <img src={heroBg} alt="bg" />
      </div>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <TopInfo />
      <Education />
      <WorkExperience />
    </div>
  );
}

export default App;
