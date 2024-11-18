import { useEffect, useState } from "react"
import DashboardItem from "./DashboardItem"

export default function Dashboard() {
    const [boards, setBoards] = useState([])

    async function fetchData() {
        const response = await fetch("http://localhost:3000/dashboard/boards", {
            method: "GET",
            credentials: "include"
        })
        const data = await response.json()
        setBoards(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="p-4">
            {boards.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {boards.map((item) => (
                        <DashboardItem
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No hay tableros disponibles</p>
            )}
        </main>
    )
}