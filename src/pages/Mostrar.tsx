import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Contexts";
export const Mostrar = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h1>MOstra cadastro</h1>
      Seja bem vindo {state.user.name} vc tem a idade de {state.user.age}
      <Link to="/">Voltar para cadastro</Link>
    </div>
  );
};
