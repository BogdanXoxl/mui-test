import { bindActionCreators } from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from ".";
import {calculate} from "./Page1Slice";
import {getSym} from "./Page2Slice";
import {replace} from "./Page3Slice";
import {add, del} from "./Page4Slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => bindActionCreators({
    calculate,
    getSym,
    replace,
    add,
    del
}, useAppDispatch());