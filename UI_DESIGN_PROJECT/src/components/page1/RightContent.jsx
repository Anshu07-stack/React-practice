
import RightCard from './RightCard'
 
 const RightContent = (props) => {
  console.log(props.users );
  
  
   return (
      <div id='right' className='h-full flex flex-nowrap gap-10 overflow-x-auto w-2/3  p-6'>
        {props.users.map(function(elem,index){
          return <RightCard key={index} index={index} img={elem.img} tag={elem.tag} />
        })}
    </div>
   )
 }
 
 export default RightContent
 