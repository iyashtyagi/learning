export default function Button({label, onClick}){
    
    return <button onClick={onClick} className="w-full bg-gray-800 text-white hover:bg-gray-900 text-sm px-5 py-2.5 me-2 mb-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300">
        {label}
    </button>
}