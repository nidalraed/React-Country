import React from 'react';

function Footer() {
  return (
    <footer className="bg-grey1000 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <h3 className="text-2xl font-semibold">Follow Us</h3>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-yellow-300"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Contact Info</h3>
        <p className="mt-2">Email: nedalraed55@gmail.com</p>
        <p>Phone: +962*********</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
