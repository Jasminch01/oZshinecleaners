import Banner from "../Components/Banner/Banner";
import Form from "../Components/Form/Form";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-[80%] mx-auto">
        <Form></Form>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
