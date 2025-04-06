import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import axios from 'axios';

const ShowStudents = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/api/teacher/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                My Students
            </Typography>
            <Card>
                <CardContent>
                    <List>
                        {students.map((student) => (
                            <ListItem
                                key={student._id}
                                className="hover:bg-gray-50"
                                divider
                            >
                                <ListItemText
                                    primary={`${student.name} (${student.rollNumber})`}
                                    secondary={`Class: ${student.class} | Section: ${student.section}`}
                                />
                                <ListItemSecondaryAction>
                                    <Button
                                        variant="contained"
                                        className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                                        onClick={() => navigate(`/Teacher/student/${student._id}`)}
                                    >
                                        View Details
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

export default ShowStudents; 