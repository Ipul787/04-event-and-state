This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Practicum Report

|  | Framework Based Programming 2024 |
|--|--|
| NIM |  2141720067|
| Nama |  Saefulloh Fatah Putra Kyranna |
| Kelas | TI - 3I |

## Practicum 1

In this practicum, we have learnt about how to make event handler from components. This is done to respond to whatever input the user made on the website. To do this, we will make a component first before adding an event to the component. 

``````
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
``````

After creating the component, we will import and call it from the ``page.tsx`` file. 

Output: 

![Screenshot](assets/01.png)

As we can see with the output, there is a button which will return an alert if clicked. 

![Screenshot](assets/02.png)

![Screenshot](assets/03.png)

## Practicum 2

In this practicum, we have learnt about how to make a dynamic event handler. This is done to make the website more adaptable to various requirement. However, during the course of this practicum, we encountered some errors in the code. 

![Screenshot](assets/04.png)

This error happens because we have not defined the message and button name yet, therefore the ``button.tsx`` file returns an error. However, after we define the name of the button and the message, the website works as intended. 

Output: 

![Screenshot](assets/06.png)

![Screenshot](assets/05.png)

## Practicum 3

In this practicum, we have learnt about event propagation. This event happens because event handler will catch any event from any child that are owned by parent component. The demonstration of this event propagation is displayed on the output. 

Output: 

![Screenshot](assets/07.png)

![Screenshot](assets/08.png)

![Screenshot](assets/09.png)

As we can see, the button returns the alert of parent element when pressed. This is because event handler also catches the parent component and display it along with the child component. To stop this, we can stop event propagation by inserting the code into the component. 

``````
 onClick={(e) => {
                e.stopPropagation();
                alert(message)
                }
            }>
``````

By entering this code, the event handler will not call the parent component once the event was executed. 