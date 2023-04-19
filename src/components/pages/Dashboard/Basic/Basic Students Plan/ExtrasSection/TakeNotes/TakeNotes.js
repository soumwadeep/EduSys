import { React, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../../../firebase";
import BasicStudentSidebar from "../../BasicStudentSidebar";
import {
  query,
  collection,
  getDocs,
  where,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import swal from "sweetalert";
import TakeNotesBody from "./TakeNotesBody";
import ExtrasItemsNav from "../ExtrasItemsNav";
import Notes from "./Notes";

const TakeNotes = () => {
  useEffect(() => {
    document.title = "Your Notes | EduSys";
  }, []);

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
      // return window.location.href("/StudentLogin")
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");
    fetchUserName();
  }, [student, loading]);

  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    if (!student?.email) {
      swal(
        "Fetching Your Notes...",
        "Please Wait While We Fetch Your Notes!",
        "warning"
      );
      return;
    }

    const notesRef = collection(db, "Students", "Notes", student.email);
    const unsubscribe = onSnapshot(notesRef, (snapshot) => {
      const notes = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setNotes(notes);
    });

    return unsubscribe;
  }, [student?.email]);

  const handleAddNote = async () => {
    if (newTitle !== "" || newBody !== "") {
      const docRef = await addDoc(
        collection(db, "Students", "Notes", student?.email),
        {
          title: newTitle,
          body: newBody,
        }
      );
      setNotes([...notes, { id: docRef.id, title: newTitle, body: newBody }]);
      setNewTitle("");
      setNewBody("");
    }
  };

  const handleDeleteNote = async (id) => {
    await deleteDoc(doc(db, "Students", "Notes", student?.email, id));
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      const newNotes = [...notes];
      newNotes.splice(index, 1);
      setNotes(newNotes);
    }
  };

  const handleEditNote = async (updatedNote) => {
    await updateDoc(
      doc(db, "Students", "Notes", student?.email, updatedNote.id),
      {
        title: updatedNote.title,
        body: updatedNote.body,
      }
    );
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setNewBody(event.target.value);
  };

  return (
    <>
      <section id="basicstudenttodo">
        <BasicStudentSidebar />
        <ExtrasItemsNav />
        <Notes />
        <center>
          <h1>
            <span>Take Notes</span>
          </h1>
          <br />
          <div id="TakeNotesCss">
            <input value={newTitle} onChange={handleTitleChange} />
            <br />
            <textarea value={newBody} onChange={handleBodyChange} />
            <br />
            <button className="btn" onClick={handleAddNote}>
              Add Note
            </button>
          </div>
          <hr />
          {notes &&
            notes.map((note) => (
              <TakeNotesBody
                key={note.id}
                note={note}
                onDelete={(id) => handleDeleteNote(id)}
                onEdit={handleEditNote}
              />
            ))}
        </center>
      </section>
    </>
  );
};

export default TakeNotes;
