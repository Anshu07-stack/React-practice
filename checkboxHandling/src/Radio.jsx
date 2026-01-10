import React, { useState } from 'react'

const Radio = () => {

    const [gender,setGender] = useState('');
    const genders = ['male', 'female', 'others']

    
    return (
        <div>

            {genders.map(item=>{
                return(
                    <label key={item} htmlFor={item}>
                <input
                    id={item}
                    name='gender'
                    type="radio"
                    value={item}
                    checked={gender===item}
                    onChange={(e)=>setGender(e.target.value)}
                />
                {item}
            </label>
                )
            })}

            



            {/* <br />
            <label htmlFor="female">
                <input
                    id='female'
                    name='gender'
                    type="radio"
                    value={'female'}
                    checked={gender==='female'}
                    onChange={(e)=>setGender(e.target.value)}
                />
                female
            </label>
            <br />
             <label htmlFor="other">
                <input
                    id='other'
                    name='gender'
                    type="radio"
                    value={'other'}
                    checked={gender==='other'}
                    onChange={(e)=>setGender(e.target.value)}
                />
                other 
            </label> */}

        </div>
    )
}

export default Radio
