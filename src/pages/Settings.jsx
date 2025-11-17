import React, { useState } from "react";

function SettingsUI() {
  // 🧩 State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    accountType: "",
  });

  // 🧩 State for errors
  const [errors, setErrors] = useState({});

  // 🧩 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🧩 Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.accountType.trim()) newErrors.accountType = "Account type is required";

    return newErrors;
  };

  // 🧩 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully ✅");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white justify-center">
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">Settings</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-md max-w-3xl"
        >
          {/* Profile Photo */}
          <div className="flex items-center space-x-8 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-gray-600 flex items-center justify-center bg-gray-700">
              <span className="text-gray-300 text-sm text-center">
                Click to change photo
              </span>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-400">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-gray-400">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="mt-6">
            <label className="block mb-2 text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Account Type Field */}
          <div className="mt-6">
            <label className="block mb-2 text-gray-400">Account Type</label>
            <input
              type="text"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              placeholder="Enter account type (e.g. Doctor)"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none"
            />
            {errors.accountType && (
              <p className="text-red-500 text-sm mt-1">{errors.accountType}</p>
            )}
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
          >
            SAVE NEW CHANGES
          </button>
        </form>
      </main>
    </div>
  );
}

export default SettingsUI;
