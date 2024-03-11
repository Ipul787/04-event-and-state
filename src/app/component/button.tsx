export function Button_02({message, buttonName}){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(message)}>
            {buttonName}
        </button>
    )
}

export function Button_03({message, buttonName}){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={(e) => {
                e.stopPropagation();
                alert(message)
                }
            }>
            {buttonName}
        </button>
    )
}

export default function Button_01(){
    //function for clicking the button
    function handleClick(){
        alert("The button is pressed!!");
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            // onMouseOver={handleMouseOver}
            onMouseLeave={() => {
                    alert("Leaving so soon?")
                }
            }
        >
            This is a button
        </button>
    );
}