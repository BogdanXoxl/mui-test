import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from ".";

interface ReplacementState {
    text: string
    result: string;
}

const initialState: ReplacementState = {
    text: "",
    result: ""
};

export const replacementSlice = createSlice({
    name: 'page3',
    initialState,
    reducers: {
        replace: (state,  action: PayloadAction<string>) => {
            state.result = action.payload.replaceAll(' ', '_');
            state.text = action.payload;
        }
    },
});

export const { replace } = replacementSlice.actions;
export const replacementSelector = (state: RootState) => state.three;

export default replacementSlice.reducer;