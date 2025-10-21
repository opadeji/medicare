import React from "react";
import { LuMail, LuText, LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <div className=" py-10 bg-gradient-to-br from-gray-300 via-blue-200 to-indigo-300 px-10">
      <div className="max-w-[1200px] mx-auto flex items-center mt-10 justify-around max-[840px]:flex-col max-[840px]:gap-10  ">
        <div>
          <h1 className="text-5xl font-bold text-center">
            Get in touch with Medicare!
          </h1>
          <div className="max-w-[580px] mt-10">
            <h1 className="text-3xl font-bold">How can we help?</h1>
            <p className="mt-4 text-gray-500 ">
              Can't find what you're looking for on our site? Please fill in the
              form below to ask us any questions and we'll get back to you as
              soon as possible.
            </p>
            <div className="mt-10 ">
              <form action="" className="flex flex-col gap-5">
                <div className="flex gap-5 max-[900px]:flex-col">
                  <div className="flex flex-col w-full ">
                    <label
                      htmlFor="name"
                      className="text-xs text-gray-500 font-bold"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      className="bg-indigo-100 p-4 rounded-xl"
                      placeholder="e.g John Doe"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="location"
                      className="text-xs text-gray-500 font-bold"
                    >
                      LOCATION
                    </label>
                    <input
                      type="text"
                      className="bg-indigo-100  p-4 rounded-xl"
                      placeholder="Lagos"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs text-gray-500 font-bold"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="bg-indigo-100  p-4 rounded-xl"
                    placeholder="e.g Johndoe@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-xs text-gray-500 font-bold"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="bg-indigo-100  p-4 rounded-xl h-[170px]"
                    placeholder="Tell us how we can help you"
                  />
                </div>
                <div className="mx-auto">
                  <button className="bg-indigo-900  text-white font-bold p-4 w-[100px] rounded-full">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 ">
            <span className="text-indigo-900">
              <LuMail size={40} />
            </span>
            <h1 className="text-xl font-bold max-w-[400px] leading-6">
              Contact us via email and we will get back to you as soon as we can
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-indigo-900">
              <LuText size={40} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-600 font-bold text-xs uppercase">
                Technical & Customer Support
              </h1>
              <a href="mailto:Medicare@gmail.com">
                <p className="font-bold text-lg hover:text-indigo-900">
                  Medicare@gmail.com
                </p>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-indigo-900">
              <LuPhoneCall size={40} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-600 font-bold text-xs uppercase">
                Contact us
              </h1>
              <a href="tel:07034915860">
                <p className="font-bold hover:text-indigo-900 ">07034915860</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
