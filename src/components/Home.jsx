import React from 'react'
import Navbar from './Navbar'
import '../CssComponents/Home.css'
import { Link } from 'react-router-dom'

import Services from './Services'
import Destination from './Destination'
// JQuaery for back to Top Button Script 
import "../JScomponent/imgCroses.js"

const Home = () => {

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    <>
      <Navbar />

      {/* Section 1 */}
      <section className='section-1'>
        {/* <img src="MainImg-4.jpg" classNameName='section1img' alt="Main" /> */}
        <video className='section1video' autoPlay loop muted>
          <source src="MainPage-Video.mp4" type="video/mp4" />

        </video>
        <div className='maintext'>
          <h3>Experience Fisherman Life & Adventures!</h3>

          <p>
            Thrilling sea tours with<br />
            scenic resort stays, where fishing,<br />
            fun, and unforgettable beach memories await!
          </p>
          <Link to="/Booking"><button className=" book-now" onClick={scrollToBooking}>Book Now</button></Link>
        </div>
      

      </section>

      <Services />
      <Destination />
      {/* this div for croos scroling animation with image section */}

      <div class="skw-pages">
        {/* 1 */}
  <div class="skw-page skw-page-1 active">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">Amazing Sun Set Dont! miss</h2>
          <p class="skw-page__description">Embark on an unforgettable sea tour with us, where the horizon stretches endlessly and the ocean's gentle rhythm soothes your soul. As the day gracefully surrenders to the twilight, witness the breathtaking spectacle of an amazing sunset painting the sky with vibrant hues of orange, pink, and gold. Our carefully curated tour allows you to capture these magical moments, creating memories that will forever shimmer in your heart. Whether you're seeking a romantic escape, a family adventure, or a serene retreat, our sea tour promises an enchanting experience, culminating in nature's most dazzling display – a truly amazing sunset.</p>
        </div>
      </div>
    </div>
  </div>
{/* 2 */}
<div class="skw-page skw-page-2">
    <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
            <div class="skw-page__content">
                <h2 class="skw-page__heading">Our Amazing Resorts</h2>
                <p class="skw-page__description">Our Amazing Resorts offers a luxurious and unforgettable escape, featuring world-class amenities, breathtaking views, and exceptional hospitality. Whether you're seeking relaxation or adventure, our resorts provide the perfect retreat for an extraordinary experience.</p>
            </div>
        </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
        </div>
    </div>
</div>
{/* 3 */}
<div class="skw-page skw-page-3 active">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading"> Vibrent Beach Life</h2>
          <p class="skw-page__description">Immerse yourself in the vibrant tapestry of beach life with our exhilarating sea tour, where every moment is a celebration of sun, sand, and the sparkling sea. Feel the rhythm of the waves as we explore hidden coves and sun-kissed shores, each teeming with lively energy and the promise of adventure. From the thrill of water sports to the serenity of lounging on pristine beaches, our tour offers a kaleidoscope of experiences. Discover the local culture, savor delicious seaside cuisine, and witness the captivating spectacle of coastal sunsets. Join us and embrace the vibrant beach life, where every day is a festival of joy and unforgettable memories.</p>
        </div>
      </div>
    </div>
  </div>
{/* 4 */}
<div class="skw-page skw-page-4">
    <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
            <div class="skw-page__content">
                <h2 class="skw-page__heading"> Enjoy the Deep Sea Adventure</h2>
                <p class="skw-page__description">Dive into the heart of the ocean's mysteries with our deep sea adventure tour, where the thrill of exploration meets the tranquility of the vast blue. Journey beyond the familiar coastline and discover a world teeming with vibrant marine life, hidden reefs, and the awe-inspiring depths of the sea. Our experienced guides will lead you on an unforgettable expedition, revealing the secrets that lie beneath the surface. From encountering playful dolphins to witnessing the majestic dance of whales, this tour promises an adrenaline-pumping yet serene experience, inviting you to connect with the untamed beauty of the deep sea.</p>
            </div>
        </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
        </div>
    </div>
</div>

</div>
   

      
 
    </>


  )
}

export default Home