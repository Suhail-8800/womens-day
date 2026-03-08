import { useState } from "react";

export default function Inspiration() {

const quotes = [
"There is no limit to what we, as women, can accomplish. – Michelle Obama",
"I raise up my voice—not so that I can shout, but so that those without a voice can be heard. – Malala Yousafzai",
"The most courageous act is still to think for yourself. – Coco Chanel",
"You must never be fearful about what you are doing when it is right. – Rosa Parks",
"Well-behaved women seldom make history. – Laurel Thatcher Ulrich",
"A girl should be two things: who and what she wants. – Coco Chanel"
];

const [quote, setQuote] = useState("");
const [count, setCount] = useState(0);

const generateQuote = () => {
const random = Math.floor(Math.random() * quotes.length);
setQuote(quotes[random]);
setCount(count + 1);
};

const share = (platform) => {

const text = encodeURIComponent(quote);
const url = encodeURIComponent(window.location.href);

let shareURL = "";

if(platform === "whatsapp"){
shareURL = `https://api.whatsapp.com/send?text=${text}`;
}

if(platform === "twitter"){
shareURL = `https://twitter.com/intent/tweet?text=${text}`;
}

if(platform === "facebook"){
shareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
}

if(platform === "linkedin"){
shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

if(platform === "email"){
shareURL = `mailto:?subject=Inspirational Quote&body=${text}`;
}

window.open(shareURL,"_blank");

};

return (

<div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6">

<h2 className="text-4xl font-bold mb-6">
Need Inspiration? ✨
</h2>

<p className="mb-6 text-lg opacity-90">
Click the button to discover powerful words from inspiring women.
</p>

<button
onClick={generateQuote}
className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
>
Inspire Me
</button>

{quote && (

<div className="mt-10 max-w-xl">

<p className="italic text-lg mb-8">
"{quote}"
</p>

<h3 className="mb-4 font-semibold">
Share this inspiration
</h3>

<div className="flex flex-wrap justify-center gap-3">

<button
onClick={() => share("whatsapp")}
className="bg-green-500 px-4 py-2 rounded hover:scale-105 transition"
>
WhatsApp
</button>

<button
onClick={() => share("twitter")}
className="bg-blue-400 px-4 py-2 rounded hover:scale-105 transition"
>
Twitter
</button>

<button
onClick={() => share("facebook")}
className="bg-blue-700 px-4 py-2 rounded hover:scale-105 transition"
>
Facebook
</button>

<button
onClick={() => share("linkedin")}
className="bg-blue-600 px-4 py-2 rounded hover:scale-105 transition"
>
LinkedIn
</button>

<button
onClick={() => share("email")}
className="bg-gray-700 px-4 py-2 rounded hover:scale-105 transition"
>
Email
</button>

</div>

</div>

)}

<p className="mt-10 text-sm opacity-80">
Quotes generated: {count}
</p>

</div>

);

}