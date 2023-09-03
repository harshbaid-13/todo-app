"use client"
import { useSelector } from 'react-redux';
import Task from './Task'

const OngoingList = () => {
    const todos = useSelector((state) => state?.todo?.todos).filter(todo => todo?.status === 'DOING');
    return (
        <>
            {todos?.map((todo, index) => (
                <Task key={todo?._id} index={index} heading={"Doing"} startBtn={false} id={todo?._id} checkBtn={true} title={todo?.title} description={todo?.description} />
            ))}
        </>
    )
}

export default OngoingList