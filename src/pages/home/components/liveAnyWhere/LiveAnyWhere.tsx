import cardData from "../../../../data/mediumCardData.json";
import MediumCard from "../mediumCard/MediumCard";
function LiveAnyWhere() {
  const renderCard = () => {
    return cardData.map((elem: { hinhAnh: string; tieuDe: string }) => {
      return <MediumCard key={elem.tieuDe} card={elem} />;
    });
  };
  return (
    <section className="py-6">
      <h2 className="text-2xl lg:text-4xl font-semibold pb-5">Ở bất cứ đâu</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
        {renderCard()}
      </div>
    </section>
  );
}

export default LiveAnyWhere;
