import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../../../../../firebase";
import BasicStudentSidebar from "../../BasicStudentSidebar";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import swal from "sweetalert";
import ExtrasItemsNav from "../ExtrasItemsNav";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block", "link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

const Notes = () => {
  useEffect(() => {
    document.title = "Your Notes | EduSys";
  }, []);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [quill, setQuill] = useState(null);
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

  useEffect(() => {
    const q = new Quill("#container", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuill(q);

    return () => {
      setQuill(null);
    };
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = collection(db, "Students", "Notes", student.email);
      const notesSnapshot = await getDocs(notesCollection);
      const notesData = notesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    };

    fetchNotes();

    return () => {
      setNotes([]);
    };
  }, []);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta) => {
        if (currentNote) {
          const noteRef = doc(db, "notes", currentNote.id);
          updateDoc(noteRef, { content: quill.root.innerHTML });
        }
      });
    }

    return () => {
      if (quill) {
        quill.off("text-change");
      }
    };
  }, [quill, currentNote]);

  const handleNoteClick = (note) => {
    setCurrentNote(note);
    if (quill) {
      quill.root.innerHTML = note.content;
    }
  };

  const handleNewNoteClick = () => {
    setCurrentNote(null);
    if (quill) {
      quill.root.innerHTML = "";
    }
  };

  const handleSaveClick = async () => {
    const content = quill.root.innerHTML;
    const size = new Blob([content]).size;

    if (size > 400000) {
      swal(
        "Error!",
        "The total file size exceeds 400kb. Please reduce the size of the note and try again!",
        "error"
      );
      return;
    }

    const imageRegex = /<img.*?src="(.*?)"/g;
    const images = content.match(imageRegex) || [];
    const imgSizeExceeds = images.some((img) => new Blob([img]).size > 100000);

    if (imgSizeExceeds) {
      swal(
        "Error!",
        "One or more images in the note are larger than 100kb. Please reduce the size of the images and try again!",
        "error"
      );
      return;
    }

    if (currentNote) {
      const noteRef = doc(db, "Students", "Notes", student.email, currentNote.id);
      await updateDoc(noteRef, { content });
      const updatedNotes = notes.map((note) =>
        note.id === currentNote.id ? { ...note, content } : note
      );
      setNotes(updatedNotes);
      swal("Updated!", "Your Note Has Been Updated Successfully!", "success");
    } else {
      const noteRef = await addDoc(collection(db, "Students", "Notes", student.email), { content });
      const newNote = { id: noteRef.id, content };
      setNotes([...notes, newNote]);
      setCurrentNote(newNote);
      swal("Saved!", "Your Note Has Been Saved Successfully!", "success");
    }
  };

  function handleResetClick() {
    window.location.reload();
  }

  const handleDeleteClick = async () => {
    if (currentNote) {
      const noteRef = doc(db, "Students", "Notes", student.email, currentNote.id);
      await deleteDoc(noteRef);
      const updatedNotes = notes.filter((note) => note.id !== currentNote.id);
      setNotes(updatedNotes);
      setCurrentNote(null);
      if (quill) {
        quill.root.innerHTML = "";
      }
      swal("Deleted!", "Your Note Has Been Deleted Successfully!", "success");
    }
  };
  return (
    <>
      <BasicStudentSidebar />
      <ExtrasItemsNav />
      <div className="notes-container">
        <h1 className="text-center">
          <span>Take Your Notes Here</span>
        </h1>
        <div className="notes-list">
          <button className="btngreen" onClick={handleNewNoteClick}>
            <i className="fa-solid fa-square-plus"></i>&nbsp;&nbsp;New Note
          </button>
          <h3 className="text-center">
            <span>Your Notes:</span>
          </h3>
          <p className="text-center">
            <span>
              <p>(Select Any Notes To Edit It!)</p>
            </span>
          </p>
          <p>
            <span style={{ color: "red" }}>
              <b>Note:</b>
            </span>
            <br />
            *Please Do Not Upload Images Of Above 100kb In Size.
            <br />
            *Maximum Size Of Notes That Can Be Uploaded Is 400kb.
          </p>
          {notes.map((note, index) => (
            <div
              key={note.id}
              className={`note ${
                note.id === currentNote?.id ? "activenote" : "inactivenote"
              }`}
              onClick={() => handleNoteClick(note)}
              id="addcursor"
            >
              <h4>
                <span>{index + 1}:</span>
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: note.content }}
                className=""
              ></div>
            </div>
          ))}
        </div>
        <div className="editor-container">
          <div id="container"></div>
          <button className="btngreen" onClick={handleSaveClick}>
            <i className="fa-solid fa-floppy-disk"></i>&nbsp;&nbsp;Save
          </button>
          <button className="btnred" onClick={handleDeleteClick}>
            <i className="fa-solid fa-trash"></i>&nbsp;&nbsp;Delete
          </button>
          <button className="btnyellow" onClick={handleResetClick}>
            <i className="fa-solid fa-rotate-right"></i>&nbsp;&nbsp;Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Notes;
