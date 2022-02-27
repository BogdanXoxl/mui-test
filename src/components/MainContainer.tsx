import React, {FC} from 'react';
import {Container, Box, Stepper, StepButton, Step, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

interface Props{
    title: string;
}

const MainContainer:FC<Props> = ({title, children}) => {
    const steps = ['Среднее значение', 'Символы в тексте', 'Заменить пробелы', 'Домашняя библиотека'];
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Container maxWidth="sm" sx={{pt: '10vh', pb: '1rem'}}>
            <Box sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
                <Stepper nonLinear alternativeLabel activeStep={(Number(location.pathname.replaceAll('/', ''))||1)-1}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepButton color="inherit" onClick={() => navigate(`/${index+1}`)}>
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>
                {children}
            </Box>
        </Container>
    );
};

export default MainContainer;
