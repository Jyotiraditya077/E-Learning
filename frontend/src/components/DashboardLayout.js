import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    useMediaQuery,
    useTheme,
    SwipeableDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, Drawer } from './styles';
import AccountMenu from './AccountMenu';

const DashboardLayout = ({ children, title, sideBar }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(!isMobile);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }} className="min-h-screen bg-gray-50">
            <CssBaseline />
            <AppBar position='absolute' sx={{ marginLeft: isMobile ? 0 : open ? 240 : 0, width: isMobile ? '100%' : open ? 'calc(100% - 240px)' : '100%' }}>
                <Toolbar sx={{ pr: '24px' }} className="flex items-center justify-between">
                    <div className="flex items-center">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            className="mr-4 text-white"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className="text-white"
                        >
                            {title} Dashboard
                        </Typography>
                    </div>
                    <AccountMenu />
                </Toolbar>
            </AppBar>

            {isMobile ? (
                <SwipeableDrawer
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                    className="w-60"
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                            backgroundColor: '#1a237e',
                            color: '#fff',
                        },
                    }}
                >
                    <Toolbar className="flex items-center justify-end px-1 min-h-[56px] sm:min-h-[64px] bg-[#1a237e]">
                        <IconButton onClick={toggleDrawer} className="text-white">
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider className="border-opacity-12 border-white" />
                    <List component="nav" className="py-2">
                        {sideBar}
                    </List>
                </SwipeableDrawer>
            ) : (
                <Drawer variant="permanent" open={open}>
                    <Toolbar className="flex items-center justify-end px-1 min-h-[56px] sm:min-h-[64px] bg-[#1a237e]">
                        <IconButton onClick={toggleDrawer} className="text-white">
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" className="py-2">
                        {sideBar}
                    </List>
                </Drawer>
            )}

            <Box component="main" className="flex-grow p-4 sm:p-6 overflow-auto">
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout; 