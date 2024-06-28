import Cards from "./Cards";
import "./Home.css";


const Home = () => {


  return (
    <div className="home">
        <h1>Insparation for your next trip</h1>
  
      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48679728/original/8e1b567b-1874-48a4-ba5b-301289ab4e00.png?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          distance="23km"
        />
            <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48679728/original/8e1b567b-1874-48a4-ba5b-301289ab4e00.png?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          distance="20km"
        />
            <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48679728/original/8e1b567b-1874-48a4-ba5b-301289ab4e00.png?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          distance="23km"
        />
            <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48679728/original/8e1b567b-1874-48a4-ba5b-301289ab4e00.png?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          distance="40km"
        />
      </div>

  
      
    </div>
  );
};

export default Home;