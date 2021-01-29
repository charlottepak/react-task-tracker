import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Fec 5th at 2:30',
      reminder: true,
    }
  ])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
