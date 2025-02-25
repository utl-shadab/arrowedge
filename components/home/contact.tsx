import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { MENULINKS } from "../../constants";
import { toast } from "react-hot-toast";

const interestsList = [
  "Web Design",
  "Brand Design",
  "UI/UX",
  "Digital Marketing",
  "App Development",
  "Other",
];

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    source: "",
    budget: "",
    message: "",  // Added message field
    interests: new Set<string>(),
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const newInterests = new Set(prev.interests);
      newInterests.has(interest)
        ? newInterests.delete(interest)
        : newInterests.add(interest);
      return { ...prev, interests: newInterests };
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile is required";
    if (formData.mobile.length < 10)
      newErrors.mobile = "Mobile must be exactly 10 digits";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.message) newErrors.message = "Message is required";  // Validation for message
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interests: Array.from(formData.interests),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Your message has been sent!", { position: "bottom-right" });
        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          source: "",
          budget: "",
          message: "",
          interests: new Set<string>(),
        });
      } else {
        toast.error(data.message, { position: "bottom-right" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  const { ref: footerRef } = MENULINKS[4];

  return (
    <section
      className="w-full py-24 flex flex-col items-center px-4 md:px-8 lg:px-16 bg-white text-black"
      id={footerRef}
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        Let’s Build a Project Together
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-4xl w-full flex flex-wrap gap-6"
        autoComplete="off"
      >
        {[ 
          { label: "Your Name*", name: "name", type: "text" },
          { label: "Company Name", name: "company", type: "text" },
          { label: "Your E-mail*", name: "email", type: "email" },
          { label: "Your Mobile*", name: "mobile", type: "tel", pattern: "[0-9]{10}" },
          { label: "Your Budget*", name: "budget", type: "text" },
        ].map(({ label, name, type, pattern }) => (
          <div key={name} className="w-full md:w-[48%] flex flex-col text-black">
            <label className="text-sm font-medium">{label}</label>
            <input
              className="border-black border-b p-2 outline-none bg-transparent text-black"
              type={type}
              name={name}
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
              pattern={pattern}
              autoComplete="off"
            />
            {errors[name] && (
              <p className="text-red-600 text-xs mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div className="w-full">
          <label className="text-sm font-medium">I’m Interested in ...</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {interestsList.map((interest) => (
              <label key={interest} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={formData.interests.has(interest)}
                  onChange={() => toggleInterest(interest)}
                  autoComplete="off"
                />
                <span className="rounded-md transition peer-checked:text-red-600 peer-checked:underline">
                  {interest}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Textarea Field */}
        <div className="w-full flex flex-col text-black mt-6">
          <label className="text-sm font-medium">Your Message*</label>
          <textarea
            className="border-black border-b p-2 outline-none bg-transparent text-black h-24 resize-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project..."
            autoComplete="off"
          />
          {errors.message && (
            <p className="text-red-600 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
