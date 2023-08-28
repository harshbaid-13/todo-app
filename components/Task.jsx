
const Task = ({ title, description }) => {
    return (
        <div className='text-lg rounded-md p-2 bg-white'>
            <div>{title}</div>
            <div className="text-slate-500">{description}</div>
        </div>
    )
}

export default Task