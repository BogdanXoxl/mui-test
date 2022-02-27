import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from "lodash";
import {RootState} from ".";

interface SymState {
    text: string
    result: string[];
}

const initialState: SymState = {
    text: "",
    result: []
};

export const symSlice = createSlice({
    name: 'page2',
    initialState,
    reducers: {
        getSym: (state,  action: PayloadAction<string>) => {
            state.result = _.uniq(action.payload.split('').sort());
            state.text = action.payload;
        }
    },
});

export const { getSym } = symSlice.actions;
export const symCount = (state: RootState) => state.two;

export default symSlice.reducer;