import PropTypes from "prop-types";

/**
 * SaveButton component renders a button that can be disabled based on the form's validity.
 * It also displays an error message when the form is not valid.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Function} props.onClick - The function to call when the button is clicked
 * @param {boolean} props.disabled - Whether the button is disabled
 * @returns {JSX.Element} The rendered SaveButton component
 */
const SaveButton = ({ onClick, disabled }) => {
  return (
    <div className="save__container">
      {disabled && (
        <p className="save__container--error">
          The form has to be completely filled to register an employee.
        </p>
      )}
      <button
        onClick={onClick}
        className="save__container--btn"
        disabled={disabled}
      >
        Save
      </button>
    </div>
  );
};

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SaveButton;
