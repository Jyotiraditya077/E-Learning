import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const ViewMaterials = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await axios.get('/api/student/materials');
                setMaterials(response.data);
            } catch (error) {
                console.error('Error fetching materials:', error);
            }
        };
        fetchMaterials();
    }, []);

    const handleDownload = async (materialId) => {
        try {
            const response = await axios.get(`/api/student/materials/${materialId}/download`, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', materials.find(m => m._id === materialId).filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading material:', error);
        }
    };

    return (
        <div className="p-4">
            <Typography variant="h4" className="mb-6 text-[#1a237e]">
                Study Materials
            </Typography>
            <Card>
                <CardContent>
                    <List>
                        {materials.map((material) => (
                            <ListItem
                                key={material._id}
                                className="hover:bg-gray-50"
                                divider
                            >
                                <ListItemText
                                    primary={material.title}
                                    secondary={`Subject: ${material.subjectName} | Uploaded: ${new Date(material.uploadDate).toLocaleDateString()}`}
                                />
                                <ListItemSecondaryAction>
                                    <Button
                                        variant="contained"
                                        startIcon={<DownloadIcon />}
                                        className="bg-[#1a237e] hover:bg-[#0d1b4a]"
                                        onClick={() => handleDownload(material._id)}
                                    >
                                        Download
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

export default ViewMaterials; 