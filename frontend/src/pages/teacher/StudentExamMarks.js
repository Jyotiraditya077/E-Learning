import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import axios from 'axios';

const StudentExamMarks = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [marks, setMarks] = useState([]);
    const [newMark, setNewMark] = useState({
        subject: '',
        examType: '',
        marks: '',
        totalMarks: '',
        remarks: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentResponse, marksResponse] = await Promise.all([
                    axios.get(`/api/teacher/student/${id}`),
                    axios.get(`/api/teacher/student/${id}/marks`)
                ]);
                setStudent(studentResponse.data);
                setMarks(marksResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setNewMark({
            ...newMark,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/teacher/student/${id}/marks`, newMark);
            const response = await axios.get(`/api/teacher/student/${id}/marks`);
            setMarks(response.data);
            setNewMark({
                subject: '',
                examType: '',
                marks: '',
                totalMarks: '',
                remarks: ''
            });
        } catch (error) {
            console.error('Error adding marks:', error);
        }
    };

    if (!student) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Exam Marks for {student.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Add New Marks
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={newMark.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Exam Type"
                                            name="examType"
                                            value={newMark.examType}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Marks"
                                            name="marks"
                                            type="number"
                                            value={newMark.marks}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Total Marks"
                                            name="totalMarks"
                                            type="number"
                                            value={newMark.totalMarks}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Remarks"
                                            name="remarks"
                                            value={newMark.remarks}
                                            onChange={handleChange}
                                            multiline
                                            rows={2}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                                        >
                                            Add Marks
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" className="mb-4 text-[#1a237e]">
                                Marks History
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Subject</TableCell>
                                            <TableCell>Exam Type</TableCell>
                                            <TableCell>Marks</TableCell>
                                            <TableCell>Total</TableCell>
                                            <TableCell>Remarks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {marks.map((mark) => (
                                            <TableRow key={mark._id}>
                                                <TableCell>{mark.subject}</TableCell>
                                                <TableCell>{mark.examType}</TableCell>
                                                <TableCell>{mark.marks}</TableCell>
                                                <TableCell>{mark.totalMarks}</TableCell>
                                                <TableCell>{mark.remarks}</TableCell>
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

export default StudentExamMarks; 