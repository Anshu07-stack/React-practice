

const RightCardContent = (props) => {
  return (
     <div className='h-full w-full absolute top-0 left-0  flex flex-col justify-between p-8'>
            <h2 className='bg-amber-50 flex justify-center  items-center rounded-full h-10 w-10 text-2xl font-bold'>{props.index+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit dicta id adipisci, assumenda nemo.</p>
                <div className=' flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium rounded-full px-7 py-2'>
                        {props.tag}
                    </button>
                     <button  className='bg-blue-600 text-white font-medium rounded-full px-4 py-3'>
                        <i className="ri-arrow-right-line"></i>
                     </button>
                </div>
            </div>
      </div>
  )
}

export default RightCardContent
