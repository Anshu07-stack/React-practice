import React, { useEffect, useState } from 'react'

const Timer = ({setisOver}) => {
    const [leftTime, setleftTime] = useState(3)
    const [displayTime, setdisplayTime] = useState('')
// left time logic
    useEffect(() => {
        let intervalId = setInterval(() => {
            setleftTime(prev => {
                if (prev <= 0) {
                    clearInterval(intervalId)
                   
                    return 0;
                }
                return prev - 1
            })
        }, 1000)

        // return () => {
        //     clearInterval(intervalId)
        // }
    }, [])
// time format logic
    useEffect(()=>{

        if(leftTime === 0 ){
             setisOver(true)
        }
        let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)}:${Math.floor(leftTime%60).toString().padStart(2,0)} `);
        setdisplayTime(formatedTime)
    },[leftTime])

    return (
        <div>
            🕒 Time left : {displayTime}
        </div>
    )
}

export default Timer
