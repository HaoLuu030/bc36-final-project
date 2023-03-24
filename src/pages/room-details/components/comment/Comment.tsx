import moment from "moment";
import React, { useEffect, useState } from "react";
import { fetchCommentApi } from "../../../../services/comment";
interface Props {
  roomId: number | undefined;
}
function Comment(props: Props) {
  const [commentList, setCommentList] = useState([]);
  const getComments = async () => {
    const result = await fetchCommentApi();
    setCommentList(
      result.data.content.filter((elem: { maPhong: number }) => {
        return props.roomId === elem.maPhong;
      })
    );
  };
  useEffect(() => {
    getComments();
  }, []);
  const renderCommentList = () => {
    return commentList.map((elem: { ngayBinhLuan: Date; noiDung: string }) => {
      return (
        <div className="w-80 flex-shrink-0 p-4 border rounded-md">
          <div className="flex space-x-2 items-center pb-2">
            <img
              src="https://i.kym-cdn.com/entries/icons/mobile/000/034/065/terio.jpg"
              alt="black kid meme"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p>Ronaldo Jr.</p>
              <p className="text-gray-300 text-sm">
                {moment(elem.ngayBinhLuan).format("DD-MM-YYYY")}
              </p>
            </div>
          </div>
          <div>
            <p className="overflow-hidden text-ellipsis h-40 w-full">
              {elem.noiDung} + Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit corrupti quasi magnam quod molestiae
              odit iusto doloribus voluptatum exercitationem, earum nemo.
              Incidunt tempora, impedit dolorum iste ullam similique et natus
              necessitatibus rem velit eveniet ab delectus laborum maxime
              aliquid a commodi facilis cupiditate optio, iure itaque beatae
              laboriosam adipisci! Illum.
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide py-10">
      {renderCommentList()}
    </div>
  );
}

export default Comment;
