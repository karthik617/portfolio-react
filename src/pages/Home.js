import "./Home.css";
import { Link } from 'react-router-dom';
import heroBg from "../Images/hero-bg.webp";
import { TopInfo, Education, WorkExperience } from "../component";

export default function Home() {
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
      <Link to="/aboutme" className="btn-about">About Me</Link>
      <TopInfo />
      <Education />
      <WorkExperience />
    </div>
  );
}
