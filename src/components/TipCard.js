import './TipCard.scss';

const TipCard = ({title, text, icon}) => {
  return (
    <div className='tip-card'>
        <div className='tip-text'>
          <h3 className='tip-title'>
            {icon && <div className='tip-icon'>{icon}</div>}{title}
          </h3>
          <p className='tip-text'>{text}</p>
        </div>
    </div>
  )
}

export default TipCard