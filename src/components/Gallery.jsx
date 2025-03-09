import React from 'react';
import '../CssComponents/Gallery.css'; // Create a separate CSS file for styles
import { Link } from 'react-router-dom';
const galleryImages = [
 
    { src: 'card-Img1.jpg', alt: 'Sea Tour 1' },
    { src: 'card-Img2.jpg', alt: 'Sea Tour 2' },
    
    { src: 'MainImg-5.jpg', alt: 'Sea Tour 3' },
    { src: 'card-Img1.jpg', alt: 'Sea Tour 4' },
    { src: 'card-Img2.jpg', alt: 'Sea Tour 5' },
    
    { src: 'MainImg-5.jpg', alt: 'Sea Tour 6' },
    { src: 'card-Img1.jpg', alt: 'Sea Tour 7' },
    { src: 'card-Img2.jpg', alt: 'Sea Tour 8' },
    
    { src: 'MainImg-5.jpg', alt: 'Sea Tour 9' },
    { src: 'card-Img1.jpg', alt: 'Sea Tour 10' },
    { src: 'card-Img2.jpg', alt: 'Sea Tour 11' },
    
    { src: 'MainImg-5.jpg', alt: 'Sea Tour 12' },
];

const Gallery = () => {
  return (
    <>
    <section className="gallery">
      <h4>Save Your Memories </h4>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      <div>
        <button className='Memories'>Add Your Meomories</button>
   
      </div>
    </section>
    </>
  );
};

export default Gallery;
