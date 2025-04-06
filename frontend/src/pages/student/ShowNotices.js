import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const ShowNotices = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('/api/student/notices');
                setNotices(response.data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };
        fetchNotices();
    }, []);

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Notices
            </Typography>
            <Grid container spacing={3}>
                {notices.map((notice) => (
                    <Grid item xs={12} key={notice._id}>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent>
                                <Typography variant="h6" className="text-[#1a237e]">
                                    {notice.title}
                                </Typography>
                                <Typography color="textSecondary" className="mb-2">
                                    Posted on: {new Date(notice.date).toLocaleDateString()}
                                </Typography>
                                <Divider className="my-2" />
                                <Typography className="whitespace-pre-wrap">
                                    {notice.content}
                                </Typography>
                                {notice.attachment && (
                                    <Typography color="textSecondary" className="mt-2">
                                        Attachment: {notice.attachment}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ShowNotices; 