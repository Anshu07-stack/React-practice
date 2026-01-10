import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 rounded-4xl overflow-hidden relative '>
      <img  
      className='h-full w-full object-cover'
      src={props.img} alt="" />
     <RightCardContent index={props.index} tag={props.tag}/> 
    </div>
  )
}

export default RightCard
