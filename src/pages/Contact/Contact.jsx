import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_t7dw9lw";
    // console.log(message);
    sendFeedback(templateId, {
      message: message,
      from_name: name,
      reply_to: email,
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_d435bqq", templateId, variables)
      .then((res) => {
        // console.log('Email successfully sent!')
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };
  return (
    <div className="flex justify-center flex-col items-center p-5 md:mt-[5rem]">
      <p className="heading">Contact</p>
      {/* mail me form */}
      <div className="border border-slate-500 box-bg rounded-md mt-3 w-full lg:w-1/2 flex flex-col items-start justify-center">
        <div className="border-b border-slate-500 p-2 w-full">
          <h2>Let's create something awesome together!</h2>
        </div>
        <form
          className="flex flex-col gap-2 p-4 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="border border-slate-500 focus:border-[#FF4191] outline-none rounded-md p-2 w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="border border-slate-500 outline-none focus:border-[#FF4191] rounded-md p-2 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="border border-slate-500 focus:border-[#FF4191] outline-none resize-none rounded-md p-2 w-full"
            placeholder="Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="rounded-md p-2 w-fit px-10 hover:bg-[#e93d84] bg-[#FF4191] hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
      <div className="border border-slate-500 box-bg rounded-md mt-3 w-full lg:w-1/2 flex flex-col items-start justify-center">
        <div className="border-b border-slate-500 p-2 w-full">
          <h2>Connect with me:</h2>
        </div>
        <div className="flex flex-col gap-2 p-4 w-full items-center justify-center">
          <a
            href="https://github.com/Sneha-Shaw"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-500 rounded-md p-2 w-full flex items-center justify-center gap-2 hover:bg-[#FF4191] hover:border-transparent hover:text-white"
          >
            <GitHubIcon className="w-10" />
            <p className="w-[2rem]">GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/sneha-shaw122"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-500 rounded-md p-2 w-full flex items-center justify-center gap-2 hover:bg-[#FF4191] hover:border-transparent hover:text-white"
          >
            <LinkedInIcon className="w-10" />
            <p className="w-[2rem]">LinkedIn</p>
          </a>
          <a
            href="mailto:snehashaw122@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-500 rounded-md p-2 w-full flex items-center justify-center gap-2 hover:bg-[#FF4191] hover:border-transparent hover:text-white"
          >
            <MailIcon className="w-10" />
            <p className="w-[2rem]">Email</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
