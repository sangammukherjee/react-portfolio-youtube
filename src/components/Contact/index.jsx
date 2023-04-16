import { contactControls } from "../../data";
import Header from "../Header";
import contactMeImage from "../../images/4.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qt3l7ve",
        "template_qajlc1e",
        form.current,
        "8MNorG5v5vFyaJsHX"
      )
      .then((res) => res.status === 200 && form.current.reset())
      .catch((e) => console.log(e));  
  };

  return (
    <Element id="contact" className="bg-secondaryBackground pt-10 pb-12  lg:pt[40px] lg:pb[40px]">
      <div className="container mx-auto">
        <Header title={`Let's chat and get a quote`} />
        <div className="flex gap-5 px-[15px]">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendMail}>
              {contactControls.map((control) =>
                control.inputType === "input" ? (
                  <div className={control.divClassName}>
                    <input
                      className={control.className}
                      type={control.type}
                      placeholder={control.placeholder}
                      name={control.name}
                    />
                  </div>
                ) : (
                  <div className={control.divClassName}>
                    <textarea
                      className={control.className}
                      type={control.type}
                      placeholder={control.placeholder}
                      name={control.name}
                    />
                  </div>
                )
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-bgRed text-gray-100 p-3 rounded-lg w-full focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="flex">
              <div className="text-center">
                <figure className="mb-2 h-height500">
                  <img
                    className="max-h-full ml-auto mr-auto rounded-[20px]"
                    src={contactMeImage}
                    alt="Contact Me Image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
