import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Contexts";

export const Cadastro = () => {
  const { age, name } = useContext(Context);
  return (
    <div>
      Seja bem vindo senhor {name}
      <h1>Fogute nao tem ré Cadastro</h1>
      <Link to="/exibir">Pagina de exibir</Link>
    </div>
  );
};
