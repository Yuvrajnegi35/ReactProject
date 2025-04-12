import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

function TodoItem() {
  const todos = useSelector((state) => state.todos || []); 
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center text-3xl text-white font-bold">Todos</div>
      <ul className="list-none">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded mx-16"
              key={todo.id}
            >
              <div className="text-white text-xl">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No todos yet.</p>
        )}
      </ul>
    </>
  );
}

export default TodoItem;
