"use client"
import { useState } from "react";
import TodoModal from "./TodoModal"
import { addTodo } from "@/features/todo/todoSlice";
import axios from "axios";
import { useDispatch } from "react-redux";


const Card = ({ heading, children }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    }
    const [formData, setFormData] = useState({ title: "", description: "" })
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
                ...formData, status: heading.toUpperCase()
            })
            if (data.success) {
                dispatch(addTodo(data.data));
                setFormData({ title: "", description: "" });
            }
            else {
                alert(data?.message);
            }
        } catch (err) { console.error(err) }
        setShowModal(false);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="w-full md:w-1/3 flex p-4 gap-y-4 h-max rounded-md flex-col items-start bg-[#ebecf0] ">
                <div className="ml-1 font-bold text-[#301e5a]">{heading}</div>
                <div className="w-full flex flex-col gap-y-2">{children}</div>
                <div className="ml-1 font-bold text-[#301e5a] rounded-md bg-slate-300 p-2">
                    <button onClick={() => { setShowModal(true) }}>+ Add a card</button></div>
            </div>
            {showModal && <TodoModal closeModal={closeModal} action={submitHandler} heading={heading} handleChange={handleChange} formData={formData} id={"null"} />}
        </>
    )
}

export default Card