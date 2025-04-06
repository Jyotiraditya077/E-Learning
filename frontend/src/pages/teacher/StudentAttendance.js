import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const StudentAttendance = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentResponse, attendanceResponse] = await Promise.all([
                    axios.get(`/api/teacher/student/${id}`),
                    axios.get(`/api/teacher/student/${id}/attendance`)
                ]);
                setStudent(studentResponse.data);
                setAttendance(attendanceResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    if (!student) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Attendance for {student.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Attendance Summary
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Subject</TableCell>
                                            <TableCell>Remarks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {attendance.map((record) => (
                                            <TableRow key={record._id}>
                                                <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded ${
                                                        record.status === 'Present' ? 'bg-green-100 text-green-800' :
                                                        record.status === 'Absent' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {record.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell>{record.subject}</TableCell>
                                                <TableCell>{record.remarks}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default StudentAttendance; 