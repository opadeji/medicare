import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuCircleCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../assets/Loogo.png";

const Signup = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalEmail: "",
    careType: "",
    numPractitioners: "",
    address: "",
    state: "",
    adminName: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = () => {
    const currentFields = signupSteps[step].fields;
    const newErrors = {};
    currentFields.forEach((field) => {
      const value = formData[field.name];
      if (field.type === "select") {
        if (!value) {
          newErrors[field.name] = "This field is required";
        }
      } else {
        if (!value.trim()) {
          newErrors[field.name] = "This field is required";
        }
      }
    });

    if (step === 2) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signupSteps = [
    {
      id: 1,
      title: "Hospital Information",
      fields: [
        {
          label: "Hospital Name",
          name: "hospitalName",
          type: "text",
          placeholder: "e.g. City General Hospital",
        },
        {
          label: "Hospital Email",
          name: "hospitalEmail",
          type: "email",
          placeholder: "hospital@example.com",
        },
        {
          label: "Type of Care Provided",
          name: "careType",
          type: "select",
          options: [
            { value: "", label: "Select type of care..." },
            { value: "general", label: "General Care" },
            { value: "specialty", label: "Specialty Care" },
            { value: "emergency", label: "Emergency Services" },
            { value: "pediatric", label: "Pediatric Care" },
            { value: "surgical", label: "Surgical Services" },
            { value: "other", label: "Other" },
          ],
        },
        {
          label: "Number of Practitioners",
          name: "numPractitioners",
          type: "select",
          options: [
            { value: "", label: "Select range..." },
            { value: "1-10", label: "1-10" },
            { value: "11-50", label: "11-50" },
            { value: "51-100", label: "51-100" },
            { value: "101-500", label: "101-500" },
            { value: "501+", label: "501+" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Location Details",
      fields: [
        {
          label: "Hospital Address",
          name: "address",
          type: "text",
          placeholder: "123 Health St, Medical District",
        },
        {
          label: "State",
          name: "state",
          type: "text",
          placeholder: "e.g. California",
        },
      ],
    },
    {
      id: 3,
      title: "Admin Account Setup",
      fields: [
        {
          label: "Admin Full Name",
          name: "adminName",
          type: "text",
          placeholder: "John Doe",
        },
        {
          label: "Admin Email",
          name: "adminEmail",
          type: "email",
          placeholder: "admin@example.com",
        },
        {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "Create a strong password",
        },
        {
          label: "Confirm Password",
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm your password",
        },
      ],
    },
    {
      id: 4,
      title: "Review & Confirm",
      fields: [],
      summary: "Review your hospital details before finalizing your account.",
    },
  ];

  const currentStep = signupSteps[step];
  const progress = ((step + 1) / signupSteps.length) * 100;

  const nextStep = () => {
    if (validateStep() && step < signupSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleFinish = () => {
    if (validateStep()) {
      console.log("Form submitted:", formData);
      alert("Signup complete! Check console for data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex flex-col">
      {/* Header with Logo */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-10">
            {signupSteps.map((s, index) => (
              <div key={s.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                    index < step
                      ? "bg-green-500 text-white"
                      : index === step
                      ? "bg-blue-600 text-white ring-4 ring-blue-100"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < step ? (
                    <LuCircleCheck className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < signupSteps.length - 1 && (
                  <div
                    className={`w-full h-1 mx-2 transition-all duration-500 ${
                      index < step ? "bg-green-500" : "bg-gray-200"
                    }`}
                    style={{ width: "60px" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentStep.title}
            </h2>
            <p className="text-gray-500 mb-8">
              Step {step + 1} of {signupSteps.length}
            </p>

            {/* Form Fields */}
            <div className="space-y-6">
              {currentStep.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 text-gray-900 bg-white ${
                        errors[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 text-gray-900 ${
                        errors[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {currentStep.summary && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-4">
                  <p className="text-blue-800 text-sm font-medium">
                    {currentStep.summary}
                  </p>
                  <div className="text-gray-700 text-sm">
                    <p>
                      <strong>Hospital Name:</strong>{" "}
                      {formData.hospitalName || "Not provided"}
                    </p>
                    <p>
                      <strong>Hospital Email:</strong>{" "}
                      {formData.hospitalEmail || "Not provided"}
                    </p>
                    <p>
                      <strong>Type of Care:</strong>{" "}
                      {formData.careType || "Not selected"}
                    </p>
                    <p>
                      <strong>Number of Practitioners:</strong>{" "}
                      {formData.numPractitioners || "Not selected"}
                    </p>
                    <p>
                      <strong>Address:</strong>{" "}
                      {formData.address || "Not provided"}
                    </p>
                    <p>
                      <strong>State:</strong> {formData.state || "Not provided"}
                    </p>
                    <p>
                      <strong>Admin Name:</strong>{" "}
                      {formData.adminName || "Not provided"}
                    </p>
                    <p>
                      <strong>Admin Email:</strong>{" "}
                      {formData.adminEmail || "Not provided"}
                    </p>
                    <p>
                      <strong>Password:</strong>{" "}
                      {formData.password ? "********" : "Not provided"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-10 mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">
                {Math.round(progress)}% Complete
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  step === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <LuChevronLeft className="w-5 h-5" />
                Back
              </button>

              {step < signupSteps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Next
                  <LuChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <LuCircleCheck className="w-5 h-5" />
                  Finish Signup
                </button>
              )}
            </div>
          </div>
          <p className="text-center mt-5 text-sm font-semibold">
            Already have an acccount?{" "}
            <span className="underline underline-offset-2 font-bold text-lg ">
              <Link to={"/login"}> Log in</Link>
            </span>
          </p>
          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
