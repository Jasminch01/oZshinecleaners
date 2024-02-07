import AfterServices from "../Components/AfterServices/AfterServices";
import Banner from "../Components/Banner/Banner";
import BookingStep from "../Components/BookingStep";
import Faq from "../Components/Faq/Faq";

import Form from "../Components/Form/Form";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner title={`Your Unlimited Home cleaning partner`} size={`md:text-6xl`}></Banner>
      <div className="bg-secendary-c">
        <div >
        <AfterServices></AfterServices>
          <Form></Form>
          <Services></Services>
          <BookingStep/>
        </div>
      </div>
     
      <div className="max-w-6xl mx-auto">
        <Reviews></Reviews>
      </div>
      
      <div className="bg-secendary-c">
        <div className="max-w-6xl mx-auto">
          <Faq textColor={`text-gray-500`}></Faq>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
