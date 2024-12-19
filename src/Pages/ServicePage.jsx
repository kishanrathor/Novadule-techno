import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Vission1 from "../Components/Mission/Vission1";
import Services1 from "../Components/Services/Services1";

const ServicePage = () => {
    return (
        <div className="service-page">
            {/* <BreadCumb Title="Our Services"></BreadCumb>
            <MarqueeText></MarqueeText> */}
            <Services1></Services1>
            
            <Vission1></Vission1>
            <Cta1></Cta1>
        </div>
    );
};

export default ServicePage;