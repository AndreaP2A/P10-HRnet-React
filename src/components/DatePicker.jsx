import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

/**
 * MyDatePicker component renders a date picker input field with a label.
 * It allows users to select a date within a specified range and handles
 * date selection and outside click events.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the date picker input.
 * @param {Date} props.selectedDate - The initially selected date.
 * @param {function} props.onDateChange - Callback function to handle date changes.
 * @param {Date} [props.minDate] - The minimum selectable date.
 * @param {Date} [props.maxDate] - The maximum selectable date.
 * @param {Date} [props.defaultMonth] - The default month to display in the date picker.
 *
 * @returns {JSX.Element} The rendered date picker component.
 */
export function MyDatePicker({
  label,
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
  defaultMonth,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  const handleDateSelect = (date) => {
    onDateChange(date);
    setShowDatePicker(false);
  };

  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const disabledDays = [
    minDate && { before: minDate },
    maxDate && { after: maxDate },
  ].filter(Boolean);

  return (
    <div
      className="datepicker"
      style={{ position: "relative" }}
      ref={datePickerRef}
    >
      <label>{label}</label>
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        onFocus={() => setShowDatePicker(true)}
        readOnly
      />
      {showDatePicker && (
        <div className="datepicker-overlay">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={disabledDays}
            captionLayout="dropdown"
            defaultMonth={defaultMonth}
            footer={
              selectedDate
                ? `Selected: ${selectedDate.toLocaleDateString()}`
                : "Pick a day."
            }
          />
        </div>
      )}
    </div>
  );
}

MyDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  defaultMonth: PropTypes.instanceOf(Date),
};
