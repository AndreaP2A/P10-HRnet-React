import { useState, useEffect } from "react";
import TextInput from "./TextInput.jsx";
import { MyDatePicker } from "./DatePicker.jsx";
import SelectMenu from "./SelectMenu.jsx";
import SaveButton from "./SaveButton.jsx";
import statesUSA from "../data/statesUSA.js";
import departments from "../data/departments.js";
import PropTypes from "prop-types";
import Modal from "modal-window-ap2a";

/**
 * EmployeeForm component allows users to create a new employee by filling out a form.
 * It includes fields for personal information, address, and department.
 * The form data is saved to localStorage and a callback function is called upon submission.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Function} props.onAddEmployee - Callback function to handle the addition of a new employee
 * @returns {JSX.Element} The rendered EmployeeForm component
 */
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
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      Object.values(formData).every((value) => value !== "") &&
      dateOfBirth &&
      startDate;
    setIsFormValid(isValid);
  }, [formData, dateOfBirth, startDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const newEmployee = {
      ...formData,
      dateOfBirth: dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : "",
      startDate: startDate ? startDate.toISOString().split("T")[0] : "",
    };
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    onAddEmployee(newEmployee);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form className="form" id="create-employee">
        <TextInput
          label="First Name"
          id="first-name"
          name="firstName"
          onChange={handleChange}
        />

        <TextInput
          label="Last Name"
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
          defaultMonth={
            new Date(new Date().setFullYear(new Date().getFullYear() - 18))
          }
        />

        <MyDatePicker
          label="Start Date"
          selectedDate={startDate}
          onDateChange={setStartDate}
          maxDate={new Date()}
        />

        <fieldset className="form__address">
          <legend>Address</legend>

          <TextInput
            label="Street"
            id="street"
            name="street"
            onChange={handleChange}
          />
          <TextInput
            label="City"
            id="city"
            name="city"
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>
          <SelectMenu
            options={statesUSA}
            placeholder="Select a state"
            label="States"
            onChange={(value) => handleSelectChange("state", value)}
          />

          <TextInput
            label="Zip Code"
            id="zip-code"
            name="zipCode"
            type="number"
            onChange={handleChange}
          />
        </fieldset>

        <div className="form__inputs">
          <label htmlFor="department">Department</label>
          <SelectMenu
            options={departments}
            placeholder="Select a department"
            label="Departments"
            onChange={(value) => handleSelectChange("department", value)}
          />
        </div>
      </form>
      <SaveButton onClick={handleSave} disabled={!isFormValid} />

      <Modal
        show={showModal}
        onClose={handleClose}
        closeButtonX={true}
        closeButton={true}
      >
        Employee Created !
      </Modal>
    </div>
  );
};

EmployeeForm.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeForm;
