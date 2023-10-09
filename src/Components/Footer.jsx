import React from "react";
import { useEffect, useState } from "react";

const Footer =()=>{
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
       <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

<div class="footer-newsletter">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h4>Our Newsletter</h4>
        <p>Stay connected with us with weekly News Letter</p>
      </div>
      <div class="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Constructions</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Material Supply</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Man Power Sourcing</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Interiar Desing</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Madular Kitchen</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-contact">
        <h4>Contact Us</h4>
        <p>
          <strong>NEWTOWN</strong><br></br>
          #01 New Street <br></br>
          Anna Nagar, Chennai 600021<br></br>
          Indiz<br></br><br></br>
          <strong>Phone:</strong> +91 98765 43210<br></br>
          <strong>Email:</strong> info@newtown.com<br></br>
        </p>

      </div>

      <div class="col-lg-3 col-md-6 footer-info">
        <h3>About NEWTOWN</h3>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>Moderna</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
     Designed by <a href="https://cloudheard-df763.firebaseapp.com/">Pheonic iTech P Ltd</a>
  </div>
</div>
</footer>
<a href="#" class={`back-to-top d-flex align-items-center justify-content-center  ${scrolling ? 'active' : ''}`}><i class="bi bi-arrow-up-short"></i></a>

     </div>
    );
    
}
export default Footer;