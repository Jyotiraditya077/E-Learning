import { Container } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);
    const { currentUser } = useSelector(state => state.user);

    const adminID = currentUser._id;

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <div className="container-fluid py-4">
            <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 shadow-sm dashboard-card">
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <img 
                                src={Students} 
                                alt="Students" 
                                className="dashboard-icon mb-3"
                                style={{ width: '55px' }} 
                            />
                            <h5 className="card-title text-center mb-3">
                                Total Students
                            </h5>
                            <div className="stats-number">
                                <CountUp
                                    start={0}
                                    end={numberOfStudents}
                                    duration={2.5}
                                    className="h2 mb-0 text-success"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 shadow-sm dashboard-card">
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <img 
                                src={Classes} 
                                alt="Classes" 
                                className="dashboard-icon mb-3"
                                style={{ width: '55px' }} 
                            />
                            <h5 className="card-title text-center mb-3">
                                Total Classes
                            </h5>
                            <div className="stats-number">
                                <CountUp
                                    start={0}
                                    end={numberOfClasses}
                                    duration={2.5}
                                    className="h2 mb-0 text-success"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 shadow-sm dashboard-card">
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <img 
                                src={Teachers} 
                                alt="Teachers" 
                                className="dashboard-icon mb-3"
                                style={{ width: '55px' }} 
                            />
                            <h5 className="card-title text-center mb-3">
                                Total Teachers
                            </h5>
                            <div className="stats-number">
                                <CountUp
                                    start={0}
                                    end={numberOfTeachers}
                                    duration={2.5}
                                    className="h2 mb-0 text-success"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <SeeNotice />
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .dashboard-card {
                        transition: transform 0.2s ease-in-out;
                        background: white;
                        border-radius: 10px;
                        padding: 1.5rem;
                    }
                    .dashboard-card:hover {
                        transform: translateY(-4px);
                    }
                    .dashboard-icon {
                        transition: transform 0.2s ease;
                    }
                    .dashboard-card:hover .dashboard-icon {
                        transform: scale(1.1);
                    }
                    @media (max-width: 576px) {
                        .dashboard-card {
                            padding: 1rem;
                        }
                        .dashboard-icon {
                            width: 45px !important;
                        }
                        .card-title {
                            font-size: 1.1rem;
                        }
                        .stats-number {
                            font-size: 0.9rem;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default AdminHomePage;