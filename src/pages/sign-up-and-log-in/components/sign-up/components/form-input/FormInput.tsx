import React, { useState } from "react";
import "./index.scss";
interface Props {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string | number;
  errorMessage?: string;
  pattern?: string;
  // required?: boolean
}
function FormInput(props: Props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, handleChange, name, ...inputProps } = props;
  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="form-item-sign-up space-y-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        name={props.name}
        {...inputProps}
        onChange={handleChange}
        className="form-input-sign-up"
        id={props.name}
        onBlur={handleBlur}
        data-focus={focused.toString()}
        onFocus={() => {
          name === "confirmPassword" && setFocused(true);
        }}
      />
      <span className="text-red-500">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
