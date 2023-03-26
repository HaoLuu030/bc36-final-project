import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-2 p-10 md:grid-cols-4 gap-y-10 md:px-32 md:py-14 bg-gray-100">
      <div className="space-y-4 text-gray-800 text-xs">
        <h5 className="font-bold">Giới thiệu</h5>
        <p>Phương thức hoạt động</p>
        <p>Trang tin tức</p>
        <p>Nhà đầu tư</p>
        <p>AirbnbPlus</p>
        <p>Airbnb Luxe</p>
        <p>Hotel Tonight</p>
        <p>Cơ hội nghề nghiệp</p>
        <p>Thư của nhà sáng lập</p>
      </div>
      <div className="space-y-4 text-gray-800 text-xs">
        <h5 className="font-bold">Cộng đồng</h5>
        <p>Sự đa dạng và cảm giác thân thuộc</p>
        <p>Tiện nghi phù hợp cho người khuyết tật</p>
        <p>Chỗ ở cho tuyến đầu</p>
        <p>Lượt giới thiệu của khách</p>
        <p>Airbnb.org</p>
      </div>
      <div className="space-y-4 text-gray-800 text-xs">
        <h5 className="font-bold">Đón tiếp khách</h5>
        <p>Cho thuê nhà</p>
        <p>Tổ chức trải nghiệm</p>
        <p>Đón tiếp khách có trách nhiệm</p>
        <p>Trung tâm tài nguyên</p>
        <p>Trung tâm cộng đồng</p>
      </div>
      <div className="space-y-4 text-gray-800 text-xs">
        <h5 className="font-bold">Hỗ trợ</h5>
        <p>Ứng phó đại dịch COVID-19</p>
        <p>Trung tâm trợ giúp</p>
        <p>Các tùy chọn hủy</p>
        <p>Hỗ trợ khu dân cư</p>
        <p>Tin cậy và an toàn</p>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
