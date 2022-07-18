import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import AddQuestionModal from "../../components/AddQuestionModal";
import {accessToken, loadJobs} from "../../redux/actions";
import {instance} from "../../redux/actions";
import "./admin.css";

export default function Admin() {
    const [modal, setModal] = useState(false);
    // const []
    const [pictureId, setPictureId] = useState("");
    let {id} = useParams();
    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobsData?.quizzes);
    const navigate = useNavigate();
    const setActive = ({isActive}) => (isActive ? "active-link" : "");
    useEffect(() => {
        dispatch(loadJobs());
    }, []);

    const handleFile = (e) => {
        const formData = new FormData();
        formData.append("files", e);
        instance
            .post("api/v1/file/saveAttachments", formData)
            .then((res) => {
                console.log(res.data.data);
                setPictureId(res?.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const jobSaqlash = (e) => {
        e.preventDefault()
        instance.post("api/v1/quiz", {
            name: `${name}`
        }).then((res) => {
            console.log(res.data);
        })
    }
    return (
        <div>
            <div className=" w-100">
                <div className="container px-2 py-1 ">
                    <div className="row mt-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 menu ">
                            <ul className="list-group mb-4 py-4 listItem h-100">
                                {jobs.map((e, i) => (
                                    <li className="text-white li mb-2" key={i}>
                                        <NavLink
                                            style={({isActive}) => ({
                                                background: isActive ? "white" : "",
                                            })}
                                            to={`${e.id}`}
                                            className={"rounded a py-1 px-3"}
                                        >

                                            {e.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="job kiriting"/>
                            <button onClick={jobSaqlash}>
                                jobni saqlash
                            </button>
                            <input type="file" onChange={(e) => handleFile(e.target.files[0])}/>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-9 col-sm-6 col-12 px-4">
                            <div className="text-end">
                                <button
                                    className="btn btn-primary mb-3"
                                    onClick={() => setModal(true)}
                                >
                                    Add question
                                </button>
                                {<AddQuestionModal show={modal} handleClose={setModal}/>}
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
