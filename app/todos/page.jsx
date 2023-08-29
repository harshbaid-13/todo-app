"use client"
import Card from "@/components/Card"
import CompletedList from "@/components/CompletedList"
import OngoingList from "@/components/OngoingList"
import TodosList from "@/components/TodosList"
import { loading, setTodos } from "@/features/todo/todoSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Todos = () => {
    const dispatch = useDispatch();
    const getAllTodos = async () => {
        dispatch(loading(true));
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`
            );
            dispatch(setTodos(data.data));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllTodos();
        dispatch(loading(false));
        // setTimeout(() => {
        // }, 1500);
    }, [])

    return (
        <div className="flex max-w-xs md:flex-row flex-col  md:max-w-screen-xl  mx-auto h-auto text-xl gap-8 justify-center">
            <Card heading={"To Do"}>
                <TodosList />
            </Card>
            <Card heading={"Doing"}>
                <OngoingList />
            </Card>
            <Card heading={"Done"}>
                <CompletedList />
            </Card>
        </div >
    )
}

export default Todos