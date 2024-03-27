import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions, feedback, or just want to say hello? We'd love to hear
          from you!
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
