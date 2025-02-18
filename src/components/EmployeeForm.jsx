import Modal from "./Modal.jsx";
import { useState } from "react";
import { MyDatePicker } from "./DatePicker.jsx";
import SelectMenu from "./SelectMenu.jsx";
import statesUSA from "../data/statesUSA.js";
import departments from "../data/departments.js";
import PropTypes from "prop-types";

const EmployeeForm = ({ onAddEmployee }) => {
  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const newEmployee = {
      ...formData,
      dateOfBirth: dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : "",
      startDate: startDate ? startDate.toISOString().split("T")[0] : "",
    };
    onAddEmployee(newEmployee);
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
        <input
          type="text"
          id="first-name"
          name="firstName"
          onChange={handleChange}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          onChange={handleChange}
        />

        <MyDatePicker
          label="Date of Birth"
          selectedDate={dateOfBirth}
          onDateChange={setDateOfBirth}
          maxDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 18))
          }
        />

        <MyDatePicker
          label="Start Date"
          selectedDate={startDate}
          onDateChange={setStartDate}
          maxDate={new Date()}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" onChange={handleChange} />

          <label htmlFor="state">State</label>
          <SelectMenu
            options={statesUSA}
            placeholder="Select a state"
            onChange={(value) =>
              setFormData((prevData) => ({ ...prevData, state: value }))
            }
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            id="zip-code"
            name="zipCode"
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <SelectMenu
          options={departments}
          placeholder="Select a department"
          onChange={(value) =>
            setFormData((prevData) => ({ ...prevData, department: value }))
          }
        />
      </form>

      <button onClick={handleSave} className="save_btn">
        Save
      </button>

      <Modal show={showModal} onClose={handleClose}>
        Employee Created!
      </Modal>
    </div>
  );
};

EmployeeForm.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeForm;
