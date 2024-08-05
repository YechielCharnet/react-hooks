import { useState } from "react";
import './styles.css'; // נייבא את קובץ ה-CSS

function Counter(props) {
  const [value, setValue] = useState(0); // שימוש במצב אחד לכל הפעולות

  const INC = () => {
    setValue(value + props.id); // הוספת props.id לערך הנוכחי
  };

  const DEC = () => {
    if (value > 0) {
      setValue(value - props.id); // הורדת props.id מהערך הנוכחי אם הערך גדול מ-0
    }
  };

  const RST = () => {
    setValue(0); // איפוס הערך ל-0
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">
        The value of the {props.id} counter is "{value}"
      </h1>
      <button className="counter-button" onClick={DEC}>-</button>
       <button className="counter-button" onClick={RST}>RST</button>
      <button className="counter-button" onClick={INC}>+</button>
    </div>
  );
}

export default Counter;
