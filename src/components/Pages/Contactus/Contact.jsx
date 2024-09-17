import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-lg p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2  bg-zinc-900 border border-gray-600 rounded-lg text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2  bg-zinc-900 border border-gray-600 rounded-lg text-white"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 bg-zinc-900 border border-gray-600 rounded-lg text-white"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2  bg-zinc-900 border border-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
