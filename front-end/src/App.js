import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");
  const [err, setErr] = useState();

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const response = await axios.get("http://localhost:5000");
      setData(response.data);
    } catch (error) {
      setErr(error.response.data.error_message);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post("http://localhost:5000/todo", { text });
      setText("");
      getTodo();
    } catch (error) {
      setErr(error.response.data.error_message);
    }
  };

  const updateTodo = async (id) => {
    try {
      await axios.put(`http://localhost:5000/todo/${id}`, { text });
      setText("");
      setIsUpdating(false);
      getTodo();
    } catch (error) {
      setErr(error.response.data.error_message);
    }
  };

  const updateMode = (id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(id);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/${id}`);
      getTodo();
    } catch (error) {
      setErr(error.response.data.error_message);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo APP From Hafid</h1>
        {err && <div>{err}</div>}
        <div className="top">
          <input
            type="text"
            placeholder="Add task toDo's ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={isUpdating ? () => updateTodo(todoId) : addTodo}
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {data.map((item) => (
            <ToDoList
              key={item._id}
              text={item.text}
              update={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
