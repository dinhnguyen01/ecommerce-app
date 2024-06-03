import React, { useState } from "react";

const InputWithDropdown = ({ label, placeholderText, options, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (options && options.length > 0) {
      setIsDropdownOpen(true);
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
      setIsFocused(false);
    }, 200);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`${className}`}>
      <div className="input-container" tabIndex={-1} onBlur={handleBlur}>
        <input
          type="text"
          value={inputValue}
          onFocus={handleFocus}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
          placeholder={!isFocused && inputValue === "" ? placeholderText : ""}
        />
        <label
          className={`input-label ${isFocused || inputValue ? "active" : ""}`}
        >
          {label}
        </label>
        {isDropdownOpen && options && options.length > 0 && (
          <ul className="dropdown-menu_pay-info">
            {options.map((option, index) => (
              <li key={index} onMouseDown={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputWithDropdown;
