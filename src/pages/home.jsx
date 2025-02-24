import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import "../index.css";
import PropTypes from "prop-types";

/**
 * Home component renders the homepage of the HRnet application.
 * It displays the title, a link to view current employees, and an employee form.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onAddEmployee - Callback function to handle adding a new employee.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = ({ onAddEmployee }) => {
  return (
    <div className="home__container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="home__main">
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
