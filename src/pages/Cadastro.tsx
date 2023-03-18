import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Contexts";

export const Cadastro = () => {
  const { state, dispatch } = useContext(Context);

  const handleSave = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: nameInput,
      },
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        age: ageInput,
      },
    });
  };

  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: nameInput,
      },
    });
  };

  const handleChangeAge = () => {
    dispatch({
      type: "CHANGE_AGR",
      payload: {
        age: Number(ageInput),
      },
    });
  };

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  return (
    <div>
      {/* Seja bem vindo senhor {state.user.name}
      <br></br>
      <text>Digite o o nome que deseja alterar</text>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChangeName}>Mudar name para o do input</button>
      <h1>Fogute nao tem ré Cadastro</h1> */}
      <h3>Tela de cadastro</h3>

      <form>
        <label>Digite seu nome</label>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </form>
      <br></br>
      <form>
        <label>Digite sua idade</label>
        <input
          type="text"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
        />
      </form>
      <button onClick={handleSave}>Cadastrar</button>
      <Link to="/exibir">Pagina de exibir</Link>
    </div>
  );
};
