import React, {FC} from 'react';
import {Button, TextField, Chip, styled} from '@mui/material';
import {SubmitHandler, useForm} from "react-hook-form";

import MainContainer from "../components/MainContainer";
import Form from "../components/Form";

import {symCount} from "../store/Page2Slice";
import {useActions, useAppSelector} from "../store/hooks";

interface Form2{
    text: string;
}

const Listofsym = styled('div')`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: .5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Step2:FC = () => {
    const {result, text} = useAppSelector(symCount);
    const {getSym} = useActions();
    const { register, handleSubmit } = useForm<Form2>({
        mode: "onBlur",
        defaultValues:{text}
    });

    const onSubmit: SubmitHandler<Form2> = data => getSym(data.text);

    return (
        <MainContainer title="Уникальные символы">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('text')}
                    label="Введите текст"
                    multiline
                    rows={5}
                    required
                    sx={{mb: '1rem'}}
                    fullWidth
                />
                <Button variant="contained" type="submit" fullWidth>Получить символы</Button>
            </Form>
            <Listofsym>
                {result.map(el => (
                    <Chip label={el} color="warning" variant="outlined" key={el}/>
                ))}
            </Listofsym>
        </MainContainer>
    );
};

export default Step2;
