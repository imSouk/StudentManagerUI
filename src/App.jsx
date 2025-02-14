import './App.css'
import Body from './components/Body'
import { fetchStudent } from './functions/StudentFunctions'

function App() {
 

  return (
    <div>
        <Body fetchStudent={fetchStudent}></Body>
      
    </div>
  )
}

export default App
