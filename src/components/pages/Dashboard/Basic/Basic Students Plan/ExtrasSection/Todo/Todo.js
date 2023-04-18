import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../../../firebase";
import Todo from "./TodosData";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import BasicStudentSidebar from "../../BasicStudentSidebar";
import swal from "sweetalert";
import ExtrasItemsNav from "../ExtrasItemsNav";

const Todos = () => {
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
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
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
      swal("Error", "Please Enter A Valid Todo!", "error");
      return;
    }
    await addDoc(collection(db, "Students", "Todos", student.email), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    if (!student?.email) {
      swal(
        "Fetching Your Todos...",
        "Please Wait While We Fetch Your Todos!",
        "warning"
      );
      return;
    }

    const q = query(collection(db, "Students", "Todos", student.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });

    return () => unsubscribe();
  }, [student?.email]);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "Students", "Todos", student.email, todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "Students", "Todos", student.email, id));
  };

  return (
    <section id="TodoApp">
      <BasicStudentSidebar />
      <ExtrasItemsNav/>
      <h1>
        Your <span>Todos</span>
      </h1>
      <form onSubmit={createTodo} className="todo-list">
        <input
          type="text"
          placeholder="Add Todo"
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button id="extras-btn">
          <i className="fa-regular fa-square-plus"></i>&nbsp;Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {todos.length < 1 ? null : (
        <p className="text-center">
          You Have <span>{`${todos.length}`}</span>&nbsp;Todos.
        </p>
      )}
    </section>
  );
};

export default Todos;
