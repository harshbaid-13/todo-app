"use client"
import Card from "@/components/Card"
import CompletedList from "@/components/CompletedList"
import Loader from "@/components/Loader/Loader"
import OngoingList from "@/components/OngoingList"
import TodosList from "@/components/TodosList"
import { editTodo, setLoading, setTodos } from "@/features/todo/todoSlice"
import axios from "axios"
import { useEffect } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useDispatch, useSelector } from "react-redux"

const Todos = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.todo.loading);
    const getAllTodos = async () => {
        dispatch(setLoading(true));
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`
            );
            dispatch(setTodos(data.data));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        getAllTodos();
    }, [])
    const onDragEnd = async (result) => {
        console.log(result);
        const { source, destination } = result;
        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;
        if (source.droppableId !== destination.droppableId) {
            try {
                const { data } = await axios.put(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${result.draggableId}`, {
                    status: destination.droppableId?.toUpperCase()
                })
                if (data.success) {
                    dispatch(editTodo(data.data));
                }
                else {
                    alert(data?.message);
                }
            } catch (err) { console.error(err) }
        } else {
            //TODO: modify indexes
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {loading ? <Loader /> : <div className="flex max-w-xs md:flex-row flex-col  md:max-w-screen-xl  mx-auto h-auto text-xl gap-8 justify-center">
                <Card heading={"ToDo"}>
                    <TodosList />
                </Card>
                <Card heading={"Doing"}>
                    <OngoingList />
                </Card>
                <Card heading={"Done"}>
                    <CompletedList />
                </Card>
            </div >}
        </DragDropContext>
    )
}

export default Todos