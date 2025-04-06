import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import TeacherSideBar from './TeacherSideBar';
import TeacherHomePage from './TeacherHomePage';
import TeacherProfile from './TeacherProfile';
import ShowStudents from './ShowStudents';
import StudentAttendance from './StudentAttendance';
import StudentExamMarks from './StudentExamMarks';
import ViewStudent from './ViewStudent';
import Logout from '../Logout';

const TeacherDashboard = () => {
    return (
        <DashboardLayout title="Teacher" sideBar={<TeacherSideBar />}>
            <Routes>
                <Route path="/" element={<TeacherHomePage />} />
                <Route path='*' element={<Navigate to="/" />} />
                <Route path="/Teacher/dashboard" element={<TeacherHomePage />} />
                <Route path="/Teacher/profile" element={<TeacherProfile />} />
                <Route path="/Teacher/students" element={<ShowStudents />} />
                <Route path="/Teacher/student/:id" element={<ViewStudent />} />
                <Route path="/Teacher/student/attendance/:id" element={<StudentAttendance />} />
                <Route path="/Teacher/student/marks/:id" element={<StudentExamMarks />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </DashboardLayout>
    );
};

export default TeacherDashboard;