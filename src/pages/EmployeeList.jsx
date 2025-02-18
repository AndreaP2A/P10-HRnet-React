import DataTable from "../components/DataTable";
import PropTypes from "prop-types";

const EmployeeList = ({ employees }) => {
  const columns = [
    { Header: "First Name", accessor: "firstName", id: "firstName" },
    { Header: "Last Name", accessor: "lastName", id: "lastName" },
    { Header: "Start Date", accessor: "startDate", id: "startDate" },
    { Header: "Department", accessor: "department", id: "department" },
    { Header: "Date of Birth", accessor: "dateOfBirth", id: "dateOfBirth" },
    { Header: "Street", accessor: "street", id: "street" },
    { Header: "City", accessor: "city", id: "city" },
    { Header: "State", accessor: "state", id: "state" },
    { Header: "Zip Code", accessor: "zipCode", id: "zipCode" },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <DataTable columns={columns} data={employees} />
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
