import { ClockCircleOutlined } from '@ant-design/icons'
import React from 'react'
import watch from "../../assets/images/clock.mp4"
export default function WatchClock() {
   return (
      <>
         {/* <video style={{ "width": "30px", "height": "30px" }} autoPlay loop muted src={watch}></video> */}
         <ClockCircleOutlined className='animatedClock' />
      </>
   )
}


