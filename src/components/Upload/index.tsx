import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postImage } from "catActions";
import useTypedSelector from "hooks/useTypedSelector";
import styles from "./style.module.css";

const Upload = () => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector((state) => state.cats.isLoading);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileToUpload, setFileToUpload] = useState<File>(null);
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string>(null);

  // useEffect(() => {}, []);

  const handleFileUpload = () => {
    if (fileInputRef.current.files.length) {
      const theFile = fileInputRef.current.files[0];
      const previewUrl = URL.createObjectURL(theFile);
      setFileToUpload(theFile);
      setImgPreviewUrl(previewUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    if (fileToUpload && !isLoading) {
      dispatch(postImage(fileToUpload));
    }
  };

  const uploadText = fileToUpload?.name || "You have not chosen a cat pic :(";

  return (
    <div className={styles.container}>
      <div className={styles.uploadContainer}>
        <h1 className={styles.title}>Upload a Cat Pic! :3</h1>
        <input
          onChange={handleFileUpload}
          ref={fileInputRef}
          className={styles.uploadInput}
          id="input"
          type="file"
        />
        {fileToUpload && (
          <div className={styles.imgPreviewContainer}>
            <div className={styles.imgPreviewRatio}>
              <img className={styles.imgPreview} src={imgPreviewUrl} alt="" />
            </div>
          </div>
        )}
        <button onClick={handleUploadClick} className={styles.uploadBtn}>
          {fileToUpload ? "Choose a different one" : "Upload"}
        </button>
        {fileToUpload && (
          <button onClick={handleSubmit} className={styles.submitBtn}>
            {isLoading ? "Submitting..." : "Submit!"}
          </button>
        )}
        <p className={styles.note}>{uploadText}</p>
        {fileToUpload && (
          <p className={styles.fileSizeText}>
            (About {Math.floor(fileToUpload.size / 1024)} kB)
          </p>
        )}
      </div>
    </div>
  );
};

export default Upload;
