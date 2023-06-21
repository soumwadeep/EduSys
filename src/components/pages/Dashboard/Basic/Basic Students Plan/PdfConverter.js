import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, where } from "firebase/firestore";
import swal from "sweetalert";
import BasicStudentSidebar from "./BasicStudentSidebar";
import jsPDF from "jspdf";

const BasicStudentClearDoubts = () => {
  useEffect(() => {
    document.title = "Your Pdf Converter | EduSys";
  }, []);

  const [student, loading, err] = useAuthState(auth);
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);
  const [isConverting, setIsConverting] = useState(false);
  const [pdfData, setPdfData] = useState(null); // State to hold the converted PDF data

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data. Please Login Again!",
        "error"
      );
      return navigate("/StudentLogin");
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFiles = Array.from(files);
      setSelectedImages(selectedFiles);
    }
  };

  const convertToPDF = () => {
    if (selectedImages.length > 0) {
      setIsConverting(true);
      const doc = new jsPDF();
      let imagesProcessed = 0;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const processImage = (index) => {
        if (index === selectedImages.length) {
          const pdfData = doc.output("blob"); // Generate blob data for the PDF
          setPdfData(pdfData); // Store the PDF data in state
          setIsConverting(false);
          return;
        }

        const image = selectedImages[index];
        const reader = new FileReader();

        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const width = img.width;
            const height = img.height;
            const aspectRatio = width / height;

            let imageWidth, imageHeight;
            if (aspectRatio > 1) {
              imageWidth = pageWidth;
              imageHeight = pageWidth / aspectRatio;
            } else {
              imageWidth = pageHeight * aspectRatio;
              imageHeight = pageHeight;
            }

            if (index !== 0) {
              doc.addPage();
            }

            const x = (pageWidth - imageWidth) / 2;
            const y = (pageHeight - imageHeight) / 2;
            doc.addImage(img, "JPEG", x, y, imageWidth, imageHeight);

            imagesProcessed++;

            if (imagesProcessed === selectedImages.length) {
              const pdfData = doc.output("blob"); // Generate blob data for the PDF
              setPdfData(pdfData); // Store the PDF data in state
              setIsConverting(false);
            } else {
              processImage(index + 1);
            }
          };

          img.src = e.target.result;
        };

        reader.readAsDataURL(image);
      };

      processImage(0);
    }
  };

  const handleDownload = () => {
    if (pdfData) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(pdfData);
      downloadLink.download = "your-homework.pdf";
      downloadLink.click();
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");
    fetchUserName();
  }, [student, loading]);

  return (
    <div className="container">
      <BasicStudentSidebar />
      <div className="row justify-content-center">
        <div className="col-sm">
          <span>
            <h1 className="text-center mb-4">Pdf Converter</h1>
            <input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              multiple
            />
            <button onClick={convertToPDF} disabled={isConverting}>
              {isConverting ? "Converting..." : "Convert to PDF"}
            </button>
            {pdfData && (
              <div>
                <button onClick={handleDownload}>Download PDF</button>
                <iframe
                  src={URL.createObjectURL(pdfData)}
                  width="100%"
                  height="500px"
                />
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicStudentClearDoubts;
