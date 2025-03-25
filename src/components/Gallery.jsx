import React, { useState, useCallback } from 'react';
import '../CssComponents/Gallery.css'; //  CSS
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone'; // For drag-and-drop file upload

const  Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([
    { src: 'cpl-img.jpg', alt: 'Sea Tour 1' },
    { src: 'deepseaFishing.jpg', alt: 'Sea Tour 2' },
    { src: 'seaViewresort-img.avif', alt: 'Sea Tour 3' },
    { src: 'MainImg-5.jpg', alt: 'Sea Tour 4' },
    { src: 'sunset.jpg', alt: 'Sea Tour 5' },
    { src: 'summer-img.jpeg', alt: 'Sea Tour 6' },
    { src: 'vibrentBeach-img.jpg', alt: 'Sea Tour 7' },
    { src: 'MainImg-4.jpg', alt: 'Sea Tour 8' },
    { src: 'MainImg-3.jpg', alt: 'Sea Tour 9' },
    { src: 'Family-img.jpg', alt: 'Sea Tour 10' },
    { src: 'header-img.jpg', alt: 'Sea Tour 11' },
    

    // ... your initial images
  ]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGalleryImages((prevState) => [
          ...prevState,
          { src: e.target.result, alt: file.name },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleImageDelete = (index) => {
    setGalleryImages((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <section className="advanced-gallery">
      <h4> Save Your Memories</h4>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <button
              className="delete-button"
              onClick={() => handleImageDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}

        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop your memories here, or click to select files</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;