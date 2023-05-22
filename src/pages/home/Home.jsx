import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import Date from "../../components/date/Date";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="date">
          <Date />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
        <div className="pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
