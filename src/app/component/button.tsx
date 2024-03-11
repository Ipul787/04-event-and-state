export default function Button_01(){
    //function for clicking the button
    function handleClick(){
        alert("The button is pressed!!");
    }

    function handleMouseOver(){
        alert("Please press the button");
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