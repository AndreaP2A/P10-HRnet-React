import * as React from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import "../index.css";

/**
 * SelectMenu component renders a customizable select dropdown using Radix UI components.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.options - An array of option objects for the select menu.
 * @param {string} props.placeholder - The placeholder text for the select input.
 * @param {string} props.label - The label for the select menu.
 * @param {string} props.value - The currently selected value.
 * @param {function} props.onChange - The callback function to handle value changes.
 *
 * @returns {JSX.Element} The rendered SelectMenu component.
 */
const SelectMenu = ({ options, placeholder, label, value, onChange }) => (
  <Select.Root value={value} onValueChange={onChange}>
    <Select.Trigger className="SelectTrigger" aria-label={label}>
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <Select.Label className="SelectLabel">{label}</Select.Label>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Select.Item
      className={classnames("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
);

SelectItem.displayName = "SelectItem";

SelectItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

SelectMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
