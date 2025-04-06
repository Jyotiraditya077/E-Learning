import { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import axios from 'axios';

const SubmitComplain = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/student/complaints', formData);
            setSuccess('Complaint submitted successfully!');
            setFormData({ title: '', description: '', category: '' });
            setError('');
        } catch (error) {
            setError('Error submitting complaint. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Submit Complaint
            </Typography>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                                {success && <Alert severity="success" className="mb-4">{success}</Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                                >
                                    Submit Complaint
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SubmitComplain; 