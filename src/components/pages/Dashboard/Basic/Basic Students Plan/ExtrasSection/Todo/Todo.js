import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../../../firebase";
import {
  query,
  collection,
  getDocs,
  where,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import BasicStudentSidebar from "../../BasicStudentSidebar";
import swal from "sweetalert";

const Todo = () => {
  useEffect(() => {
    document.title = "Your Todos | EduSys";
  }, []);
  // Security
  const [student, loading, err] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      // const doc = await getDocs(q);
      // const data = doc.docs[0].data();
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data.Please Login Again!",
        "error"
      );
      return navigate("/StudentLogin");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");
    fetchUserName();
  }, [student, loading]);

  // Todo App
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please Enter A Valid Todo");
      return;
    }
    await addDoc(collection(db, "Student"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "Student"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "Student", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "Student", id));
  };

  return (
    <section id="TodoApp">
      <BasicStudentSidebar />
      <h1>
        Your <span>Todos</span>
      </h1>
      <form onSubmit={createTodo} className="todo-list">
        <input type="text" placeholder="Add Todo" className="todo-input" />
        <button id="extras-btn">
          <i className="fa-regular fa-square-plus"></i>Add
        </button>
      </form>
      <ul>
        {todos.map((todos, index) => (
          <li
            className="li"
            key={index}
            todo={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          >
            <input
              type="checkbox"
              className="checkbox-design"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            &nbsp;
            <span className="">{todos}</span>
            <button id="extras-btn">
              <i className="fa-regular fa-trash-can"></i>
              &nbsp;Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length < 1 ? null : (
        <p className="text-center">
          You Have <span>{`${todos.length}`}</span> Todos Now.
        </p>
      )}
    </section>
  );
};

export default Todo;
