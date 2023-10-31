import "./TopInfo.css";
import lineHero from "../Images/lines-hero.svg";

export default function TopInfo() {
  return (
    <div className="d-flex top-info">
      <div className="col-1 d-flex flex-column events-none position-relative">
        <img
          alt=""
          className="position-relative start-line"
          src={lineHero}
        />
        <div className="mx-auto my-3 icon-container">
          <div className="position-relative d-inline-block">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon"
            >
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            <span className="position-absolute glowing-icon-glow"></span>
          </div>
        </div>
        <div className="git-line rounded mx-auto"></div>
      </div>
      <div className="col-11 text-left details">
        <div className="greeting">HELLO</div>
        <h1 className="mt-2 mt-sm-6 mt-md-11 mt-lg-9 mb-2 mb-sm-4 position-relative z-2 header">I'm KARTHIK</h1>
        <p className="role-desc">Frontend Developer . <br /> <i>M.Sc Graduate</i></p>
      </div>
    </div>
  );
}
