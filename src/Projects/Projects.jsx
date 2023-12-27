import React, { useState } from 'react';
import './Projects.css'

const images = [
  'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // Add more image URLs as needed
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const nextPage = () => {
    const totalPages = Math.ceil(images.length / imagesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
//   {currentImages.map((image, index) => (
//     <img key={index} src={image} alt={`Image ${index + indexOfFirstImage}`} />
//   ))}
//   <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
//         <button onClick={nextPage} disabled={currentPage === Math.ceil(images.length / imagesPerPage)}>Next</button>

  return (
    <div className='page'>
        {/* <h1>PROJECTS</h1> */}
      <div className="container">
      <div className="lef">
        <h1>Project</h1>
        <span style={{color:"lightgray"}}>All</span>
        <span style={{color:"lightgray"}}>Outside</span>
        <span style={{color:"lightgray"}}>inside </span>
      </div>
        <div className="right">
            <div className="box" style={{padding:"20px"}}>
                {currentImages.map((image, index) => (
                    <div key={index} className="image-wrapper">
                    <img src={image} alt={`Image ${index + indexOfFirstImage}`} style={{padding:"10px",gap:"1rem"}} />
                    <div className="dod" style={{marginTop:"-2vh",marginLeft:'1.2vh',width:'38vh'}}>
                      <h3 style={{color:"white"}}>Wildstone Infra Hotel</h3>
                      <h4 style={{color:"white"}}>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                ))}
                
            </div>
            
            <div className="buttons">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(images.length / imagesPerPage)}>Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
