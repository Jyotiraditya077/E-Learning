import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import StudentSideBar from './StudentSideBar';
import StudentHomePage from './StudentHomePage';
import StudentProfile from './StudentProfile';
import ShowSubjects from './ShowSubjects';
import SubjectDetails from './SubjectDetails';
import ViewMaterials from './ViewMaterials';
import ShowNotices from './ShowNotices';
import SubmitComplain from './SubmitComplain';
import Logout from '../Logout';

const StudentDashboard = () => {
    return (
        <DashboardLayout title="Student" sideBar={<StudentSideBar />}>
            <Routes>
                <Route path="/" element={<StudentHomePage />} />
                <Route path='*' element={<Navigate to="/" />} />
                <Route path="/Student/dashboard" element={<StudentHomePage />} />
                <Route path="/Student/profile" element={<StudentProfile />} />
                <Route path="/Student/subjects" element={<ShowSubjects />} />
                <Route path="/Student/subject/:id" element={<SubjectDetails />} />
                <Route path="/Student/materials" element={<ViewMaterials />} />
                <Route path="/Student/notices" element={<ShowNotices />} />
                <Route path="/Student/complain" element={<SubmitComplain />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </DashboardLayout>
    );
};

export default StudentDashboard;