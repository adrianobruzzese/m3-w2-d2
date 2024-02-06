import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar"; // Rinominato MyNav
import Footer from "./components/Footer"; // Rinominato MyFooter
import WelcomeMessage from "./components/WelcomeMessage"; // Rinominato Welcome
import { Container } from "react-bootstrap";
import BookCollection from "./components/BookCollection"; // Rinominato BookList

import booksData from "./data/fantasy.json"; // Rinominato fantasy

function App() {
  return (
    <>
      <NavigationBar brand="BookSphere" slogan="Explore Your Imagination" />
      <Container>
        <WelcomeMessage message="Discover Your Next Favorite Book!" />
        <BookCollection books={booksData} />
      </Container>
      <Footer
        leftColumn={
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        }
        centerColumn={
          <ul>
            <li>Authors</li>
            <li>Genres</li>
            <li>Publishers</li>
          </ul>
        }
        rightColumn={
          <ul>
            <li>Help & Support</li>
            <li>Our Blog</li>
            <li>Careers</li>
          </ul>
        }
      />
    </>
  );
}

export default App;
