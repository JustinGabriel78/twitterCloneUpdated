

const Feed = () => {
    return(
        <div className=" w-[594px] border border-r-2">
            <div className=" h-[105px] ">
                <h1 className="text-xl font-medium  p-4">Home</h1>
                <div className="flex row h-[53px] mt-[-8px] border-b-2 ">
                    <div className="w-1/2 flex justify-center items-center  hover:bg-slate-600 ">
                        <h1>For you</h1>
                    </div>
                    <div className="w-1/2 flex justify-center items-center hover:bg-slate-600 ">
                        <h1>Following</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed