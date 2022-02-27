import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from ".";

interface CounterState {
    one: number;
    two: number;
    three: number;
    result?: number;
}

const initialState: CounterState = {
    one: 0,
    two: 0,
    three: 0,
    result: 0
};

export const counterSlice = createSlice({
    name: 'page1',
    initialState,
    reducers: {
        calculate: (state,  action: PayloadAction<CounterState>) => {
            let max = Math.max(...Object.values(action.payload));
            let min = Math.min(...Object.values(action.payload));
            state.result = Object.values(action.payload).filter(el => Number(el) !== min && Number(el) !== max)[0];
            state.one = action.payload.one;
            state.two = action.payload.two;
            state.three = action.payload.three;
        }
    },
});

export const { calculate } = counterSlice.actions;
export const selectCount = (state: RootState) => state.one;

export default counterSlice.reducer;