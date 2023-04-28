const SidebarOption = ({icon, text}) => {
    return (
        <div className="flex flex-row rounded-full items-center w-64 h-[3.2rem] mx-3 hover:bg-slate-600" >
            <img src={ icon } alt="twitter logo" className="w-6 h-6 mx-3"/>
            <h1  className="text-xl font-light hover:font-medium">{ text }</h1>
        </div>
    )
}

export default SidebarOption