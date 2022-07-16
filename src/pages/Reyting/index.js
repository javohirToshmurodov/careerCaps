import React, { useState } from 'react'
import { useEffect } from 'react'
import reyting from "../../assets/images/reyting.svg"
import { instance } from '../../redux/actions'
export default function Reyting() {
   const [topUsers, setTopUsers] = useState([])
   const getTopUsers = () => {
      instance.get("api/v1/platform_user/top_users?top=10").then((res) => {
         console.log(res.data.data);
         setTopUsers(res.data.data)
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getTopUsers()
      console.log("topuserlar", topUsers);
   }, [])
   return (
      <div className='row'>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            {
               topUsers.map((e, i) => <div className='d-flex justify-content-between'>
                  <p>
                     {e.name}
                  </p>
                  <p>

                  </p>
               </div>)
            }
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

         </div>
      </div>
   )
}
