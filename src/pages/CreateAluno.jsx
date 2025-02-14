/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import { HomeIcon } from "lucide-react";


function withNavigation(Component){
    return function NavigationComponent(props){
        const navigate = useNavigate();
        return <Component {...props} navigate = {navigate}/>
    }
}
function CreateAluno({ navigate,createStudent}) {
  const [Student, setStudent] = useState({
    name: '',
    enrollmentDate:new Date().toISOString(),
  });
  
  return(
    <div className="bg-slate-300 h-screen flex justify-center text-center">
      <div className="bg-slate-300 grid space-y-3 pt-4 p-2 justify-center items-center  h-fit rounded-md shadow-lg w-fit mt-10 ">
       <h1>Insira os dados do aluno</h1> 
        
        <input
          type="text"
          placeholder="Nome"
          value={Student.name.split(' ')[0]}
          onChange={(e) =>{
                    const nome = e.target.value;
                    const nameValidate = nome.charAt(0).toUpperCase()+ nome.slice(1).toLowerCase()
                    setStudent({ ...Student, name: nameValidate + " " + (Student.name.split(' ')[1] || '') });
          }}
          className="border p-1 rounded"
        ></input>
        <input
          type="text"
          placeholder="Sobrenome"
          value={Student.name.split(' ')[1] || ''}
          onChange={(e) =>{
                    const sobrenome1 = e.target.value;
                    const sobrenomeValidate = sobrenome1.charAt(0).toUpperCase()+ sobrenome1.slice(1).toLowerCase()
                    setStudent({ ...Student, name: Student.name.split(' ')[0] + " " + sobrenomeValidate });
          }}
          className="border p-1 rounded"
        ></input>
        <button className=" text-sm font-serif mt-3  w-[50px] h-[20px] rounded-lg bg-slate-500 text-slate-200 mx-auto "
        onClick={()=>{console.log(JSON.stringify(Student))
                    createStudent(Student) 
                    setStudent({
                      name: "",
                      enrollmentDate: new Date().toISOString(),
                    })
                         
        }}
        >Enviar</button>
        <button className=" flex items-center justify-center text-sm font-serif mt-3  w-fit h-fit rounded-lg text-slate-200 mx-auto " onClick={()=>{navigate(-1)}}><HomeIcon className="w-[25px] h-[20px] stroke-slate-950"/></button>
      </div>
    </div>
  );
}
export default withNavigation((props) => <CreateAluno {...props} />);
