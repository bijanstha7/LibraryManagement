import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./BookList.css";
import {auth} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Book = (book) => {
  const [user]=useAuthState(auth);
  const navigate= useNavigate();
  const handleCart=()=>{
    user ? navigate("/mycart"): navigate("/login");
  }
  const generateRandomAvailability = () => {
    const options = ['Available', 'Unavailable'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  const [randomAvailability] = useState(generateRandomAvailability());

  return (

    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>No of Copies: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Availability: </span>
          <span>{randomAvailability}</span>
        </div>

        <button class="addtocart" onClick={handleCart}>
        <div class="pretext">
        <i class="fas fa-cart-plus"></i>ADD TO CART
        </div>
        </button>

        </div>
        </div>

  )
}

export default Book