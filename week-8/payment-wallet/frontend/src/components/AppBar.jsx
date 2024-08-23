export default function AppBar(){
    
    return <div className="flex justify-between shadow h-14">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-lg">
            PayX App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, User
            </div>
            <div className="flex justify-center rounded-full h-12 w-12 bg-slate-200 mt-1 mr-4">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}