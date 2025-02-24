import PropTypes from "prop-types";

/**
 * TextInput component renders a labeled input field.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - The label text for the input.
 * @param {string} props.id - The id for the input element.
 * @param {string} props.name - The name attribute for the input element.
 * @param {string} [props.type="text"] - The type attribute for the input element.
 * @param {function} props.onChange - The function to call when the input value changes.
 */
const TextInput = ({ label, id, name, type = "text", onChange }) => (
  <div className="form__inputs">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={name} onChange={onChange} />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
