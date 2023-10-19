import { BrowserRouter } from "react-router-dom";
import MainRouter from "./app/routing/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
