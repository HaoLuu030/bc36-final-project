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
  const [roomList, setRoomList] = useState([]);

  const getRoomByLocation = async () => {
    const result = await fetchRoombyLocationApi(params.locationId);
    setRoomList(result.data.content);
  };
  useEffect(() => {
    getRoomByLocation();
  }, []);
  useEffect(() => {
    getRoomByLocation();
  }, [params.locationId]);
  const renderLocationList = () => {
    return roomList.map(
      (elem: {
        giaTien: number;
        giuong: number;
        hinhAnh: string;
        tenPhong: string;
        id: number;
      }) => {
        console.log(elem);
        return (
          <InfoCard
            price={elem.giaTien}
            bed={elem.giuong}
            image={elem.hinhAnh}
            name={elem.tenPhong}
            id={elem.id}
          />
        );
      }
    );
  };
  return (
    <main className="md:grid md:grid-cols-3">
      <section className="col-span-2 pt-16 px-6">
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          space-y-4 sm:space-y-0 pb-4 gap-0"
        >
          {renderLocationList()}
        </div>
      </section>
      <section className="hidden md:col-span-1 md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738134.745292148!2d96.85510179240505!3d15.62804288979782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2s!4v1679470592661!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </section>
    </main>
  );
}

export default RoomByLocation;
