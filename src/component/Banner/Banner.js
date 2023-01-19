import BannerImage1 from "../../assets/bg/bg.jpg";
import BannerImage2 from "../../assets/bg/about-bg.jpg";
import "./style.css";
import { useState, useEffect } from "react";
import {FaChevronLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"

function Banner() {
  const [indeks, setIndeks] = useState(0);
  useEffect(() => {
    const handleSlide = (n) => {
      if (n > 1) {
        n = 0;
      } else if (n < 0) {
        n = 1;
      }
      const active = document.getElementsByClassName("slideImage");
      const rounded = document.getElementsByClassName("rounded");
      for (let i = 0; i < active.length; i++) {
        if (n !== i) {
          active[i].style.display = "none";
          rounded[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        } else {
          active[i].style.display = "block";
          rounded[i].style.backgroundColor = "rgb(255, 255, 255)";
        }
      }
    };
    handleSlide(indeks);
  }, [indeks]);


  function handleRight() {
    setIndeks((e) => {
      if (e === 2) {
        return 0;
      }
      return e + 1;
    });
  }

  function handleLeft() {
    setIndeks((e) => {
      if (e === 0) {
        return 2;
      }
      return e - 1;
    });
  }

  function handleDot(n) {
    setIndeks(n);
  }

  return (
    <section className="sliderBanner">
      <div className="slideImage fade">
        <img src={BannerImage1} alt="" className="banner" />
        <h2 className="description">This is a place where technology & creativity fused into digital chemistry</h2>
      </div>
      <div className="slideImage fade">
        <img src={BannerImage2} alt="" className="banner" />
        <h2 className="description">We dont't have the best but we have the greatest team</h2>
      </div>
      <div className="menu">
        <span className="rounded" onClick={() => handleDot(0)}></span>
        <span className="rounded" onClick={() => handleDot(1)}></span>
      </div>
      <div className="left" onClick={handleLeft}><FaChevronLeft /></div>
      <div className="right" onClick={handleRight}><FaAngleRight /></div>
    </section>
  );
}
export default Banner;
