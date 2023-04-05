import React from "react";
import Verification from "./components/verification/Verification";
import Rooms from "./components/rooms/Rooms";

function RentedRoom() {
  return (
    <div className="p-6 md:px-0 md:flex justify-around max-w-6xl mx-auto md:space-x-4">
      <Verification />
      <Rooms />
    </div>
  );
}

export default RentedRoom;
