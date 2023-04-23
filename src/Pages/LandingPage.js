import React from "react";
import { useState } from "react";


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

      <nav className="md:px-14 px-4 nav-clr mx-auto py-4 flex items-center md:flex justify-between md:py-3 drop-shadow-md sticky top-0">
      <div className="font-bold text-3xl logo">Iduino</div>
      <div className="block md:hidden">
        <button className="custom-img" onClick={handleClick}></button>
      </div>
      <ul className="custom-nav" data-expanded={open}>
        <li className="px-2 cursor-pointer text-gray-600">Home</li>
        <li className="px-2 cursor-pointer text-gray-600">Careers</li>
        <li className="px-2 cursor-pointer text-gray-600">About Us</li>
        <li className="px-2 w-32 py-2 bg-inherit text-clr-primary border-clr-primary rounded-lg  text-center font-semibold">
          <button>Log in</button>
        </li>
        <li className="px-2 w-32 py-2 button-clr-primary rounded-lg text-white text-center font-medium">
          <button>Register</button>
        </li>
      </ul>
    </nav>

      <div className="px-5  mx-auto flex justify-center md:py-10 md:justify-between md:px-14 items-center background_img">
      <div className="flex flex-col gap-6 py-16 justify-center items-center md:items-start">
        <p className="hidden md:block text-lg text-clr-primary">
          Let's <strong>Begins</strong>
        </p>
        <h2 className="font-bold md:text-5xl tracking-wide text-hero-clr text-4xl" style={{lineHeight : "3.5rem"}}>
          Master<span className="text-clr-primary"> Robotics </span>
          <br />
          Learn Online Today!
        </h2>
        <p className="text-gray-600 text-sm tracking-wide">
          Iduino is an intresting platform that will teach
          <br />
          you in more an interactive way
        </p>
        <div className="block md:hidden">
          <img src={""} alt="img." className="h-11/12 w-11/12" />
        </div>
        <div className="flex items-center gap-5">
          <button className="p-3 w-36 button-clr-primary rounded-lg text-white text-center font-semibold text-lg">
            Join for free
          </button>
          <button className="w-10 h-10 bg-white rounded-full background_img_play"></button>
          <span className="font-bold text-lg">Play Video</span>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={""} alt="img." className="h-11/12 w-11/12" />
      </div>
    </div>

      <div className="flex-direction py-10 md:flex md:py-20">
      <div className="flex flex-col md:px-14 md:w-1/3 gap-5 px-7">
        <span className="text-clr-primary">WHAT WE GIVE</span>
        <span className="text-3xl font-semibold">What Do You Get From Us</span>
        <p className="text-clr">
        This platform offers well-designed robotics courses that cater to learners of all levels. From basic concepts to advanced programming, our courses provide hands-on experience to master robotics.
        </p>
      </div>
      <div className="flex-direction py-10 md:flex gap-10 px-5 md:w-2/3">
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit">
          <span className="w-9 h-9 rounded-full bg-white background_img_card1" />
          <h4 className="text-white font-bold">Professional Teacher</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            We take pride in our team of teachers who are subject matter experts and have extensive teaching experience. Our teachers are dedicated to delivering high-quality education and ensuring student success.
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit">
          <span className="w-9 h-9 rounded-full bg-white background_img_card2" />
          <h4 className="text-white font-bold">Course Certificate </h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Upon completing a course on our online education website, students will receive a certificate of completion to showcase their new skills and knowledge. Our certificates are recognized by industry professionals.
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit ">
          <span className="w-9 h-9 rounded-full bg-white background_img_card3" />
          <h4 className="text-white font-bold">Interesting Learning</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Our courses are designed to engage learners and make the learning experience enjoyable. We use interactive tools and multimedia to create an immersive and stimulating learning environment.
          </p>
        </div>
      </div>
    </div>

      <div className="flex background-slide3 w-full h-full items-center md:px-16 py-16 gap-10 px-4">
      <div className="hidden md:w-2/5 md:block">
        <img src={""} alt="img.." className="h-11/12 w-11/12" />
      </div>
      <div className="flex flex-col md:px-14 md:w-3/5 gap-7 px-4">
        <span className="text-clr-slide3">SELECTED COURSE</span>
        <span className="text-4xl font-semibold text-white">
          People Taking Courses
        </span>
        <p className="text-white font-extralight">
        Education is a fundamental right, and we believe that cost should not be a barrier to learning. That's why we offer free courses to students who cannot afford them. Our courses are designed by experts and cover diverse subjects, from basic skills to advanced topics. We're committed to ensuring everyone has access to quality education, regardless of their financial situation.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">6,000</span>
            <span className="text-white font-extralight text-sm">
              People Veiws
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">4,000</span>
            <span className="text-white font-extralight text-sm">
              Users
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">6,000</span>
            <span className="text-white font-extralight text-sm">
              Courses
            </span>
          </div>
        </div>
      </div>
    </div>


    {/* <div style={{ backgroundColor: "#393E46", color: "white", paddingTop : "40px"}} className="md:px-4 px-2">
      <div className="flex flex-wrap flex-row">
        <div className="flex gap-5 flex-col p-6 justify-between" style={{flex : "1 0 45%"}}>
          <p className="text-2xl ">Iduino</p>
          Iduino is an intresting platform that will teach
          <br />
          you in more an interactive way
          <ul className="flex flex-row">
            <li className="pr-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={facebook} alt="facebook.." className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={instagram} alt="instagram" className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={youtube} alt="youtube.." className="h-4 w-4" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap flex-row justify-between p-4" style={{flex : "1 0 45%"}}>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Home</h3>
          <ul>
            <li className="mt-2">
              Careers
            </li>
            <li className="mt-2">
              About Us
            </li>
            <li className="mt-2">
              Login
            </li>
          </ul>
        </div>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Courses</h3>
          <ul>
          <li className="mt-2">
              Robotics
            </li>
            <li className="mt-2">
              Artificial Intelligence
            </li>
            <li className="mt-2">
              Machine Learning
            </li>
          </ul>
        </div>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <ul>
          <li className="mt-2">
              example@gmail.com
            </li>
          </ul>
        </div>
        </div>
      </div>
      <p className="text-md py-4 font-extralight text-center">&#169;All rights reserved.</p>
    </div> */}
    
    </div>
  );
}
