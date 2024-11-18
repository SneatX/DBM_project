export default function DashboardItem({ data }) {

    const priorityText = {
        1: "Alta",
        2: "Media",
        3: "Baja"
    }

    const priorityColor = {
        1: "bg-green-400 hover:bg-green-200",
        2: "bg-yellow-400 hover:bg-yellow-200",
        3: "bg-red-400 hover:bg-red-200"
    }

    return (
        <div className={`flex flex-col gap-4 p-4 border-b ${priorityColor[data.priority]} bg-green rounded-lg shadow-md transition`}>
            <div className="flex items-center gap-2">
                <p className="font-medium">{data.name}</p>
                <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
                <p>Fecha creación: {data.createdAt.toLocaleDateString()}</p>
                <p>Prioridad: {priorityText[data.priority]}</p>
            </div>
        </div>
    );
};