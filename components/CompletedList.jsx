"use client"
import Task from './Task'
import { useSelector } from 'react-redux';

const CompletedList = () => {
    const todos = useSelector((state) => state?.todo?.todos).filter(todo => todo?.status === 'DONE');
    return (
        <>
            {todos?.map((todo, index) => (
                <Task key={todo?._id} index={index} heading={"Done"} startBtn={false} id={todo?._id} checkBtn={false} title={todo?.title} description={todo?.description} />
            ))}
        </>
    )
}

export default CompletedList