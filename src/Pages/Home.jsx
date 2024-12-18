import About1 from "../Components/About/About1";
import Award1 from "../Components/Award/Award1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devicon/devicon.min.css';


const Home = () => {
    return (
        <div className="home-page1 mt-5">
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="Programers Bytes & It Solution"
                title="Transform Your Business With Next Generation <span class='after'>IT Solutions</span>"
                content="Welcome to TechXen where we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and driving growth."
                btnName="Get Started Now"
                btnUrl="/contact"
                image1="/assets/img/hero/file1.png"
                image2="/assets/img/hero/file1.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/file1.png"
            ></HeroBanner1>
            <Award1></Award1>
            <About1
                video1="public\assets\6915012_Motion Graphics_Motion Graphic_1280x720.mp4"
                image2="/assets/img/about/file.jpg"
                supIcon="/assets/img/icons/about1-shape-icon.png"
                supTitle="24/7 Support"
                supCon="TechXen Technology & It Solution"
                subTitle="About Our Company"
                Title="Discover Our Story Empowering Business Through Innovation"
                content="TechXen pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
                featurelist={[
                    "Dramatically re-engineer value added IT system.",
                    "Highlight any unique selling points or differentiators.",
                    "Incorporate visuals such as team photos shots.",
                ]}
                btnName="Discover More"
                btnUrl="/about"
            ></About1>
            <Services1></Services1>
            {/* <Choose1></Choose1> */}
            <Project1></Project1>
            {/* <Pricing1></Pricing1> */}
            <Testimonial1></Testimonial1>
            <Blog1></Blog1>
            <Cta1></Cta1>
        </div>
    );
};

export default Home;