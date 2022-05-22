import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import "./list.scss";
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
