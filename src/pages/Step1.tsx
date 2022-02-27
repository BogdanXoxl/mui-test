import React, {FC} from 'react';
import {Button, Typography } from '@mui/material';
import {SubmitHandler, useForm} from "react-hook-form";

import MainContainer from "../components/MainContainer";
import Form, {Input} from "../components/Form";

import {selectCount} from "../store/Page1Slice";
import {useActions, useAppSelector} from "../store/hooks";

interface Form1{
    one: number;
    two: number;
    three: number;
}

const Step1:FC = () => {
    const {result, one, two, three} = useAppSelector(selectCount);
    const {calculate} = useActions();
    const { register, handleSubmit } = useForm<Form1>({
        mode: "onBlur",
        defaultValues: {
            one,
            two,
            three
        }
    });
    const onSubmit: SubmitHandler<Form1> = data => calculate(data);

    return (
        <MainContainer title="Среднее значение">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        {...register('one')}
                        label="Введите 1 число"
                        type="number"
                        required
                    />
                    <Input
                        {...register('two')}
                        label="Введите 2 число"
                        type="number"
                        required
                    />
                    <Input
                        {...register('three')}
                        label="Введите 3 число"
                        type="number"
                        required
                    />
                </div>
                <Button variant="contained" type="submit" fullWidth >Найти среднее</Button>
            </Form>

            <Typography variant="h1" component="h2">
                {result}
            </Typography>
        </MainContainer>
    );
};

export default Step1;
