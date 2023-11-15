import Banner from "../Components/Banner/Banner";
import Form from "../Components/Form/Form";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-[80%] mx-auto">
        <Form></Form>
      </div>
    </div>
  );
};

export default Home;
