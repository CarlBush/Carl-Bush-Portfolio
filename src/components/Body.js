import Nav from "./Nav/Nav";
import About from "./About/About";
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
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
            {renderPage()}
        </div>
    )
}

export default Body;