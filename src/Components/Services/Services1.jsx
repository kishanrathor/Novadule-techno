import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/Home1/services1.json';
import { Link } from "react-router-dom";

const Services1 = () => {
  // State to toggle between showing 6 cards or all cards
  const [showAll, setShowAll] = useState(false);

  // Function to handle the toggle between "View More" and "View Less"
  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="service sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <SectionTitle
                SubTitle="Our Services"
                Title="Empower Your Business With Our Comprehensive Technology & IT Solutions"
              ></SectionTitle>
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          {/* Show only the first 6 items unless `showAll` is true */}
          {data.slice(0, showAll ? data.length : 3).map((item, i) => (
            <div
              key={i}
              className={`col-12 col-md-6 col-lg-4 ${item.addClass}`}
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <div className="single-box">
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="heading1">
                  <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                  <div className="space16"></div>
                  <p>{item.desc}</p>
                  <div className="space16"></div>
                  <Link to={item.btnLink} className="learn">
                    {item.btnText} <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
  <button
    className=" theme-btn1 btn-sm toggle-btn"
    onClick={toggleView}
  >
    {showAll ? "View Less" : "View More"}
    <span className={`arrow ${showAll ?  "arrow-down":"arrow-up" }`}></span>
  </button>
</div>


      </div>
    </div>
  );
};

export default Services1;
