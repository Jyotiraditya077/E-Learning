import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import styled from 'styled-components';
import LandingImage from "../assets/landing.webp";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <ImageContainer>
                        <img src={LandingImage} alt="landing" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
                    </ImageContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <ContentContainer>
                            <StyledTitle>
                                Welcome to
                                <br />
                                Hacknotrix
                                <br />
                                Portal
                            </StyledTitle>
                            <StyledText>
                                Streamline college management, course organization, and student administration.
                                Seamlessly track academic progress, manage faculty, and handle campus operations.
                                Access student records, view academic performance, and facilitate campus communication.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Login
                                    </LightPurpleButton>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                    >
                                        Login as Guest
                                    </Button>
                                </StyledLink>
                                <StyledText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{color:"#550080"}}>
                                        Sign up
                                    </Link>
                                </StyledText>
                            </StyledBox>
                        </ContentContainer>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  @media (max-width: 600px) {
    padding: 16px;
    gap: 12px;
  }
`;

const StyledTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

const StyledText = styled.p`
  color: #550080;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: 1.6;
  font-size: clamp(1rem, 2vw, 1.1rem);
  @media (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
