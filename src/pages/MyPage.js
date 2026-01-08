import Member from "./section/mypage/Member"
import NonMember from "./section/mypage/NonMember"

const MyPage = () => {
  return (
    <div className='mypage'>
      {/* <NonMember /> */}
      <Member />
    </div>
  )
}

export default MyPage