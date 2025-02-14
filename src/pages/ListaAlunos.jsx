/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { HomeIcon } from "lucide-react";

function withNavigation(Component){
    return function NavigationComponent(props){
        const navigate = useNavigate();
        return <Component {...props} navigate = {navigate}/>
    }
}

function ListaAlunos({navigate,listStudents}){
const [loading, setLoading] = useState(true);
const [studentResponse, setStudentResponse] = useState([]);   
    useEffect(()=>{
        setLoading(true)
        listStudents(setStudentResponse).
        then(()=>setLoading(false)).
        catch(()=> setLoading(false));
    },[listStudents]);
    const onHomeClick = ()=>{
        navigate(-1);
    }
    
    
        return (
            <div className="bg-slate-300 h-screen flex justify-center text-center">
                <div className="bg-slate-300 grid space-y-3 pt-4 p-2 justify-center items-center h-fit rounded-md shadow-lg w-fit mt-10">
                    {loading ? (
                        <div className="flex justify-center items-center w-full h-[300px]">
                            <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div>
                            {studentResponse.map((student, index) => (
                                <div key={index}>
                                    <ul className="" key={index}>
                                        <li>{student.id}.
                                            {student.name}
                                            <br></br>
                                            {student.enrollmentDate}
                                        </li>
                                    </ul>
                                </div>
                                
                            ))}
                            <button className=" flex items-center justify-center text-sm font-serif mt-3  w-fit h-fit rounded-lg text-slate-200 mx-auto " onClick={onHomeClick}><HomeIcon className="w-[25px] h-[20px] stroke-slate-950"/></button>
                        </div>
                    )}
                </div>
            </div>
        );

}
export default withNavigation((props) => <ListaAlunos {...props} />);
