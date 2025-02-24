import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import DataTable from "../components/DataTable";
import columns from "../data/employeeColumns";
import PropTypes from "prop-types";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className="list__container">
      <Link to="/" className="return__link">
        <FaArrowLeft className="return__link--icon" />
        <span>Return to the Create Employee Form</span>
      </Link>
      <div className="list__main">
        <h1>Current Employees</h1>
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeList;
