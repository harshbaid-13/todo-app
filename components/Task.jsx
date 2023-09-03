"use client"
import { deleteTodo, editTodo } from "@/features/todo/todoSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoModal from "./TodoModal";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, title, index, description, heading, startBtn, checkBtn }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ title: title, description: description })
    const [showModal, setShowModal] = useState(false);
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`
            );
            if (data.success) {
                dispatch(deleteTodo(id));
            } else {
                alert(data?.message);
            }
        } catch (err) { console.error(err) }
    }
    const handleEdit = async (e, id) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
                ...formData, status: heading.toUpperCase()
            })
            if (data.success) {
                dispatch(editTodo(data.data));
                setFormData({ title: formData.title, description: formData.description });
            }
            else {
                alert(data?.message);
            }
        } catch (err) { console.error(err) }
        setShowModal(false);
    }
    const handleCheck = async () => {
        try {
            const { data } = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
                ...formData, status: "DONE"
            })
            if (data.success) {
                dispatch(editTodo(data.data));
            }
            else {
                alert(data?.message);
            }
        } catch (err) { console.error(err) }
    }
    const handleStart = async () => {
        try {
            const { data } = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
                ...formData, status: "DOING"
            })
            if (data.success) {
                dispatch(editTodo(data.data));
            }
            else {
                alert(data?.message);
            }
        } catch (err) { console.error(err) }
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Draggable draggableId={id.toString()} index={index}>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className={`${snapshot.isDragging ? "border-black" : ""} transition ease-in-out delay-100 border hover:-translate-y-1 hover:scale-105 duration-100 hover:border-black text-lg rounded-md p-2 bg-white`}>
                            <div className="flex justify-between align-middle">
                                <div className="flex align-middle gap-x-2">
                                    {checkBtn && <div>
                                        <button type="button" className="p-0.5 text-xs font-medium text-center border border-black inline-flex items-center text-black bg-white-700 rounded-md hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 " onClick={handleCheck}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </button>

                                    </div>}
                                    <div>{title}</div>
                                </div>
                                <div className="flex gap-1">
                                    <div>
                                        <button type="button" className="px-1.5 py-1.5 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none" onClick={handleDelete}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" className="px-1.5 py-1.5 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => { setShowModal(true) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                        </button>
                                    </div>
                                    {startBtn && <div>
                                        <button type="button" className="px-1.5 py-1.5 text-xs font-medium text-center inline-flex items-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " onClick={handleStart}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            </svg>
                                        </button>
                                    </div>}
                                </div>
                            </div>
                            <div className="text-slate-500 mt-1 ">{description}</div>

                        </div>
                    )
                }

            </Draggable>
            {showModal && <TodoModal closeModal={closeModal} action={handleEdit} heading={heading} handleChange={handleChange} formData={formData} id={id} />}
        </>
    )
}

export default Task