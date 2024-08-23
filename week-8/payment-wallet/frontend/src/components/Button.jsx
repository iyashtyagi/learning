export default function Button({label, onClick, color}){
    color = color=="green"?"bg-green-500 hover:bg-green-900" : "bg-gray-800 hover:bg-gray-900"
    return <button onClick={onClick} className={`w-full ${color} text-white text-sm px-5 py-2.5 me-2 mb-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300`}>
        {label}
    </button>
}