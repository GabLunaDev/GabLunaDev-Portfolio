"use client";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_icdhgpz",
      "template_r21e6mh",
      form.current,
      "5CVa5GXomKYn1JGLS"
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-16">
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-sm lg:text-base text-purple-500">Get In Touch</p>
        <h2 className="text-2xl lg:text-3xl font-extrabold">Contact Me</h2>
      </div>
      <div className="flex flex-col gap-10 justify-center md:flex-row">
        <div className="flex flex-col items-center gap-6">
          <div className="w-64 flex flex-col text-center items-center gap-2 transition ease border-[2px] border-purple-500 hover:border-white bg-[#181818] hover:bg-transparent rounded-xl hover:scale-[1.02] py-3">
            <HiOutlineMail className="text-3xl text-purple-500" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <h5>gabriellunacv@gmail.com</h5>
              <a
                href="mailto:gabriellunacv@gmail.com"
                target="_blank"
                className="text-purple-500 transition ease underline decoration-1 hover:decoration-2"
              >
                Send a Message
              </a>
            </div>
          </div>
          <div className="w-64 flex flex-col text-center items-center gap-2 transition ease border-[2px] border-purple-500 hover:border-white bg-[#181818] hover:bg-transparent rounded-xl hover:scale-[1.02] py-3">
            <BsWhatsapp className="text-3xl text-purple-500" />
            <div>
              <h4 className="text-lg font-semibold">Whatsapp</h4>
              <h5>+5581988617940</h5>
              <a
                href="https://api.whatsapp.com/send?phone=5581988617940"
                target="_blank"
                className="text-purple-500 transition ease underline decoration-1 hover:decoration-2"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="p-4 border text-gray-200 bg-[#181818] border-purple-500 focus:ring-purple-500 rounded placeholder:text-[#333333]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 border text-gray-200 bg-[#181818] border-purple-500 focus:ring-purple-500 rounded placeholder:text-[#333333]"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="p-4 border text-gray-200 bg-[#181818] border-purple-500 focus:ring-purple-500 rounded placeholder:text-[#333333]"
          ></textarea>
          <button
            type="submit"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium transition duration-300 border-purple-600 text-purple-600 hover:bg-purple-700 ease"
          >
            <span className="relative text-purple-600 transition duration-300 group-hover:text-white ease">
            Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
