import {configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

 
import { setupListeners } from '@reduxjs/toolkit/query';
import {userApi} from './userApi'

const store = configureStore({
    reducer:{
        user_info: userReducer ,
        [userApi.reducerPath]:userApi.reducer 
    }, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
   
}) 
  
setupListeners(store.dispatch)

export default store; 

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
