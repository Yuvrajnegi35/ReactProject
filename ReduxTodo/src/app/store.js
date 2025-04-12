import {configureStore} from '@reduxjs/toolkit';
import todoReduser from '../features/Todo/todoSlice';


export const store=configureStore({
    reducer: todoReduser
})