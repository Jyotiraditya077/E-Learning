import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const SubjectDetails = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);

    useEffect(() => {
        const fetchSubjectDetails = async () => {
            try {
                const response = await axios.get(`/api/student/subject/${id}`);
                setSubject(response.data);
            } catch (error) {
                console.error('Error fetching subject details:', error);
            }
        };
        fetchSubjectDetails();
    }, [id]);

    if (!subject) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                {subject.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card className="mb-4">
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Subject Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Subject Code"
                                        secondary={subject.code}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Teacher"
                                        secondary={subject.teacherName}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Description"
                                        secondary={subject.description}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Performance
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Attendance"
                                        secondary={`${subject.attendance}%`}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Current Grade"
                                        secondary={subject.grade || 'Not Available'}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default SubjectDetails; 