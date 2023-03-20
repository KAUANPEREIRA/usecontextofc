import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./contexts/Contexts";
import { Cadastro } from "./pages/Cadastro";
import { Mostrar } from "./pages/Mostrar";

const App = () => {
  const { state, dispatch } = useContext(Context);
  const handleClickTheme = () => {
    if (state.theme.status === "light") {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    }
  };
  return (
    <BrowserRouter>
      <div
      // style={{
      //   backgroudColor: state?.theme?.status === "light" ? "#fff" : "#000",
      // }}
      >
        <h1>titulo da pagina</h1>
        <p>
          Thema : {state?.theme?.status}
          <br></br>
          <button onClick={handleClickTheme}>Trocar theme</button>
        </p>
        <hr></hr>

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/exibir" element={<Mostrar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
