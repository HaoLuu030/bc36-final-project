import React from "react";

interface Props {
  moTa: string | undefined;
}
function Description(props: Props) {
  return (
    <div className="border-bottom">
      <h2 className="detail-title">Mô tả</h2>
      <p>{props.moTa}</p>
    </div>
  );
}

export default Description;
