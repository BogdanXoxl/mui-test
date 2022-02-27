import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH } from 'redux-persist';
import {PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import Page1Slice from "./Page1Slice";
import Page2Slice from "./Page2Slice";
import Page3Slice from "./Page3Slice"
import Page4Slice from "./Page4Slice";


const rootReducer = combineReducers({
    one: Page1Slice,
    two: Page2Slice,
    three: Page3Slice,
    four: Page4Slice
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;