import "./App.css";
import { Box } from "@chakra-ui/react";
import Header from "./Components/Header";
import Results, { Result } from "./Components/Results";
import { useState } from "react";

function App() {
  const [results, setResults] = useState<Result[]>([]);
  return (
    <Box className="App">
      <Box position={"fixed"} w={"full"} bg={"#fff"} zIndex={99}>
        <Header setResults={setResults} />
      </Box>
      <Results results={results} />
    </Box>
  );
}

export default App;
