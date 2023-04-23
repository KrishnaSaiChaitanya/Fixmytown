import React, { useEffect } from "react";
// import logo from "public/images/IMG-20230423-WA0003.jpg";
import homes from "../Images/HomePageCity.svg";
import "../Styles/TableStyles.css";
import group1 from "../Images/Group1.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="leftPart">
          <img src="images\IMG-20230423-WA0003.jpg" alt="logo" />
        </div>
        <div className="rightPart color">
          <ul>
            <li className="fs-4">REGISTER</li>
            <li className="fs-4">LOGIN</li>
          </ul>
        </div>
      </nav>
      <div className="color maintext">
        <h1>FIX MY TOWN </h1>
        <p>
          A MUNICIPAL SOLUTION
          <br />
          BY HAXKERS
        </p>
      </div>
      <div className="mainImg">
        <img src={homes} alt="main image.." className="mid__img" />
      </div>
      <div className="steps" data-aos="slide-right">
        <div className="iconsBox"></div>
        <div className="iconsBoxLeft">
          <span className="step1__text color">STEP 1</span>
          <br />
          <span>REGISTER ON OUR AMAZING WEBSITE !</span>
        </div>
      </div>
      <div className="steps-alt" data-aos="slide-left">
        <div className="iconsBox2"></div>
        <div className="iconsBoxRight">
          <span className="step1__text color">STEP 2</span>
          <br />
          <span>REPORT THE ISSUE AND THE RELEVANT MNC</span>
        </div>
      </div>
      <div className="steps" data-aos="slide-right">
        <div className="iconsBox3"></div>
        <div className="iconsBoxLeft">
          <span className="step1__text color">STEP 3</span>
          <br />
          <span>REGISTER ON OUR AMAZING WEBSITE !</span>
        </div>
      </div>
      <div className="steps-alt" data-aos="slide-left">
        <div className="iconsBox4"></div>
        <div className="iconsBoxRight">
          <span className="step1__text color">STEP 4</span>
          <br />
          <span>GET YOUR ISSUE RESOLVED !</span>
        </div>
      </div>
      <div>
        <img src={group1} alt="img " className="footer__img" />
      </div>
    </div>
  );
}
