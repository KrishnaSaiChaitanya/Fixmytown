import React from "react";
import { useState } from "react";
import "../styles.css";
import logo from "../logo.svg"
import homeImg from "../homeImg.jpg"
import sewage from "../sewage.jpg"
import garbage from "../garbage.jpg"
import pothole from "../pothole.jpg"
import { Link } from "react-router-dom";
import number1 from "../number-1.png";
import number2 from "../number-2.png";
import number3 from "../number-3.png";
import number4 from "../number-4.png";


export default function LandingPage() {
  const [open, setOpen] = useState("false");
  function handleClick() {
    console.log("clicked!");
    if (open === "false") {
      setOpen("true");
    } else {
      setOpen("false");
    }
  }
  return (
    <div>
      <nav className="md:px-14 px-4 nav-clr mx-auto flex items-center md:flex justify-between sticky top-0" style={{height : "15vh"}}>
        <img src={logo} style={{height : "100px"}}/>
        <div className="block md:hidden">
          <button className="custom-img" onClick={handleClick}></button>
        </div>
        <ul className="custom-nav" data-expanded={open}>
          {/* <li className="px-2 cursor-pointer text-gray-600">Home</li>
          <li className="px-2 cursor-pointer text-gray-600">Careers</li>
          <li className="px-2 cursor-pointer text-gray-600">About Us</li> */}
          <li className="px-2 w-32 py-2 bg-inherit border-clr-primary rounded-lg  text-center font-semibold">
            <button>
            <Link to="/login" style={{textDecoration : "none"}} className="text-clr-primary">Log in</Link>
            </button>
          </li>
          <li className="px-2 w-32 py-2 button-clr-primary rounded-lg text-center font-medium">
            <button><Link to="/register" className="text-white" style={{textDecoration : "none"}}>Register</Link></button>
          </li>
        </ul>
      </nav>

      <div className="px-5 mx-auto flex justify-center md:py-10 md:justify-between md:px-14 items-center background_img" style={{height : "85vh"}}>
        <div className="flex flex-col gap-6 py-16 justify-center items-center md:items-start">
          <p className="hidden md:block text-lg text-clr-primary">
            Let's <strong>Begins</strong>
          </p>
          <h2
            className="font-bold md:text-5xl tracking-wide text-hero-clr text-4xl"
            style={{ lineHeight: "3.5rem" }}
          >
            Cleaning our <span className="text-clr-primary"> Streets </span>
            <br />
            One <span className="text-clr-primary">fix</span> at a time
          </h2>
          <p className="text-gray-600 text-sm tracking-wide">
            Iduino is an intresting platform that will teach
            <br />
            you in more an interactive way
          </p>
          <div className="block md:hidden">
            <img src={homeImg} alt="img." className="h-11/12 w-11/12" />
          </div>
          {/* <div className="flex items-center gap-5">
            <button className="p-3 w-36 button-clr-primary rounded-lg text-white text-center font-semibold text-lg">
              Join for free
            </button>
            <button className="w-10 h-10 bg-white rounded-full background_img_play"></button>
            <span className="font-bold text-lg">Play Video</span>
          </div> */}
        </div>
        <div className="hidden md:block w-3/5">
          <img src={homeImg} alt="img." className="" />
        </div>
      </div>

      <div className="flex-direction py-10 md:flex md:py-5" style={{height : "85vh"}}>
        {/* <div className="flex flex-col md:px-14 md:w-1/3 gap-5 px-7">
          <span className="text-clr-primary">WHAT WE GIVE</span>
          <span className="text-3xl font-semibold">
            What Do You Get From Us
          </span>
          <p className="text-clr">
            This platform offers well-designed robotics courses that cater to
            learners of all levels. From basic concepts to advanced programming,
            our courses provide hands-on experience to master robotics.
          </p>
        </div> */}
        <div className="flex-direction py-10 md:flex gap-10 px-5">
          <div className="flex flex-col gap-2 button-clr-cards px-4 py-7 rounded-xl justify-center min-h-fit w-1/3">
            <img src={garbage} alt="garbage"/>
            <h4 className="text-white font-bold">Professional Teacher</h4>
            <p className="text-white font-thin text-sm">
              {" "}
              We take pride in our team of teachers who are subject matter
              experts and have extensive teaching experience. Our teachers are
              dedicated to delivering high-quality education and ensuring
              student success.
            </p>
          </div>
          <div className="flex flex-col gap-2 button-clr-cards px-4 py-7 rounded-xl justify-center min-h-fit w-1/3">
            <img src={sewage} alt="sewage"/>
            <h4 className="text-white font-bold">Course Certificate </h4>
            <p className="text-white font-thin text-sm">
              {" "}
              Upon completing a course on our online education website, students
              will receive a certificate of completion to showcase their new
              skills and knowledge. Our certificates are recognized by industry
              professionals.
            </p>
          </div>
          <div className="flex flex-col gap-2 button-clr-cards px-4 py-7 rounded-xl justify-center min-h-fit w-1/3">
            <img src={pothole} alt="pothole"/>
            <h4 className="text-white font-bold">Interesting Learning</h4>
            <p className="text-white font-thin text-sm">
              {" "}
              Our courses are designed to engage learners and make the learning
              experience enjoyable. We use interactive tools and multimedia to
              create an immersive and stimulating learning environment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full items-center md:px-6 py-6 gap-10 px-4" style={{backgroundColor : "#f5f5f5"}}>
        <div className="hidden md:w-2/5 md:block">
          <img src={""} alt="img.." className="h-11/12 w-11/12" />
        </div>
        <div className="flex flex-col px-4 md:w-3/5 gap-3">
          <span className="text-4xl font-semibold">Step 1</span>
          <br />
          <span>REGISTER ON OUR AMAZING WEBSITE !</span>
        </div>
      </div>

      <div className="flex w-full h-full items-center md:px-6 py-6 gap-10 px-4">
        <div className="flex flex-col px-4 md:w-3/5 gap-3">
          <span className="text-4xl font-semibold">Step 2</span>
          <br />
          <span>REPORT THE ISSUE AND THE RELEVANT MNC</span>
        </div>
        <div className="hidden md:w-1/3 md:block">
          <img src={number2} alt="img.." className="w-2/5" />
        </div>
      </div>

      <div className="flex w-full h-full items-center md:px-6 py-6 gap-10 px-4" style={{backgroundColor : "#f5f5f5"}}>
        <div className="hidden md:w-2/5 md:block">
          <img src={""} alt="img.." className="h-11/12 w-11/12" />
        </div>
        <div className="flex flex-col px-4 md:w-3/5 gap-3">
          <span className="text-4xl font-semibold">Step 3</span>
          <br />
          <span>ADMIN WILL BE NOTIFIED AND REPORT WILL BE REVIEWED</span>
        </div>
      </div>

      <div className="flex w-full h-full items-center md:px-6 py-6 gap-10 px-4">
        <div className="flex flex-col px-4 md:w-3/5 gap-3">
          <span className="text-4xl font-semibold">Step 4</span>
          <br />
          <span>GET YOUR ISSUE RESOLVED !</span>
        </div>
        <div className="hidden md:w-1/3 md:block">
          <img src={number4} alt="img.." className="w-2/5" />
        </div>
      </div>
    </div>
  );
}
