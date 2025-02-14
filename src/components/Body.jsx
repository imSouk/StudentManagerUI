/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Button from "./tags/Button";
import { useNavigate } from "react-router";
import { useState } from "react";

function withNavigation(Component) {
  return function NavigationComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

function Body({ navigate,fetchStudent}) {
  const [Student, setStudent] = useState({});
  const onCreateClick = () => {
    navigate(`/Create`);
  };

  const onDeleteClick = () => {
    navigate(`/Delete`);
  };
  const onBuscaClick = () => {
    setShowInput(true);
  };
  const onVoltarClick = () => {
    setShowInput(false);
    setStudent({});
    setStudentId("");
  };
  const onListaClick = () => {
    navigate(`/ListaAlunos`);
  };
  const [showInput, setShowInput] = useState(false);
  const [studentId, setStudentId] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center text-center">
      <div className="bg-slate-300   pt-4 p-2   h-fit rounded-md shadow-lg w-fit mt-10    ">
        {showInput ? (
          <div>
            <Button onClick={onVoltarClick}>voltar</Button>
            <input
              type="text"
              placeholder="Digite o ID do aluno"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="border p-1 rounded ml-2 "
            />
            <Button
              onClick={() => {
                fetchStudent(setStudent, studentId);
              }}
            >
              Buscar
            </Button>
            {Student?(<div className="mt-4 p-2 border rounded bg-white shadow">
                <p><strong>ID:</strong> {Student.id}</p>
                <p><strong>Nome:</strong> {Student.name}</p>
                <p><strong>Data de Matrícula:</strong> {Student.enrollmentDate}</p>
              </div>):
              (<>
              <p className="mt-4 text-red-500">Nenhum aluno encontrado.</p>
              </>)}
          </div>
            ) : (
          <>
            <div>
              {" "}
              Bem vindo ao gerenciados de Student! <br></br>Escolha dentre uma
              das funcoes disponiveis!
            </div>
            <ul>
              <li>
                <Button onClick={onCreateClick}>Create</Button>
              </li>
              <li>
                <Button onClick={onDeleteClick}>Delete</Button>
              </li>
              <li>
                <Button onClick={onBuscaClick}>Buscar</Button>
              </li>
              <li>
                <Button onClick={onListaClick}>ListarAlunos</Button>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
export default withNavigation((props) => <Body {...props} />);
