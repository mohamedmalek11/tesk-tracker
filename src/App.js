import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "dummy1",
        day: "feb 3 at 5:30pm",
        reminder: false,
      },
      {
        id: 2,
        text: "dummy2",
        day: "feb 4 at 2:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "dummy3",
        day: "feb 6 at 1:30pm",
        reminder: false,
      }
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>  task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks For Today"}
    </div>
  );
}

export default App;
