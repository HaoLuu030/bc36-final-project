import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import "./index.scss";
import { useSearchParams } from "react-router-dom";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { randomNumGenerator } from "../../../utils";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchInfoAction } from "../../../store/action/searchActions";
import CardImage from "../../../components/card-image/CardImage";
interface Props {
  price: number;
  bed: number;
  image: string;
  name: string;
  id: number;
}
function InfoCard(props: Props) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const handleClick = () => {
    dispatch(
      setSearchInfoAction({
        location: searchParams.get("location"),
        checkInDate: new Date(
          moment(searchParams.get("checkInDate")).format("YYYY-MM-DD")
        ),
        checkOutDate: new Date(
          moment(searchParams.get("checkOutDate")).format("YYYY-MM-DD")
        ),
        numOfGuest: parseInt(searchParams.get("numOfGuest") || "1"),
      })
    );
  };
  return (
    <div className="info-card w-11/12">
      <CardImage />

      <NavLink
        onClick={handleClick}
        to={`/room-details/${props.id}`}
        className="card-body cursor-pointer hover:shadow-md transition duration-150 ease-out px-4 pb-2 rounded-md active:scale-90 block"
      >
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">
            Căn hộ ở {searchParams.get("location")}
          </h4>
          <p className="flex items-center text-xl font-bold">
            <StarIcon className="h-8 w-8 md:h-6 md:w-6 text-red-400" />
            {randomNumGenerator(1, 5)}
          </p>
        </div>
        <p className="info-text md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {props.name}
        </p>
        <p className="info-text">{props.bed} giường</p>
        <p className="info-text">
          {`${moment(searchParams.get("checkInDate")).format(
            "DD/MM"
          )} - ${moment(searchParams.get("checkOutDate")).format("DD/MM")}`}
        </p>
        <p className="text-right">
          <strong className="text-2xl lg:text-xl">${props.price}</strong>/đêm
        </p>
      </NavLink>
    </div>
  );
}

export default InfoCard;
