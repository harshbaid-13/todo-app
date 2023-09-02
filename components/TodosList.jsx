"use client"
import { useSelector } from 'react-redux';
import Task from './Task'

const TodosList = () => {
    const todos = useSelector((state) => state?.todo?.todos).filter(todo => todo?.status === 'TODO');
    return (
        <>
            {todos?.map((todo, index) => (
                <Task key={todo?._id} index={index} heading={"ToDo"} startBtn={true} id={todo?._id} title={todo?.title} description={todo?.description} />
            ))}
        </>

    )
}

export default TodosList