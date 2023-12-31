import { AiOutlineContacts} from "react-icons/ai";
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_izix86d",
        "template_r2gbth4",
        form.current,
        "mf0YaVKEPMayxlWVo"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send email. Please try again later.");
        }
      );
    e.target.reset();
  };
  return (
    <div className="py-10 xl:px-10 lg:px-36  px-5 pb-11 mt-16">
      <div className="flex items-center border w-[145px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <AiOutlineContacts className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">Contact</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl text-4xl">
          Let's Work
          <span className="text-green-500"> Together!</span>{" "}
        </h1>
      </div>

      <form className="flex flex-col space-y-8" ref={form} onSubmit={sendEmail}>
        <div className="">
      
          <p className="text-white Inter text-xl">Full Name</p>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full Name"
            className="border-none outline-none  text-white bg-[#0f0f0f]
             py-4 w-full  Inter text-lg"
          />
        </div>

        <div className="">
          <p className="text-white Inter text-xl">Email</p>
          <input
           type='email'
            required
            name="email"
            placeholder="Your email address"
            className="border-none outline-none text-white bg bg-[#0f0f0f] 
             w-full  py-4 Inter text-lg"
          />
        </div>

        <div className="">
          <p className=" text-xl Inter text-white"> Message</p>
          <textarea
         
            name="message"
            required
            rows="5"
            placeholder="Write your message here ..."
            className="border-b resize-none border-[#646363] Inter text-white outline-none w-full bg-[#0f0f0f]
              py-4   text-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-green-400 text-[18px] Inter  font-semibold text-slate-900 hover:bg-black hover:text-green-500 hover:border hover:border-green-500 py-3 rounded-full w-[200px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
