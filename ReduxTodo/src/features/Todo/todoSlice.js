import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState={
    todos: [{id:1,text:"hello"}]
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo ={
                id:nanoid(),//nanoid give random value
                text:action.payload
            }
           state.todos.push(todo)
        },

        //in state we got curr state
        //in action we get the pasiing data 
        removeTodo: (state,action) =>{
            state.todos=state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo}= todoSlice.actions

export default todoSlice.reducer