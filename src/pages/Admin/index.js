import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { loadJobs } from "../../redux/actions";
import { instance } from "../../redux/actions";
export default function Admin() {
const dispatch = useDispatch()
    const jobs = useSelector((state)=>state.jobsData?.quizzes)
    const navigate  = useNavigate()

  useEffect(() => {
      dispatch(loadJobs())
  }, []);
 
  return (
    <div>

      <div className=" w-100">
        <div className="container px-2 py-5">
      <h3 className="text-center">Dashboard</h3>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
              <ul className="list-group">
                {jobs.map((e, i) => (
                  <li className="list-group-item mb-1 bg-info text-white" key={i}>
                    <NavLink className={"text-white"} to={`${e.name}`}>{e.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-6 col-12">
                <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
