import { useReducer, useState } from 'react'
/* 1-useReducer */
const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.floor(Math.random(state) * 100)
  })

  /* 2-useReducer e actions*/
  const initialTasks = [
    { id: 0, text: 'Fazer Cafe' },
    { id: 1, text: 'Fazer Xixi' },
  ]

  const listTask = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
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
  const [tasks, dispatchTasks] = useReducer(listTask, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({ type: 'ADD' })
  }

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id })
  }

  return (
    <>
      {/*1- UseReducer */}
      <h1>useReducer</h1>
      <button onClick={dispatch}>Sorteie</button>
      <p>O numero sorteado é: {number}</p>

      {/* 2-useReducer e actions */}

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Criar Task" />
      </form>

      <h3>Tarefas</h3>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}

      <p></p>
      <hr />
    </>
  )
}

export default HookUseReducer
