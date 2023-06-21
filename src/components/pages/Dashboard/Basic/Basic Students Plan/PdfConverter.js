import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, where, addDoc } from "firebase/firestore";
import swal from "sweetalert";
import BasicStudentSidebar from "./BasicStudentSidebar";
import jsPDF from "jspdf";

const BasicStudentPdfConverter = () => {
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

  const savePdfToDatabase = async (pdfData) => {
    try {
      const base64Data = await getBase64Data(pdfData);
      const docRef = await addDoc(
        collection(db, "Students", "ConvertedPdfs", student.email),
        {
          pdfData: base64Data,
          timestamp: new Date().getTime(),
        }
      );
      console.log("PDF saved to database with ID: ", docRef.id);
    } catch (error) {
      console.error("Error saving PDF to database: ", error);
    }
  };

  const getBase64Data = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
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
          savePdfToDatabase(pdfData); // Save the PDF to the database
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
              savePdfToDatabase(pdfData); // Save the PDF to the database
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
            <button
              onClick={convertToPDF}
              className="btngreen"
              disabled={isConverting}
            >
              {isConverting ? "Converting..." : "Convert to PDF"}
            </button>
            {pdfData && (
              <div>
                <button className="btngreen" onClick={handleDownload}>
                  Download PDF
                </button>
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

export default BasicStudentPdfConverter;
