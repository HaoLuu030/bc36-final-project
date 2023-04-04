import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserApi } from "../../../../services/user";
import { setUserInfoAction } from "../../../../store/action/userActions";
import moment from "moment";
interface Props {
  title: string;
  content: string;
  name: string;
  placeholder: string;
  type: string;
}
function PersonalInfoItem(props: Props) {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.userReducer);

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.content);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const mapSideNote = (type: string) => {
    switch (type) {
      case "name":
        return "Dùng tên trong giấy chứng thực du lịch, trong passport hay một loại giấy tờ nào khác";
      case "email":
        return "Nhập email mà bạn luôn có thể truy cập";
      case "phone":
        return "Chọn số điện thoại bạn thường hay sử dụng";
      default:
        return "Tính năng này đang được cập nhật";
    }
  };
  const mapContent = () => {
    if (props.type === "date") {
      return moment(props.content).format("DD/MM/YYYY");
    }
    if (props.content) {
      return props.content;
    }
    return "Chưa cập nhật";
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await editUserApi({
        ...userState.userInfo,
        [props.name]: inputValue,
      });

      dispatch(
        setUserInfoAction({
          ...userState.userInfo,
          [props.name]: inputValue,
        })
      );
      localStorage.setItem(
        "USER_INFO_KEY",
        JSON.stringify({
          ...userState.userInfo,
          [props.name]: inputValue,
        })
      );
      alert("Sửa thông tin thành công");
      setIsEdit(false);
      document.querySelectorAll(".personal-info-item").forEach((elem: any) => {
        elem.classList.remove("disabled");
      });
    } catch (error: any) {
      alert(error.response.data.content);
    }
  };

  const handleSetEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEdit(true);
    document.querySelectorAll(".personal-info-item").forEach((elem: any) => {
      if (!elem.contains(event.target)) {
        elem.classList.add("disabled");
      }
    });
  };
  const handleCancelEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEdit(false);
    document.querySelectorAll(".personal-info-item").forEach((elem: any) => {
      elem.classList.remove("disabled");
    });
    setInputValue(props.content);
  };
  return (
    <div className="border-bottom personal-info-item">
      {/* top */}
      <div className="flex justify-between">
        <h2 className="title-user-info">{props.title}</h2>

        {isEdit ? (
          <button
            onClick={handleCancelEdit}
            className="edit-switch font-bold underline cursor-pointer"
          >
            Hủy
          </button>
        ) : (
          <button
            onClick={handleSetEdit}
            className="edit-switch font-bold underline cursor-pointer"
          >
            {props.content ? "Sửa" : "Thêm"}
          </button>
        )}
      </div>

      {isEdit ? (
        <>
          {/* middle */}
          <p className="text-gray-400 text-base pr-16">
            {mapSideNote(props.name)}
          </p>
          {/* bottom */}
          <form onSubmit={handleSubmit}>
            {props.content ? (
              <input
                value={inputValue}
                onChange={handleChange}
                type={props.type}
                placeholder={props.placeholder}
                className="form-input-sign-up my-2 h-14"
              />
            ) : (
              <></>
            )}
            <button
              className={`w-28 h-12 bg-black text-white font-bold rounded-lg ${
                props.content === "" ? "hidden" : "block"
              }`}
            >
              Lưu
            </button>
          </form>
        </>
      ) : (
        <>{mapContent()}</>
      )}
    </div>
  );
}

export default PersonalInfoItem;
