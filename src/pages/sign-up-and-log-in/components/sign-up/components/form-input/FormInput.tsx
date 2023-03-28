import React, { ChangeEventHandler } from "react";
interface Props {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string | number;
}
function FormInput(props: Props) {
  return (
    <div className="form-item-sign-up">
      <label htmlFor="name" className="form-label">
        {props.label}
      </label>
      <input
        onChange={props.handleChange}
        type={props.type}
        className="form-input-sign-up"
        id={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormInput;
