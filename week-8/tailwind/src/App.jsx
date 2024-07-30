export default function App(){

    return(
        <>
        {/* flex */}
        <div className ='flex justify-center'> 
            <div className="bg-black text-white">
                This is div 1
            </div>
            <div className="bg-blue-500 text-white">
                This is div 2
            </div>
            <div className="bg-yellow-300">
               This is div 3
            </div>
        </div>
        <br></br>


        {/* Grid */}
        <div className ='grid grid-cols-10'> 
            <div className="bg-black text-white">
                This is div 1
            </div>
            <div className="bg-blue-500 text-white col-span-4">
                This is div 2
            </div>
            <div className="bg-yellow-300">
               This is div 3
            </div>
            <div className="bg-pink-300">
               This is div 4
            </div>
        </div>

        </>
        
    )
}  