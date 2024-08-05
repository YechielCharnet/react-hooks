import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import NumKey from "./NumKey";
import Book from "./book";

export default App;
const books = [
  { title: "הארי פוטר ואבן החכמים", author: "ג'יי קיי רולינג", likes: 1000, onShelf: true },
  { title: "התפסן בשדה השיפון", author: "ג'רוד סאלינג'ר", likes: 498, onShelf: false },
  { title: "1984", author: "ג'ורג' אורוול", likes: 499, onShelf: true },
  { title: "הזקן והים", author: "ארנסט המינגווי", likes: 700, onShelf: true },
  { title: "גאווה ודעה קדומה", author: "ג'יין אוסטן", likes: 500, onShelf: true },
  { title: "מטמורפוזה", author: "פרנץ קפקא", likes: 499, onShelf: true }
];

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Counter id={1} />
        <Counter id={2} />
        <Counter id={3} />
        <Counter id={4} />
        <Counter id={5} />
        <h1>רשימת ספרים</h1>
      <ul>
        {books.map((item,indx)=>
  
        <li key={indx}><Book sample ={" קטע מתוך הספר"}title={item.title} author={item.author}  onShelf={item.onShelf} indx={indx} book={item}/></li>
)}
      </ul>
    
      </header>
    </div>
  );
}


