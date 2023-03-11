import { React, useEffect } from "react";
import Quill from "quill";
import BasicStudentSidebar from "../../BasicStudentSidebar";
// import TakeNotesImg from "../../../../../../../img/TakeNotes.svg";
import "quill/dist/quill.snow.css";

// Load All Formats
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const TakeNotes = () => {
  useEffect(() => {
    const quillServer = new Quill("#editor", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
  }, []);
  return (
    <>
      <section id="basicstudenttodo">
        <BasicStudentSidebar />
        <center>
          <h1>
            <span id="liveclassheading">Take Notes</span>
          </h1>
          <br />
          <div id="customboxcss">
          <div id="editor"></div>
          </div>
        </center>
      </section>
    </>
  );
};

export default TakeNotes;
