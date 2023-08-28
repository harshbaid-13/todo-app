"use client"
import { useEffect, useState } from 'react';
import Task from './Task'
import axios from 'axios';


const OngoingList = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos?status=DOING`
            );
            setTodos(data.data);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    useEffect(() => {
        getTodos();
    }, []);
    return (
        <>
            {todos?.map((todo) => (
                <Task key={todo._id} title={todo.title} description={todo.description} />
            ))}
        </>
    )
}

export default OngoingList