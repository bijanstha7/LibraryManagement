import React from 'react';
import "./About.css";
import aboutImg from "../../images/library.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Library Management System</h2>
            <p className='fs-17'>A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.</p>
            <p className='fs-17'>This system completely automates all your library’s activities. The best way to maintain, organize, and handle countless books systematically is to implement a library management system software.</p>
            <p className='fs-17'>A library management system is used to maintain library records. It tracks the records of the number of books in the library, how many books are issued, or how many books have been returned or renewed or late fine charges, etc.</p>
            <p className='fs-17'>You can find books in an instant, issue/reissue books quickly, and manage all the data efficiently and orderly using this system. The purpose of a library management system is to provide instant and accurate data regarding any type of book, thereby saving a lot of time and effort.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
