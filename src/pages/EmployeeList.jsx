import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import PropTypes from "prop-types";

const columnHelper = createColumnHelper();

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = [
    columnHelper.accessor("firstName", {
      header: "First Name",
      id: "firstName",
    }),
    columnHelper.accessor("lastName", {
      header: "Last Name",
      id: "lastName",
    }),
    columnHelper.accessor("startDate", {
      header: "Start Date",
      id: "startDate",
    }),
    columnHelper.accessor("department", {
      header: "Department",
      id: "department",
    }),
    columnHelper.accessor("dateOfBirth", {
      header: "Date of Birth",
      id: "dateOfBirth",
    }),
    columnHelper.accessor("street", {
      header: "Street",
      id: "street",
    }),
    columnHelper.accessor("city", {
      header: "City",
      id: "city",
    }),
    columnHelper.accessor("state", {
      header: "State",
      id: "state",
    }),
    columnHelper.accessor("zipCode", {
      header: "Zip Code",
      id: "zipCode",
    }),
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
