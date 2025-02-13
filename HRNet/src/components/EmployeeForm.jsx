import Modal from "./Modal.jsx";
import { useState } from "react";

const EmployeeForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="firstName" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="lastName" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="text" id="date-of-birth" name="dateOfBirth" />

        <label htmlFor="start-date">Start Date</label>
        <input type="text" id="start-date" name="startDate" />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />

          <label htmlFor="state">State</label>
          <select id="state" name="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" name="zipCode" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" name="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick={handleSave}>Save</button>

      <Modal show={showModal} onClose={handleClose}>
        Employee Created!
      </Modal>
    </div>
  );
};

export default EmployeeForm;
