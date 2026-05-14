import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/contact",
        formData
      );

      toast.success(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16"
    >
      <div className="max-w-3xl mx-auto card p-10 rounded-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mb-8">
          Have a project or opportunity? Send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}