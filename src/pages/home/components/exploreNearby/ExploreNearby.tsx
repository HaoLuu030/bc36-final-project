import { fetchLocationByPageApi } from "../../../../services/location";
import { useEffect, useState } from "react";
import SmallCard from "../smallCard/SmallCard";

function ExploreNearBy() {
  const [locationList, setLocationList] = useState([]);
  const getLocation = async () => {
    const result = await fetchLocationByPageApi();
    setLocationList(result.data.content.data);
  };
  const renderLocation = () => {
    return locationList?.map(
      (elem: { id: number; tinhThanh: string; hinhAnh: string }) => {
        return <SmallCard key={elem.id} location={elem} />;
      }
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <section className="py-6">
      <h2 className="text-2xl lg:text-4xl font-semibold pb-5">
        Điểm đến gần đây
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderLocation()}
      </div>
    </section>
  );
}

export default ExploreNearBy;
