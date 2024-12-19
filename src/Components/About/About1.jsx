import { Link } from "react-router-dom";

const About1 = ({
  image1,
  image2,
  supIcon,
  supTitle,
  supCon,
  subTitle,
  Title,
  content,
  featurelist,
  btnName,
  btnUrl,
}) => {
  return (
    <div className="about1 mt-4 ">
    <div className="container">
    <h2
  className="d-flex align-items-center justify-content-center gap-2 fs-1 fw-bold bg-theme-color mb-4 mt-0 title-animation"
  data-aos="zoom-in-left"
  data-aos-duration="700"
>
  <img
    src="/assets/img/icons/span1.png"
    alt="icon"
    className="img-fluid"
    style={{ width: "40px" }}
  />
  {subTitle}
</h2>

      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-image">
            <div className="image1">
              <img src={image1} alt="" />
            </div>
            <div className="image2 image-anime">
              <img src={image2} alt="" />
            </div>
            {/* <div className="icon-box">
              <img src={supIcon} alt="" />
              <h4>{supTitle}</h4>
              <p>{supCon}</p>
            </div> */}
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className="heading1">
            <h2 className="title tg-element-title">{Title}</h2>
            <div className="space16"></div>
            <p data-aos="fade-left" data-aos-duration="800">
              {content}
            </p>
  
            <ul
              className="list"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              {featurelist?.map((item, index) => (
                <li key={index}>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <div className="space30"></div>
            <div
              className=""
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {/* <Link className="theme-btn1" to={btnUrl}>
                {btnName}{" "}
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default About1;