import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default Home;
