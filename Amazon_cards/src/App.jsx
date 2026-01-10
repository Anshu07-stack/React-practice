import data from './data.json'

function App() {
 
  return (
    <> 
     <div className=" w-full flex gap-5 flex-col p-6 ">
        {data.map(function(phnDetails,index){
            return(
              <div key={index}
              className='flex bg-[#282828] rounded-lg p-3'>
              {/* image */}
              <div className='w-1/4 flex items-center justify-center '>
                <img src={phnDetails.image} alt="" />
              </div>


              {/* details */}
              <div className='flex-1 flex flex-col gap-4'>
                <h1>{phnDetails.title}</h1>
                <p className=''>⭐{phnDetails.rating} | {phnDetails.reviews}</p>
               <ul>
                 {phnDetails.details.map((item,index)=>(
                   <li className='list-disc ml-6' key={index}>
                    {item}
                   </li>
                ))} 
               </ul>
               <p className='text-green-600'>{phnDetails.offers.exchangeOffer}
                <br />
               <span className='text-green-600'>{phnDetails.offers.bankOffer}</span>
               </p>
               
              </div>
 

              {/* pricing */}
              <div className='flex flex-col justify-center px-5 items-end'>
                <h1 className='text-2xl font-bold'>{phnDetails.price }</h1>
                <p className='text-gray-400 line-through text-sm'>{phnDetails.originalPrice}</p>
                <p className='text-green-500 text-sm ' >{phnDetails.discount}</p>
              </div>

              </div>
            )
        })}
     </div>
    </>
  )
}

export default App
