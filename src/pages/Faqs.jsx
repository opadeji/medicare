import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Faqs = () => {
  const [isActive, setIsActive] = useState(null);

  const faqs = [
    {
      question: "What is Medicare?",
      answer:
        "Medicare is a digital hospital record management system that replaces paper-based hospital cards in Nigeria. It allows hospitals to securely store and manage patient data online.",
    },
    {
      question: "Who can use Medicare?",
      answer:
        "Hospitals, clinics, and healthcare providers can use eMedCard. It supports different roles like admin, doctors, and pharmacists with separate dashboards for each.",
    },
    {
      question: "Is patient data secure?",
      answer:
        "Yes. All patient data is encrypted and stored securely in the cloud. Access is restricted to verified hospital staff with unique login credentials.",
    },
    {
      question: "Can multiple hospitals use Medicare?",
      answer:
        "Yes. Medicare is built as an enterprise solution, meaning each hospital gets its own secure workspace with separate data and staff management.",
    },
    {
      question: "Can doctors access patient history?",
      answer:
        "Absolutely. Each patient has a unique ID linked to their full health record, including allergies, contraindications, and previous visits.",
    },
    {
      question: "Does Medicare include an AI assistant?",
      answer:
        "Yes. The AI module helps doctors make faster decisions by showing relevant history, checking for allergies, and alerting possible drug conflicts. It does not diagnose.",
    },
    {
      question: "Can I print or download reports?",
      answer:
        "Yes. Doctors and admins can easily generate digital reports or print receipts directly from the system.",
    },
    {
      question: "Do I need internet-connected equipment?",
      answer:
        "For advanced integration (like automatic printing and equipment data transfer), internet-connected PCs and printers are required. However, basic record functions work with any modern browser.",
    },
    {
      question: "Is Medicare free?",
      answer:
        "We offer a free trial for hospitals. Afterward, pricing depends on the number of staff accounts and storage needs. Contact our sales team for a quote.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our website as a hospital admin, add your staff, and start registering patients. Setup takes less than 10 minutes.",
    },
  ];

  const toggleFaq = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-200 via-white to-teal-50 pt-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            Got questions about Medicare? Dive into our answers to learn about
            our cutting-edge features, robust security, and seamless healthcare
            solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid gap-6 px-4">
          {faqs.map((data, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div
                onClick={() => toggleFaq(i)}
                className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-indigo-50 to-teal-50 hover:from-indigo-100 hover:to-teal-100 transition-colors duration-200"
              >
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  {data.question}
                </h4>
                <span
                  className={`p-2 rounded-full bg-white shadow-md text-teal-600 transition-transform duration-300 ${
                    isActive === i ? "rotate-180" : ""
                  }`}
                >
                  <MdOutlineKeyboardArrowDown size={28} />
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive === i
                    ? "max-h-96 opacity-100 p-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {data.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section - Full Width */}
      <div className=" bg-gradient-to-r from-indigo-600 to-teal-500 py-12 px-4 md:px-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Didn’t find the answers you were looking for? Contact our customer
            support.
          </h1>
          <div className="hidden md:block h-12 w-1 bg-white/30 rounded"></div>
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
              We aim to respond to your query within 24 hours
            </h2>
            <button className="bg-white rounded-4xl px-4 py-3 text-indigo-500 font-bold text-xl hover:scale-105 hover:shadow-2xl transition-transform">
              Contact Us Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
