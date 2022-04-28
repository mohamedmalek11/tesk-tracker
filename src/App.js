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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
