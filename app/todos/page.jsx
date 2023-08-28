import Card from "@/components/Card"
import CompletedList from "@/components/CompletedList"
import OngoingList from "@/components/OngoingList"
import TodosList from "@/components/TodosList"

const Todos = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto h-auto text-xl gap-8 justify-center">
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