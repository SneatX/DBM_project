import { useState } from "react"
import DashboardItem from "./DashboardItem"

export default function Dashboard() {
    const [data, setData] = useState([
        {id: 1, name: "Tablero 1", description: "Descripción actividad baja", createdAt: new Date(), priority: 1},
        {id: 2, name: "Tablero 2", description: "Descripción actividad media", createdAt: new Date(), priority: 2},
        {id: 3, name: "Tablero 3", description: "Descripción actividad alta", createdAt: new Date(), priority: 3},
        {id: 4, name: "Tablero 4", description: "Descripción actividad 4", createdAt: new Date(), priority: 1},
        {id: 5, name: "Tablero 5", description: "Descripción actividad 5", createdAt: new Date(), priority: 2}
    ])

    async function fetchData() {
        const response = await fetch("http://localhost:3000/dashboard/boards", {
            method: "GET",
            credentials: "include"
        })
        const data = await response.json()
        setData(data)
    }

    return (
        <main className="p-4">
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((item) => (
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