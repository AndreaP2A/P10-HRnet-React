import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function MyDatePicker({
  label,
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
  defaultMonth,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selected, setSelected] = useState(selectedDate);
  const datePickerRef = useRef(null);

  const handleDateSelect = (date) => {
    setSelected(date);
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
        value={selected ? selected.toLocaleDateString() : ""}
        onFocus={() => setShowDatePicker(true)}
        readOnly
      />
      {showDatePicker && (
        <div className="datepicker-overlay">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDateSelect}
            disabled={disabledDays}
            captionLayout="dropdown"
            defaultMonth={defaultMonth}
            footer={
              selected
                ? `Selected: ${selected.toLocaleDateString()}`
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
