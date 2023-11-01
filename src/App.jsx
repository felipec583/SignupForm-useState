import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registro from "./components/Registro";

function App() {
  const [error, setError] = useState("");
  return (
    <>
      <Registro setError={setError} error={error} />
    </>
  );
}

export default App;

