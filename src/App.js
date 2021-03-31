import React from 'react';
import './App.css';
import './components/navbar/Navbar';
import NavBar from "./components/navbar/Navbar";
import Main from "./components/main/main";
import Portfolio from "./components/portfolio/portfolio";

function App() {
    return (
        <div className="App">
            <section className="header">
                <header className="App-header">
                    <NavBar/>
                    <Main/>
                </header>
            </section>
            <section className="portfolio">
                <Portfolio/>
            </section>
        </div>
    );
}

export default App;
