import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import reyting from "../../assets/images/reyting.svg"
import { instance } from '../../redux/actions'
import { BlackOutlineBtn, OutlineBtn, TestWarningOutlineBtn } from '../../styles'
export default function Reyting(props) {
   const navigate = useNavigate()
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
      <div className="container">


         <div className='row'>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bg-white p-3">
               <h1 className='colorH1'>{props.h1}</h1>
               <p className='maxwidthP' style={{
                  "fontSize": "18px", "lineHeight": "2", "fontWeight": "500"
               }}>{props.p}</p>
               <div className='d-flex gap-3 my-5'>
                  <div>
                     <button className='reytingButton' onClick={() => navigate("/")}>
                        Chiqish
                     </button>
                  </div>
                  <div>
                     <button onClick={() => navigate("/quiz")} className="searchButton">
                        Restart
                     </button>
                  </div>
               </div>
               <h1 className="colorH1 mt-5">Top 10 reyting</h1>
               {
                  topUsers.map((e, i) => <div className=''>
                     <div className="d-flex justify-content-between">
                        <div>
                           <p className='m-0' style={{ "fontSize": "14px", "lineHeight": "28px", "fontWeight": "500" }}>
                              {i + 1}.    {e.name}
                           </p>
                        </div>
                        <div>
                           <p>
                              {e.questions}-{e.trueAnsweredQuestions} | {e.time.slice(3, 8)} sek
                           </p>
                        </div>
                     </div>
                     <hr className='hr1' />
                  </div>)
               }
            </div>
            <div className="d-flex justify-content-center align-items-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
               <div className='p-4'>
                  <img className='img-fluid' src={reyting} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}
