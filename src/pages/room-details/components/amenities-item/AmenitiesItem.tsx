import React from "react";
interface Props {
  show: boolean | undefined;
  imgString: string | undefined;
  amenText: string | undefined;
}

function AmenitiesItem(props: Props) {
  const { show, imgString, amenText } = props;
  return show ? (
    <li className="flex items-center space-x-4">
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="block w-6 h-6"
      >
        <path d={imgString}></path>
      </svg>
      <p className="text-xl">{amenText}</p>
    </li>
  ) : (
    <></>
  );
}

export default AmenitiesItem;
