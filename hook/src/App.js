import logo from "./logo.svg";
import "./App.css";
import NumKey from "./components/NumKey";

function App() {
  // const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <h1>יוסי</h1>
        {/* <יוסי /> */}
        <h1>יחיאל</h1>
        <NumKey />
        {/* {count}
        {Array.from({ length: 10 }).map((_, i) => (
          <NumKey key={i} num={i} count={count} setCount={setCount} />
        ))}
        <button onClick={() => setCount(0)}>reset</button> */}
        <h1>אליהו</h1>
        {/* <אליהו /> */}

      </header>
    </div>
  );
}


