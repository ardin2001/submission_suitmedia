import { useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((e) => !e);
  };
  return (
    <header>
      <div className="container center class-header">
        <div className="title">
          <h1>Company</h1>
        </div>
        <button onClick={showHandler} className="humburger">
          <FaBars />
        </button>
        <nav className={show.toString()}>
          <h2 className="subtittle">SideBar</h2>
          <ul>
            <li className="dropdown">
              <a href="#test">ABOUT</a>
              <div className="categories">
                <ul>
                  <li>
                    <a href="#home">HISTORY</a>
                  </li>
                  <li>
                    <a href="#home">VISION MISSION</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#work">OUR WORK</a>
            </li>
            <li>
              <a href="#team">OUR TEAM</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
