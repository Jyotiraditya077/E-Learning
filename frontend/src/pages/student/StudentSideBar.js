import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StudentSideBar = () => {
    const location = useLocation();

    return (
        <SidebarContainer>
            <React.Fragment>
                <ListItemButton 
                    component={Link} 
                    to="/"
                    className={location.pathname === ("/" || "/Student/dashboard") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton 
                    component={Link} 
                    to="/Student/subjects"
                    className={location.pathname.startsWith("/Student/subjects") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton 
                    component={Link} 
                    to="/Student/attendance"
                    className={location.pathname.startsWith("/Student/attendance") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <ClassOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Attendance" />
                </ListItemButton>
                <ListItemButton 
                    component={Link} 
                    to="/Student/complain"
                    className={location.pathname.startsWith("/Student/complain") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton 
                    component={Link} 
                    to="/Student/profile"
                    className={location.pathname.startsWith("/Student/profile") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton 
                    component={Link} 
                    to="/logout"
                    className={location.pathname.startsWith("/logout") ? 'active' : ''}
                >
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    .MuiListItemButton-root {
        margin: 4px 8px;
        border-radius: 8px;
        transition: all 0.3s ease;
        color: white;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
    
    .MuiListItemIcon-root {
        min-width: 40px;
        color: inherit;
    }
    
    .MuiListItemText-primary {
        font-size: 0.9rem;
    }
    
    .MuiDivider-root {
        border-color: rgba(255, 255, 255, 0.1);
    }
    
    .MuiListSubheader-root {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        line-height: 1.5;
    }
`;

export default StudentSideBar