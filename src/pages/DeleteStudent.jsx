/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { delStudent } from "../functions/StudentFunctions";
import { useState } from "react";

function withNavigation(Component) {
  return function NavigationComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

function DeleteStudent({ navigate }) {
  function confirmDelete(target) {
    var x = confirm("Deseja deletar o Student selecionado?");
    if (x) {
      delStudent(target);
    } else {
      console.log("usuario desistiu de deletar");
    }
  }
  const [target, setTarget] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center text-center">
      <div className="bg-slate-300 grid space-y-3 pt-4 p-2 justify-center items-center  h-fit rounded-md shadow-lg w-fit mt-10 ">
        <h1>Funcao delete</h1>
        <input
          type="text"
          placeholder="Insira o ID do Student"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button
          className=" text-sm font-serif mt-3  w-[50px] h-[20px] rounded-lg bg-slate-500 text-slate-200 mx-auto "
          onClick={() => {
            confirmDelete(target);
          }}
        >
          Enviar
        </button>

        <button
          className="m-auto"
          onClick={() => {
            navigate(-1);
          }}
        >
          <HomeIcon />
        </button>
      </div>
    </div>
  );
}
export default withNavigation((props) => <DeleteStudent {...props} />);
