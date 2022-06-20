import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react"

function Body() {

const [currentPage, setCurrentPage] =useState("About");

const renderPage = function () {
    if (currentPage === "About") {
        return <About/>;
    }
    if (currentPage === "Contact") {
        return <Contact/>;
    }
    if (currentPage === "Portfolio") {
        return <Portfolio/>;
    }
    if (currentPage === "Resume") {
        return <Resume/>;
    }
};

const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
            {renderPage()}
        </main>
    )
}

export default Body;