import { useState } from "react";

export default function Wall(){

const [message,setMessage] = useState("");
const [messages,setMessages] = useState([]);

const addMessage = ()=>{
if(message.trim()==="") return;

setMessages([...messages,message]);
setMessage("");
};

return(

<div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-10">
<h2 className="text-4xl font-bold mb-6">
Appreciation Wall
</h2>

<div className="flex justify-center gap-3 mb-8">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Write your message..."
className="border p-3 rounded w-64"
/>

<button
onClick={addMessage}
className="bg-pink-500 text-white px-6 py-3 rounded hover:scale-105 transition duration-200"
>
Post
</button>

</div>

<div className="space-y-3">

{messages.map((msg,index)=>(
<div
key={index}
className="bg-gray-100 p-3 rounded w-72 mx-auto"
>
{msg}
</div>
))}

</div>

</div>

);

}