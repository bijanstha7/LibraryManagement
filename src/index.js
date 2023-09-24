import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./pages/Login/Login";
import Mycart from "./components/Mycart/Mycart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="login" element={<Login />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="mycart" element={<Mycart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
