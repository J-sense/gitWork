import React from "react";
import logo from "/logo.png";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-[#151516] text-[#DCDCDC] p-10 py-36 navFont" >
        <nav>
          <img src={logo} alt="" className="h-10 w-60 justify-center" />
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item bg-black border-slate-500"
          />
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-[#DCDCDC]">Copyright © Gitwork Ltd.
              All rights reserved.</span>
            </label>
            <div className="join"></div>
          </fieldset>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title uppercase">Address</h6>
          <a className="link link-hover uppercase">Banasree, A Block ,Daisy Gardern Road,</a>
          <a className="link link-hover">+8801914667297</a>

        </nav>
        <form>
        
        </form>
      </footer>
    </div>
  );
};

export default Footer;
