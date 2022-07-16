import React from 'react'
import { useEffect } from 'react'

export default function Result(props) {
   useEffect(() => {
      console.log(props);
   })
   return (
      <div>
         <h1 className="colorH1">

         </h1>

      </div>
   )
}
