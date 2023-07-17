import "./App.css";
import Dictation from "./components/Dictation";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-screen mt-20">
        <h1 className=" text-7xl">Speech to Text</h1>
        <Dictation />
      </div>
    </>
  );
}

export default App;
