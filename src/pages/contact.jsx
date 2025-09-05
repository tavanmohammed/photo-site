import React, { useState } from "react";
import emailjs from "emailjs-com"; // ✅ import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    occasion: "",
    occasionDate: "",
    weddingVenueBooked: "",
    photoshootLocation: "",
    notes: "",
    newsletter: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const templateParams = {
    fullName: formData.fullName,
    partnerName: formData.partnerName,
    email: formData.email,
    phone: formData.phone,
    occasion: formData.occasion,
    occasionDate: formData.occasionDate,
    weddingVenueBooked: formData.weddingVenueBooked,
    photoshootLocation: formData.photoshootLocation,
    notes: formData.notes,
    newsletter: formData.newsletter ? "Yes" : "No",
  };

  emailjs
    .send(
      "service_duw216a",      // your Service ID
      "template_89ci0cj",    // 🔹 replace with your ADMIN template ID
      templateParams,
      "WmfVTgt2N8Q-uuQWU"     // your Public Key
    )
    .then(
      () => {
        console.log("✅ Sent to Admin");
      },
      (error) => {
        console.error("❌ Admin email error:", error.text);
      }
    );
    // ✅ Send auto-reply to customer
emailjs
.send(
  "service_duw216a",    // Service ID
  "template_68cbx2m",   // Auto-reply template ID
  templateParams,       // ✅ use mapped params here too
  "WmfVTgt2N8Q-uuQWU"   // Public Key
)
.then(
  () => {
    setIsSubmitted(true); 
  },
  (error) => {
    console.error("EmailJS error:", error.text);
    alert("❌ Something went wrong. Please try again.");
  }
);

  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero background */}
      <div
        className="h-[50vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/unnamed.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          {!isSubmitted ? (
            <h1 className="text-5xl font-philosopher drop-shadow-lg">
              CONTACT US
            </h1>
          ) : (
            <h1 className="text-3xl md:text-4xl font-philosopher drop-shadow-lg">
              ✅ Thank you for contacting us! <br /> Our team will reach out as
              soon as possible.
            </h1>
          )}
        </div>
      </div>

      {/* Show form only if NOT submitted */}
      {!isSubmitted && (
        <section className="bg-white px-6 py-16 md:px-24 flex-1">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-8 text-gray-700"
          >
            <input
              type="text"
              name="fullName"
              placeholder="YOUR FULL NAME"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            />

            <input
              type="text"
              name="partnerName"
              placeholder="YOUR PARTNER'S NAME"
              value={formData.partnerName}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL ADDRESS"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            />

            <input
              type="tel"
              name="phone"
              placeholder="YOUR PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            />

            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            >
              <option value="">SELECT OCCASION</option>
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Birthday</option>
              <option>Fashion</option>
              <option>Gender Reveal</option>
              <option>Other</option>
            </select>

            <div>
              <label className="block text-sm font-medium mb-2">
                When is the date of your occasion?
              </label>
              <input
                type="date"
                name="occasionDate"
                value={formData.occasionDate}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Did you book a wedding venue?
              </label>
              <select
                name="weddingVenueBooked"
                value={formData.weddingVenueBooked}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Where is the location of the photoshoot?
              </label>
              <input
                type="text"
                name="photoshootLocation"
                placeholder="Photoshoot Location"
                value={formData.photoshootLocation}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
              />
            </div>

            <textarea
              name="notes"
              placeholder="ANYTHING ELSE YOU'D LIKE US TO KNOW?"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-3 bg-transparent"
            />

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-4 w-4 border-gray-400 rounded"
              />
              <label className="text-sm text-gray-600">
                SIGN ME UP FOR THE NEWSLETTER!
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 tracking-widest uppercase hover:bg-gray-800 transition"
            >
              SEND MESSAGE ✨
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Contact;
