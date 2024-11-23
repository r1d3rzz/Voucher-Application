import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="text-black text-center bg-white p-3">
        Voucher App &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
