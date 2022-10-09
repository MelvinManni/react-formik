/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

function StyledInput(props) {
  const { helperText, ...rest } = props;

  return (
    <div className="styledInput">
      <input {...rest} type={props.type} onChange={props.onChange} name={props.name} value={props.value} id={props.name} placeholder={props.label} />
      <small className="helperText">{helperText}</small>
    </div>
  );
}

export default StyledInput;
