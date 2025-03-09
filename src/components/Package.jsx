import React, { useState } from 'react';
import "../CssComponents/Package.css"
// Sample JSON data
const packageData = {
  
  packages: [
    {
      id: 1,
      title: "Adventure Fishing Tour",
      category: "Fishing Tours",
      duration: "6 Hours",
      price: 750,
      description: "Join us for a thrilling adventure fishing tour along the coast, including gear and expert guidance.",
      image: "card-Img1.jpg"
    },
    {
      id: 2,
      title: "Beach Resort Relaxation",
       category: "Resort Stays",
     duration: "5 Days",
      price: 2200,
     description: "A peaceful beach retreat offering relaxation, spa services, gourmet dining, and more.",
     image: "card-Img2.jpg"
    },
    {
      id: 3,
       title: "Ultimate Combo: Fishing & Resort",
       category: "Combo Packages",
     duration: "8 Days",
      price: 3000,
     description: "Combine 4 days of resort relaxation and 3 days of fishing for the perfect getaway.",
     image: "card-Img1.jpg"
    },
    {
      id: 4,
       title: "Luxury Fishing Yacht Experience",
       category: "Fishing Tours",
     duration: "9 Hours",
      price: 5000,
     description: "Set sail on a luxury yacht for an unforgettable deep-sea fishing adventure with top-tier service and meals.",
     image: "card-Img3.webp"
    },
    {
      id: 5,
       title: "Island Escape Resort",
       category: "Resort Stays",
     duration: "4 Days",
      price: 1800,
     description: "Escape to a private island resort with luxurious amenities, private beaches, and scenic views.",
     image: "card-Img1.jpg"
    },
    {
      id: 6,
       title: "Exclusive Fishing Tour & Resort Stay",
       category: "Combo Packages",
     duration: "10 Days",
      price: 4000,
     description: "Enjoy the perfect vacation with 5 days at a beachfront resort and 5 days of exclusive fishing excursions.",
     image: "card-Img2.jpg"
    },
 
  ]
}


const Package = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter packages based on category
  const filteredPackages = selectedCategory === 'All' 
    ? packageData.packages
    : packageData.packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section className="card-section">

      {/* <img src='card-BGImg1.jpg'   className='card-BGImg'></img> */}
      {/* Category Filters */}
      <div  id="filter-btn" className="category-filters mb-4 text-center">
        <button className="btn btn-outline- mx-2" onClick={() => setSelectedCategory('All')}>All</button>
        <button className="btn btn-outline- mx-2" onClick={() => setSelectedCategory('Fishing Tours')}>Fishing Tours</button>
        <button className="btn btn-outline- mx-2" onClick={() => setSelectedCategory('Resort Stays')}>Resort Stays</button>
        <button className="btn btn-outline- mx-2" onClick={() => setSelectedCategory('Combo Packages')}>Combo Packages</button>
      </div>

      {/* Package Cards */}
      <div  id='pkg-cards' className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {filteredPackages.map(pkg => (

          <div className="col" key={pkg.id}>
            <div className="card h-100">
              <img src={pkg.image} alt={pkg.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">Duration: {pkg.duration}</p>
                <p className="card-text text-primary">Price: RS.{pkg.price}</p>
                <p className="card-text">{pkg.description}</p>
                <button className="btn btn-success w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Package;