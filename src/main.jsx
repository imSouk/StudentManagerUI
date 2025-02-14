import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import './index.css'
import Edit from './pages/Edit.jsx'
import CreateAluno from './pages/CreateAluno.jsx'
import { createStudent } from './functions/StudentFunctions.js'
import ListaAlunos from './pages/ListaAlunos.jsx'
import { listStudents } from './functions/StudentFunctions.js'
import DeleteStudent from './pages/DeleteStudent.jsx'
import { delStudent } from './functions/StudentFunctions.js'

const router = createBrowserRouter ([
{
  path: "/",
  element: <App/>,
},
{
  path:"/Create",
  element:<CreateAluno createStudent={createStudent} />,
},
{
  path:"/Delete",
  element:<DeleteStudent delStudent={delStudent}/>,
},
{
  path:"/ListaAlunos",
  element:<ListaAlunos listStudents= {listStudents}/>,
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
