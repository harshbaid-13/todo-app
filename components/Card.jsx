
const Card = ({ heading, children }) => {
    return (
        <div className="w-full md:w-1/3 flex p-4 gap-y-4 h-max rounded-md flex-col items-start bg-[#ebecf0] ">
            <div className="ml-1 font-bold text-[#301e5a]">{heading}</div>
            <div className="w-full flex flex-col gap-y-2">{children}</div>
            <div className="ml-1 font-bold text-[#301e5a] rounded-md bg-slate-300 p-2">
                <button>+ Add a card</button></div>
        </div>
    )
}

export default Card