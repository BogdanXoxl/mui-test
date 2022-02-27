import React, {FC} from 'react';
import {Button, Typography, TextField} from '@mui/material';
import {SubmitHandler, useForm} from "react-hook-form";

import MainContainer from "../components/MainContainer";
import Form from "../components/Form";

import {replacementSelector} from "../store/Page3Slice";
import {useActions, useAppSelector} from "../store/hooks";

interface From3{
    text: string;
}

const Step3:FC = () => {
    const {result, text} = useAppSelector(replacementSelector);
    const {replace} = useActions();
    const { register, handleSubmit } = useForm<From3>({
        mode: "onBlur",
        defaultValues: {text}
    });

    const onSubmit: SubmitHandler<From3> = data => replace(data.text);

    return (
        <MainContainer title="Замена">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('text')}
                    label="Введите текст"
                    multiline
                    rows={5}
                    sx={{mb: '1rem'}}
                    fullWidth
                />
                <Button variant="contained" type="submit" fullWidth>Заменить пробелы на _</Button>
            </Form>
            {result &&
                <div style={{wordBreak: 'break-all', width: '100%'}}>
                    <Typography variant="h4" gutterBottom>Результат: </Typography>
                    <Typography paragraph>{result}</Typography>
                </div>
            }
        </MainContainer>
    );
};

export default Step3;