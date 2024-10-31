"use client"
// frontend/pages/todo.js

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const domain = "https://rest-api-0hhj.onrender.com/";
  // const domain = "http://localhost:3001/";

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(`${domain}todo/list`, { withCredentials: true });
        console.log(response.data)
        setTodos(response.data);
        // console.log(todos)
      } catch (err) {
        console.error('タスクの取得に失敗しました:', err);
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
      }
    };

    fetchTodos();
  }, []);

  if (error) {
    return <div>エラーが発生しました: {error}</div>;
  }

  return (
    <div>
      <h1>タスクリスト</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        {/* {todos.param.id}
        {/* <li>{todos.id}</li> */}
      </ul>
    </div>
  );
};

export default TodoList;
