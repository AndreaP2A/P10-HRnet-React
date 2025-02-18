import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import "../index.css";
import PropTypes from "prop-types";

const Home = ({ onAddEmployee }) => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <EmployeeForm onAddEmployee={onAddEmployee} />
      </div>
    </div>
  );
};
Home.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
};

export default Home;
