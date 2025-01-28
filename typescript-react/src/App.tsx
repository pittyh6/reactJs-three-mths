import "./App.css";
import { Person } from "./Person";

let name: string = "Priscila";
let year: number = 2025;
let months: string[] = ["Jan", "Feb", "Mar", "Apr"];

function App() {
  return (
    <>
      <Person name={"Priscila"} age={36} isMarried={true} />
      <Person name={"Carlos"} age={38} isMarried={true} />
    </>
  );
}

export default App;
