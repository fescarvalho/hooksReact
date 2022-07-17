import { useReducer, useState } from 'react'

const HookUseReducerMeu = () => {
  const initialTasks = [
    { text: 'Fazer Cafe', id: 0 },
    { text: 'Fazer cha', id: 1 },
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          text: taskText,
          id: Math.random(),
        }
        setTaskText('')
        return [...state, newTask]

      case 'DELETE':
        return state.filter((task) => task.id !== action.id)

      default:
        return [...state]
    }
  }
  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({ type: 'ADD' })
  }
  const doubleDelete = (id) => {
    dispatchTasks({ type: 'DELETE', id })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Tarefas: </h3>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Adcionar Tarefa" />
        <br />
        <br />
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => doubleDelete(task.id)}>
            {task.text}
          </li>
        ))}
      </form>
    </div>
  )
}

export default HookUseReducerMeu
