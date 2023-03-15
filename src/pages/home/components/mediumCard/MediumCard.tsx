import React from "react";
interface Props {
  card: {
    hinhAnh: string;
    tieuDe: string;
  };
}
function MediumCard(props: Props) {
  return (
    <div className="hover:scale-105 transform transition duration-150 ease-out cursor-pointer">
      <div className="relative h-80 w-80">
        <img
          className="rounded-xl"
          src={props.card.hinhAnh}
          alt={props.card.tieuDe}
        />
      </div>
      <h3 className="text-2xl mt-3 overflow-hidden text-ellipsis whitespace-nowrap">
        {props.card.tieuDe}
      </h3>
    </div>
  );
}

export default MediumCard;
