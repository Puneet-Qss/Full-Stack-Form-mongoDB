import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState();
  const [users, setUsers] = useState([]);

  const handleForm = (event) => {
    console.log(event.target.name, event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("res", response);
    const data = await response.json();
    console.log("userDATA : ", data);
  };

  // Get user data from backend -db

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    console.log(users);
  };

  useEffect(() => {
    getUser();
  } , []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{JSON.stringify(form)}</p>
        <span>username</span>
        <input type="text" name="username" onChange={handleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username}, {user.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
