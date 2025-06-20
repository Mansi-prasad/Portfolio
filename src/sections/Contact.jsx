import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("sendmail called");
    e.preventDefault();
    emailjs
      .sendForm("service_t1ezvai", "template_2l9ycdp", form.current, {
        publicKey: "qj-TC6HGJtnZCWqjN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("thanks for sending mail");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="px-12 py-8 lg:py-12 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-bold text-center text-white">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
              name="from_name"
              placeholder="Your name"
              required
              className="shadow-sm bg-[rgb(40,40,40)] text-sm rounded-sm focus:ring-primary-500 block w-full p-2 focus:outline-none"
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
              name="from_email"
              placeholder="Your email"
              required
              className="shadow-sm bg-[rgb(40,40,40)] text-sm rounded-sm block w-full p-2 focus:outline-none"
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
              row="6"
              name="message"
              id="message"
              className="h-25 resize-none shadow-sm bg-[rgb(40,40,40)] text-white text-sm rounded-sm focus:ring-primary-500 block w-full p-2.5 focus:outline-none"
              defaultValue="Send Message"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:cursor-pointer hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(47,65,240,0.72)] rounded-sm text-lg mt-6"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
