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

In this practicum, we will learn about how to make event handler from components. This is done to respond to whatever input the user made on the website. To do this, we will make a component first before adding an event to the component. 

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

After creating the component, we will import and call it from the ``page.tsx`` file 

Output: 

![Screenshot](assets/01.png)