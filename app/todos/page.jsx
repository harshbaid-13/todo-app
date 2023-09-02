"use client"
import Card from "@/components/Card"
import CompletedList from "@/components/CompletedList"
import Loader from "@/components/Loader/Loader"
import OngoingList from "@/components/OngoingList"
import TodosList from "@/components/TodosList"
import { setLoading, setTodos } from "@/features/todo/todoSlice"
import axios from "axios"
import { useEffect } from "react"
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

    return (
        <>
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
        </>
    )
}

export default Todos