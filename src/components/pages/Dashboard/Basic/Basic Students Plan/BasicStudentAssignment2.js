import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout, storage } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicAssignment from "../../../../../img/BasicAssignment.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const BasicStudentAssignment2 = () => {
  const [student, loading, error] = useAuthState(auth);
  const [sem, setSem] = useState("");
  const [dept, setDept] = useState("");
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setSem(data.sem);
      setDept(data.dept);
      // create a new folder for the student if it doesn't exist
      const folderRef = storage(`assignments/${student?.uid}`);
      const snapshot = await folderRef.listAll();
      if (!snapshot.items.length) {
        const newFolderRef = storage(`assignments/${student?.uid}/`);
        newFolderRef.child("placeholder.txt").putString("");
      }

      // Temporary Fix
      var z = document.getElementById("showassignmentdata");
      if (data.sem < 5 || data.sem > 6) {
        document.getElementById("showpresentheading").innerHTML =
          "No Assignments As Of Now!";
        z.style.display = "none";
      }
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

  const handleUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const folderRef = storage(`assignments/${student?.uid}`);
      await folderRef.child(file.name).put(file);
      swal(
        "Success!",
        "Your assignment has been uploaded successfully!",
        "success"
      );
    } catch (err) {
      swal(
        "Error!",
        "We Got An Error Uploading Your Assignment.Please Try Again!",
        "error"
      );
    }
  };

  const fetchAssignments = async () => {
    const folderRef = storage(`assignments/${student?.uid}`);
    const snapshot = await folderRef.listAll();
    const urls = await Promise.all(
      snapshot.items.map(async (item) => {
        const url = await item.getDownloadURL();
        return { name: item.name, url };
      })
    );
    setUrls(urls);
  };

  useEffect(() => {
    fetchUserName();
    fetchAssignments();
  }, []);

  return (
    <>
      <Helmet>
        <title>Basic | Assignments</title>
      </Helmet>
      <div className="flex flex-col md:flex-row min-h-screen">
        <BasicStudentSidebar />
        <div className="w-full flex flex-col p-5">
          <h1 className="text-3xl font-bold mb-5">
            {sem !== "" && dept !== ""
              ? `Assignments - ${dept} Sem ${sem}`
              : "Assignments"}
          </h1>
          <div className="w-full md:w-1/2">
            <div className="flex items -center bg-white shadow rounded-lg p-5">
              <img
                src={BasicAssignment}
                alt="assignment icon"
                className="w-12 h-12 mr-3"
              />
              <div className="flex flex-col justify-center">
                <label className="font-bold mb-1">
                  Upload your assignments here
                </label>
                <input
                  type="file"
                  onChange={handleUpload}
                  className="bg-gray-100 py-1 px-2 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Table to show the uploaded assignments */}
          <div className="my-5">
            <h2 id="showpresentheading" className="font-bold text-xl mb-3">
              Your uploaded assignments are listed below
            </h2>
            <table
              className="table-fixed border-collapse border border-gray-400"
              id="showassignmentdata"
            >
              <thead>
                <tr>
                  <th className="w-1/2 px-4 py-2 border border-gray-400">
                    Assignment name
                  </th>
                  <th className="w-1/2 px-4 py-2 border border-gray-400">
                    Download Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically render the rows of the table with data from the fetched assignments */}
                {fetchAssignments().then((urls) => {
                  return urls.map((item, i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">
                        <a href={item.url} download>
                          Download
                        </a>
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicStudentAssignment2;
