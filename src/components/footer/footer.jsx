import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className="text-white bg-[#1e1e1e] font-semibold">
        <div className="flex h-[200px] bg-[#2e2e2e] justify-around items-center w-full">
          <div className="w-1/3">© Copyright 2023. All Rights Reserved by DevUI.</div>
          <div className="flex justify-around w-1/3">
            <div>
              Company
              <ul className="text-[#4d4d4d]">
                <li className="hover:text-white">
                  <span>Features</span>
                </li>
                <li className="hover:text-white">
                  <span>Pricing</span>
                </li>
                <li className="hover:text-white">
                  <span>Affiliate Program</span>
                </li>
                <li className="hover:text-white">
                  <span>Press Kit</span>
                </li>
              </ul>
            </div>
            <div>
              Support
              <ul className="text-[#4d4d4d]">
                <li className="hover:text-white">
                  <span>Support</span>
                </li>
                <li className="hover:text-white">
                  <span>Account</span>
                </li>
                <li className="hover:text-white">
                  <span>Help</span>
                </li>
                <li className="hover:text-white">
                  <span>Contact Us</span>
                </li>
                <li className="hover:text-white">
                  <span>Customer Support</span>
                </li>
              </ul>
            </div>
            <div>
              Legals
              <ul className="text-[#4d4d4d]">
                <li className="hover:text-white">
                  <span>Terms &amp; Conditions</span>
                </li>
                <li className="hover:text-white">
                  <span>Privacy Policy</span>
                </li>
                <li className="hover:text-white">
                  <span>Licensing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer