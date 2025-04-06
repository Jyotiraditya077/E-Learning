import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const password = "zxc"

  const { status, currentUser, currentRole } = useSelector(state => state.user);;

  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Adminlogin');
      }
    }

    else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1"
        const studentName = "Dipesh Awasthi"
        const fields = { rollNum, studentName, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Studentlogin');
      }
    }

    else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Teacherlogin');
      }
    }
  }

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      }
      else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    }
    else if (status === 'error') {
      setLoader(false)
      setMessage("Network Error")
      setShowPopup(true)
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <div onClick={() => navigateHandler("Admin")} style={{ width: '100%' }}>
              <StyledPaper elevation={3}>
                <Box mb={{ xs: 1, sm: 2 }}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>
                  Admin
                </StyledTypography>
                <StyledDescription>
                  Login as an administrator to access the dashboard to manage app data.
                </StyledDescription>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <div onClick={() => navigateHandler("Student")} style={{ width: '100%' }}>
              <StyledPaper elevation={3}>
                <Box mb={{ xs: 1, sm: 2 }}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>
                  Student
                </StyledTypography>
                <StyledDescription>
                  Login as a student to explore course materials and assignments.
                </StyledDescription>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <div onClick={() => navigateHandler("Teacher")} style={{ width: '100%' }}>
              <StyledPaper elevation={3}>
                <Box mb={{ xs: 1, sm: 2 }}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>
                  Teacher
                </StyledTypography>
                <StyledDescription>
                  Login as a teacher to create courses, assignments, and track student progress.
                </StyledDescription>
              </StyledPaper>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #1a365d 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
    z-index: 0;
  }

  @media (min-width: 600px) {
    padding: 2rem;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 1.5rem;
  text-align: center;
  background-color: rgba(16, 24, 64, 0.8);
  color: #a8b2d1;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  @media (min-width: 600px) {
    padding: 2rem;
    min-height: 300px;
  }

  &:hover {
    background-color: rgba(42, 52, 109, 0.9);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;

    &::before {
      transform: translateX(100%);
    }

    .MuiSvgIcon-root {
      color: #64ffda;
      transform: scale(1.1);
    }

    h2 {
      color: #64ffda;
    }

    p {
      color: #ffffff;
    }
  }

  .MuiSvgIcon-root {
    color: #a8b2d1;
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

    @media (min-width: 600px) {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 0.75rem;
  color: #a8b2d1;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  @media (min-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StyledDescription = styled.p`
  margin-top: 0.75rem;
  color: #a8b2d1;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  max-width: 90%;

  @media (min-width: 600px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;