import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/home";
import EmployeeList from "../pages/EmployeeList";

const AppRouter = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onAddEmployee={handleAddEmployee} />} />
        <Route
          path="/employee-list"
          element={<EmployeeList employees={employees} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
