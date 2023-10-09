import React, { useEffect, useState } from "react";


const Header =()=>{
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return(
        <div>
           <header id="header" className={`fixed-top d-flex align-items-center header-transparent ${scrolling ? 'header-scrolled' : ''}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                <h1 className="text-light">
                <a href="/">
                    <span>
                        NewTown
                    </span>
                </a>
                </h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a className="active" href="/">Home</a>
                        </li>
                        <li>
                            <a href="/service">Service</a>
                        </li>
                        <li>
                            <a href="/Portfolio">Projects</a>
                        </li>
                        <li><a href="/blog">Blog</a></li>
                        <li className="dropdown">
                            <a href="/dropdown">
                            <span>We Provide</span>
                            <i className="bi bi-chevron-down">                                
                            </i>
                            </a>
                            
                            <ul>
                                <li>
                                    <a href="/work1">Constructions</a>
                                </li>
                                <li>
                                    <a href="/work2">Material Supply </a>
                                </li>
                                <li>
                                    <a href="/work3">Man Power Sourcing</a>
                                </li>
                                <li>
                                    <a href="/work4">Interior Design</a>
                                </li>
                                <li>
                                    <a href="/work5">Madular Kitchen</a>
                                </li>
                                <li>
                                    <a href="/work6">Maintanance</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle">

                    </i>
                </nav>

            </div>

           </header>
        </div>
    );
}
export default Header;