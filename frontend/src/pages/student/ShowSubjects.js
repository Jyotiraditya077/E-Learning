import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';

const ShowSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get('/api/student/subjects');
                setSubjects(response.data);
            } catch (error) {
                console.error('Error fetching subjects:', error);
            }
        };
        fetchSubjects();
    }, []);

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                My Subjects
            </Typography>
            <Grid container spacing={3}>
                {subjects.map((subject) => (
                    <Grid item xs={12} sm={6} md={4} key={subject._id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="flex flex-col h-full">
                                <Typography variant="h5" className="mb-2 text-[#1a237e]">
                                    {subject.name}
                                </Typography>
                                <Typography color="textSecondary" className="mb-4">
                                    Code: {subject.code}
                                </Typography>
                                <Typography className="mb-4">
                                    Teacher: {subject.teacherName}
                                </Typography>
                                <Button
                                    variant="contained"
                                    className="mt-auto bg-[#1a237e] hover:bg-[#0d1b4a]"
                                    onClick={() => navigate(`/Student/subject/${subject._id}`)}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ShowSubjects; 