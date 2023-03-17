import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/Contexts";
import { Cadastro } from "./pages/Cadastro";
import { Mostrar } from "./pages/Mostrar";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>titulo da pagina</h1>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/exibir" element={<Mostrar />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
