import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const ViewStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`/api/teacher/student/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        fetchStudent();
    }, [id]);

    if (!student) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Student Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Personal Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Name"
                                        secondary={student.name}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Roll Number"
                                        secondary={student.rollNumber}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Class"
                                        secondary={student.class}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Section"
                                        secondary={student.section}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Academic Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Subjects"
                                        secondary={student.subjects.join(', ')}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Attendance"
                                        secondary={`${student.attendance}%`}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Overall Performance"
                                        secondary={student.performance}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <div className="flex space-x-4">
                        <Button
                            variant="contained"
                            className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                            onClick={() => navigate(`/Teacher/student/attendance/${id}`)}
                        >
                            View Attendance
                        </Button>
                        <Button
                            variant="contained"
                            className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                            onClick={() => navigate(`/Teacher/student/marks/${id}`)}
                        >
                            View Marks
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ViewStudent; 