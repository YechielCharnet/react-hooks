
import React, { useState } from "react";

const Book = (props) => {
  const [likeCount, setLikeCount] = useState(props.book.likes);
  const [shelfStatus, setShelfStatus] = useState(props.book.onShelf); // מצב ברירת מחדל למדף
  const [text, setText] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1); // עדכון ישיר של המצב
  };

  const handleTake = () => {
    setShelfStatus(false); // עדכון מצב המדף
  };

  const handleChange = (event) => {
    setText(event.target.value); // עדכון מצב הטקסט
  };

  const handleRead = () => {
    alert(props.sample); // מניח ש-props.sample הוא מחרוזת
  };

  return (
    <div className={likeCount >= 500 ? "bookB" : "book"}>
      <h3>מספר סידורי: {props.indx + 1}</h3>
      <h2>שם הספר הוא: {props.book.title}</h2>
      <p>מאת המחבר: {props.book.author}</p>
      <button onClick={handleLike}>👍 </button> {/* הצגת לייקים בכפתור */}
      <p>לייקים: {likeCount} </p>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>{text}</p>

      <p>{shelfStatus ? "על המדף" : "לא על המדף"}</p>

      <button onClick={handleRead}>Read</button>

      {/* הצגת כפתור "Take" באופן תנאי */}
      {shelfStatus && <button onClick={handleTake}>Take</button>}
    </div>
  );
};

export default Book;



// const books = [
//   { title: "הארי פוטר ואבן החכמים", author: "ג'יי קיי רולינג", likes: 1000, onShelf: true },
//   { title: "התפסן בשדה השיפון", author: "ג'רוד סאלינג'ר", likes: 498, onShelf: false },
//   { title: "1984", author: "ג'ורג' אורוול", likes: 499, onShelf: true },
//   { title: "הזקן והים", author: "ארנסט המינגווי", likes: 700, onShelf: true },
//   { title: "גאווה ודעה קדומה", author: "ג'יין אוסטן", likes: 500, onShelf: true },
//   { title: "מטמורפוזה", author: "פרנץ קפקא", likes: 499, onShelf: true }
// ];
// <h1>רשימת ספרים</h1>
// <ul>
//   {books.map((item,indx)=>

//   <li key={indx}><Book sample ={" קטע מתוך הספר"}title={item.title} author={item.author}  onShelf={item.onShelf} indx={indx} book={item}/></li>
// )}
// </ul>