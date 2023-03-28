import React from "react";
interface Props {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  onChange: (event: React.FormEvent<HTMLFormElement>) => void;
}
function FormInput(props: Props) {
  return (
    <div className="form-item-sign-up">
      <label htmlFor="name" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-input-sign-up"
        id={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormInput;
