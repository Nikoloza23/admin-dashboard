import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
