import TipCard from "../components/TipCard";
import './Tip.scss';

const Tip = () => {

  const tips = [
    {
      id: 1,
      title: "A1은 주차장 입구입니다.",
      text: "주차 자리를 선택하실 때 맵에 표시되는 A1은 입구와 가장 가까운 자리입니다.",
      icon: "💡",
    },
    {
      id: 2,
      title: "B1은 출구입니다.",
      text: "맵에 표시되는 B1은 출구와 가장 가까운 자리입니다.",
      icon: "💡",
    },
    {
      id: 3,
      title: "예약 시간은 넉넉하게 잡으세요.",
      text: "출차 지연 가능성을 고려해 여유 있게 예약하세요.",
      icon: "💡",
    },
  ];
  return (
    <div className="tip-page">
        <div className="tip-list">
          {tips.map((tip) => (
            <TipCard
              key={tip.id}
              title={tip.title}
              text={tip.text}
              icon={tip.icon}
            />
          ))}
        </div>
    </div>
  )
}

export default Tip