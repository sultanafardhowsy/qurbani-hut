'use client';

import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);

    alert("Booking submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
   <div className='container mx-auto bg-[#C9A227] h-[80vh] flex justify-center items-center px-4 mt-10'>
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Booking Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                name="address"
                placeholder="Enter your address"
                className="textarea textarea-bordered w-full"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="btn bg-[#C9A227]"
              >
                Submit Booking
              </button>

              <button
                type="reset"
                className="btn btn-outline flex-1"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                  })
                }
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}