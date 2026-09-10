import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FiHexagon } from "react-icons/fi";

import "../main.css";


const Navbar = () => {


  const [scrolled,setScrolled] = useState(false);

  const [expanded,setExpanded] = useState(false);

  const location = useLocation();



  useEffect(()=>{

    const handleScroll = ()=>{

      setScrolled(window.scrollY > 30);

    }


    window.addEventListener("scroll",handleScroll);


    return ()=>window.removeEventListener("scroll",handleScroll);


  },[]);




  useEffect(()=>{

    window.scrollTo(0,0);

    setExpanded(false);

  },[location.pathname]);






  return (

    <BootstrapNavbar

      expand="lg"

      fixed="top"

      expanded={expanded}

      onToggle={setExpanded}

      className={`modern-navbar ${scrolled ? "scrolled" : ""}`}

    >


      <Container>


        {/* LOGO LEFT */}

        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="modern-logo"
          onClick={()=>setExpanded(false)}
        >


          <div className="modern-logo-icon">

            <FiHexagon/>

          </div>



          <div className="modern-logo-text">


            <h4>
              Moon
            </h4>

            <span>
              Technology
            </span>


          </div>



        </BootstrapNavbar.Brand>






        {/* MOBILE TOGGLE */}


        <BootstrapNavbar.Toggle

          aria-controls="navbar-menu"

          className="modern-toggler"

        />







        {/* NAV RIGHT */}


        <BootstrapNavbar.Collapse id="navbar-menu">


          <Nav className="modern-nav ms-auto">



            <Nav.Link
              as={Link}
              to="/"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/"
                ?
                "active"
                :
                ""
              }
            >

              Home

            </Nav.Link>





            <Nav.Link
              as={Link}
              to="/about"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/about"
                ?
                "active"
                :
                ""
              }
            >

              About

            </Nav.Link>





            <Nav.Link
              as={Link}
              to="/service"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/service"
                ?
                "active"
                :
                ""
              }
            >

              Services

            </Nav.Link>






            <Nav.Link
              as={Link}
              to="/solution"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/solution"
                ?
                "active"
                :
                ""
              }
            >

              Solutions

            </Nav.Link>







            <Nav.Link
              as={Link}
              to="/testimonials"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/testimonials"
                ?
                "active"
                :
                ""
              }
            >

              Testimonials

            </Nav.Link>







            <Nav.Link
              as={Link}
              to="/team"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/team"
                ?
                "active"
                :
                ""
              }
            >

              Team

            </Nav.Link>







            <Nav.Link
              as={Link}
              to="/contact"
              onClick={()=>setExpanded(false)}
              className={
                location.pathname==="/contact"
                ?
                "active"
                :
                ""
              }
            >

              Contact

            </Nav.Link>





          </Nav>



        </BootstrapNavbar.Collapse>





      </Container>


    </BootstrapNavbar>


  );

};


export default Navbar;