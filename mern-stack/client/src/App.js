import "./App.css";
import { useEffectTest } from "./test-hooks/useEffectTest";
import { useMemoTest } from "./test-hooks/useMemoTest";
import { useRefTest } from "./test-hooks/useRefTest";

function App() {
  const { data, setData } = useEffectTest();
  const { inputElemRef } = useRefTest();
  const { num, setNum, setColor, color } = useMemoTest();

  return (
    <div className="App">
      <main className="intro">
        <button onClick={() => setData("render")}></button>
        
        <form name={"useRef-test"} onSubmit={(e) => e.preventDefault()}>
          <button
            onClick={() => {
              inputElemRef.current.focus();
            }}
            style={{ padding: 5 + "px" }}
          >
            Test useRef
          </button>
          <input ref={inputElemRef} placeholder="Ввод"></input>
        </form>

        <form name={"useMemo-test"} onSubmit={(e) => e.preventDefault()}>
          <span style={{ color: color }}>{num}</span>
          <button
            style={{ padding: 10 + "px" }}
            onClick={() =>
              setColor((prev) => (prev === "red" ? "black" : "red"))
            }
          ></button>
          <button
            style={{ padding: 10 + "px" }}
            onClick={() => setNum((prev) => prev + 1)}
          >
            {" "}
          </button>
        </form>

        
      </main>
    </div>
  );
}

export default App;
