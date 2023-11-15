import AfterServices from "../Components/AfterServices/AfterServices";
import Banner from "../Components/Banner/Banner";
import Form from "../Components/Form/Form";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <div className=" bg-secendary-c">
        <div className="w-[80%] mx-auto">
          <Form></Form>
          <Services></Services>
          <AfterServices></AfterServices>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
