import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const HeroBanner1 = ({
  bgImg,
  subTitle,
  title,
  content,
  btnName,
  btnUrl,
  image1,
  image2,
  shapeImage1,
  shapeiamge2,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <div className="hero_main_area1 mt-5 ">
      <div className="hero1" data-background={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="main-headding mt-5">
                <h1
                  className="title tg-element-title animate-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  {parse(title)}
                </h1>
                <div className="space16"></div>
                <p className="animate-left" style={{ animationDelay: "0.4s" }}>
                  {content}
                </p>
                <div className="space30"></div>
                <div className="buttons">
                  <Link
                    className="theme-btn1 animate-left"
                    to={btnUrl}
                    style={{ animationDelay: "0.6s" }}
                  >
                    {btnName}{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero1-all-images">
                <div className="">
                  <img
                    src={shapeiamge2}
                    className="img-fluid rounded slide-in-right"
                    alt=""
                    style={{ height: "650px", objectFit: "cover" }}
                  />
                </div>

                <div className="image3 shape-animaiton3">
                  <img src={shapeImage1} alt="" />
                </div>
               
                <div className="shape1">
                  <img src="/assets/img/shapes/header1-shape1.png" alt="" />
                </div>
                <div className="shape2">
                  <img src="/assets/img/shapes/header1-shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </div>
  );
};

export default HeroBanner1;
