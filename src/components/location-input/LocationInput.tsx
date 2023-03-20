import { useState, useEffect } from "react";
import { SearchIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { fetchLocationApi } from "../../services/location";
interface Props {
  handleClick: (type: any) => void;
}

function LocationInput(props: Props) {
  const [locationInput, setLocationInput] = useState("");
  const [locationList, setLocationList] = useState([]);
  const handleChange = (e: any): void => {
    setLocationInput(e.target.value);
  };
  const handleSearch = (): void => {
    const idx = locationList.findIndex((location: { tenViTri: string }) => {
      return location.tenViTri === locationInput;
    });
    console.log(`/roombycity/${locationList[idx]["id"]}`);
  };
  const getLocation = async () => {
    const result = await fetchLocationApi();
    const filteredList = result.data.content.filter(
      (elem: { tenViTri: string }) => {
        return (
          locationInput &&
          elem.tenViTri.toLowerCase().includes(locationInput.toLowerCase())
        );
      }
    );
    setLocationList(filteredList);
  };
  useEffect(() => {
    getLocation();
  }, [locationInput]);
  const handleSelectLocation = (value: string) => {
    setLocationInput(value);
  };
  const renderLocation = (
    list: { tenViTri: string; id: number; tinhThanh: string }[]
  ) => {
    return list.map(
      (elem: { tenViTri: string; id: number; tinhThanh: string }) => {
        return (
          <div
            onClick={() => {
              handleSelectLocation(elem.tenViTri);
            }}
            className="location flex items-center space-x-4 cursor-pointer hover:bg-gray-100 px-3"
          >
            <LocationMarkerIcon
              key={elem.id}
              className="w-9 h-9 bg-gray-200 p-2 rounded-md"
            />
            <p className="text-sm text-gray-700">
              {elem.tenViTri}, {elem.tinhThanh}
            </p>
          </div>
        );
      }
    );
  };
  return (
    <div
      className="h-full cursor-pointer flex items-center justify-between lg:flex-col lg:items-start pl-6 lg:pr-6 py-3 flex-grow form-item relative"
      onClick={props.handleClick}
    >
      <label htmlFor="location">Địa điểm</label>
      <input
        value={locationInput}
        onChange={handleChange}
        placeholder="Bạn muốn đi đâu?"
        className="bg-transparent hover:border-none outline-none"
        type="text"
        id="location"
        list="locations"
      />
      <SearchIcon
        onClick={handleSearch}
        className="lg:hidden inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
      />
      {locationList.length > 0 ? (
        <div className="search-result absolute bg-white w-60 left-0 top-20 rounded-lg shadow-2xl space-y-2 max-h-[300px] overflow-y-auto py-2">
          {renderLocation(locationList)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LocationInput;
