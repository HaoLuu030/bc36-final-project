import React, { useState } from "react";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string | number;
  patternErrorMessage?: string;
  pattern?: string;
  required?: boolean;
}
function FormInput(props: Props) {
  const [errorMessage, setErrorMessage] = useState("");
  const { label, handleChange, name, patternErrorMessage, ...inputProps } =
    props;
  const handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
    let message = "";
    const { validity } = event.target as HTMLInputElement;
    const { valueMissing, patternMismatch } = validity;

    if (valueMissing) {
      message = "Trường này không được bỏ trống";
    }
    if (patternMismatch && patternErrorMessage) {
      message = patternErrorMessage;
    }
    console.log(patternMismatch);
    setErrorMessage(message);
  };

  return (
    <div className="form-item-sign-up space-y-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        title={label}
        name={props.name}
        {...inputProps}
        onChange={handleChange}
        className="form-input-sign-up"
        id={props.name}
        onBlur={handleBlur}
      />
      <span className="text-red-500">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
