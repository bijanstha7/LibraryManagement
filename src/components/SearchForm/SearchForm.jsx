import React, {useRef, useEffect, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('title');

  useEffect(() => searchText.current.focus(), []);
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);

    }

    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="Search books..." ref={searchText} />
              <select className="select" value={selectedFilter} onChange={handleFilterChange}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="subject">Subject</option>
                <option value="publishDate">Publish Date</option>
              </select>
              <button type="submit" className="flex flex-c" onClick={handleSubmit}>
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm