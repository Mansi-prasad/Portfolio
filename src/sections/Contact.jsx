import React from "react";

const Contact = () => {
  return (
    <section id="section">
      <div className="px-12 py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-bold text-center text-gray-200">
          Contact Me
        </h2>
        <form action="" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 block w-full p-2.5"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white "
            >
              Message
            </label>
            <textarea
              row="10"
              name="message"
              id="message"
              className=" h-30 resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 block w-full p-2.5"
              defaultValue="Send Message"
            ></textarea>
            <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:cursor-pointer hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(47,65,240,0.72)] rounded-sm text-lg mt-6">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
