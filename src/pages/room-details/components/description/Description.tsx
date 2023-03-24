import React from "react";

interface Props {
  moTa: string | undefined;
}
function Description(props: Props) {
  return (
    <div className="border-bottom">
      <p>{props.moTa}</p>
    </div>
  );
}

export default Description;
