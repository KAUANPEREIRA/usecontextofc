import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Contexts";

export const Cadastro = () => {
  const { state, dispatch } = useContext(Context);

  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "pedro",
      },
    });
  };
  return (
    <div>
      Seja bem vindo senhor {state.user.name}
      <button onClick={handleChangeName}>Mudar name para pedro</button>
      <h1>Fogute nao tem ré Cadastro</h1>
      <Link to="/exibir">Pagina de exibir</Link>
    </div>
  );
};
