import React, {forwardRef} from 'react';
import {styled, TextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField/TextField";

const Form = styled('form')`
  width: 100%;
  margin-top: 1rem;
  &>div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const Input = forwardRef<any, TextFieldProps>((props, ref) => (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        {...props}
    />
));


export default Form;
