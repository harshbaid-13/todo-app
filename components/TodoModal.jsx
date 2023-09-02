const TodoModal = ({ heading, closeModal, id, action, handleChange, formData }) => {
    return (
        <>

            <div id="modal" tabIndex="-1" aria-hidden="true"
                className={`backdrop-blur-md fixed  top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" onClick={closeModal}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-6 text-xl font-medium text-gray-900 ">{heading}</h3>
                            <form className="space-y-4" onSubmit={(e) => { if (id !== "null") action(e, id); else action(e); }}>
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                                    <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="New Todo" value={formData.title} required onChange={(e) => handleChange(e)} />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                    <textarea type="text" name="description" id="description" placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={formData.description} onChange={(e) => handleChange(e)} />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoModal