import React, { useRef } from 'react';
import imagedata from "../utils/imagedataHome";

import "../index.css";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"; // If using react-router
import { ExternalLink } from "lucide-react";


export default function ContactForm() {
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
  
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error(`Failed: ${data.error}`);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  
  return (
    <div className="relative overflow-hidden bg-[#0a0a1f] py-16 sm:py-24">
      <Toaster position="bottom-left" reverseOrder={false} />

      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rotate-12 transform scale-150" />
        <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-1/2 bg-blue-600/5 -rotate-12 transform scale-150" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-proracing tracking-tight">
            SPONSORSHIP
          </h2>
          <div className="mt-4 h-1 w-24 sm:w-40 mx-auto bg-blue-500" />
        </div>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="aspect-w-12 aspect-h-7 lg:aspect-none relative">
                <img
                  className="rounded-lg shadow-lg object-cover object-center"
                  src={imagedata.sponsor}
                  alt="Placeholder for sponsorship"
                  width={600}
                  height={400}
                />
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg" />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-white">
                  LET'S PARTNER UP
                </h3>
                <p className="mt-2 text-slate-300 italic text-center">
                  Join us in pushing the limits of engineering and innovation.
                  Interested in partnering with our college Baja team?
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name='email'
                    placeholder="Email"
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    name='phone'
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Message"
                    name='message'
                    rows={4}
                    className="w-full p-3 bg-blue-900/20 border border-blue-500/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <Link
                  to="/sponsorship"
                  className="group inline-flex items-center text-blue-300 hover:text-blue-400"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  <span className="font-medium italic">
                    To know more about sponsorship, visit our sponsorship page
                  </span>
                  <span className="ml-1 text-blue-400 group-hover:ml-2 transition-all duration-200">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
