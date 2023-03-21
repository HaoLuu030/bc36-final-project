import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRoombyLocationApi } from "../../services/room";
import { useSearchParams } from "react-router-dom";
import { randomNumGenerator } from "../../utils";
import moment from "moment";
import InfoCard from "./info-card/InfoCard";

function RoomByLocation() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const [locationList, setLocationList] = useState([]);
  console.log(locationList);
  const getRoomByLocation = async () => {
    const result = await fetchRoombyLocationApi(params.locationId);
    setLocationList(result.data.content);
  };
  useEffect(() => {
    getRoomByLocation();
  }, []);
  const renderLocationList = () => {
    return locationList.map(
      (elem: {
        giaTien: number;
        giuong: number;
        khach: number;
        phongNgu: number;
        phongTam: number;
        hinhAnh: string;
        tenPhong: string;
      }) => {
        return (
          <InfoCard
            price={elem.giaTien}
            bed={elem.giuong}
            living={elem.khach}
            bedRoom={elem.phongNgu}
            bathRoom={elem.phongTam}
            image={elem.hinhAnh}
            name={elem.tenPhong}
          />
        );
      }
    );
  };
  return (
    <main className="pt-14 px-6">
      <section>
        {/* extra info */}
        <p className="text-xs">
          Có {randomNumGenerator(1, 2000)} chỗ ở cho{" "}
          {searchParams.get("numOfGuest")} khách
          {searchParams.get("checkInDate") && searchParams.get("checkOutDate")
            ? `, ${moment(searchParams.get("checkInDate")).format(
                "DD/MM"
              )} - ${moment(searchParams.get("checkOutDate")).format("DD/MM")}`
            : ""}
        </p>
        {/* title */}
        <h1 className="text-xl font-semibold mt-2 mb-6">
          Chỗ ở tại {searchParams.get("location")}
        </h1>
        {/* filter */}
        <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
          <p className="button">Loại nơi ở</p>
          <p className="button">Giá</p>
          <p className="button">Đặt ngay</p>
          <p className="button">Phòng và phòng ngủ</p>
          <p className="button">Bộ lọc khác</p>
        </div>
        {/* body */}
        {renderLocationList()}
      </section>
    </main>
  );
}

export default RoomByLocation;
