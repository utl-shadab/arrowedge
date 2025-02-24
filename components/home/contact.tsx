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
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    source: "",
    budget: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    if (!formData.budget) newErrors.budget = "Budget is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interests: Array.from(formData.interests), // Convert Set to Array
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
          interests: new Set<string>(),
        });
      } else {
        toast.error(data.message, { position: "bottom-right" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { position: "bottom-right" });
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
          { label: "Your Mobile*", name: "mobile", type: "tel" },
          { label: "Your Budget*", name: "budget", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="w-full md:w-[48%] flex flex-col text-black">
            <label className="text-sm font-medium">{label}</label>
            <input
              className="border-black border-b p-2 outline-none bg-transparent text-black"
              type={type}
              name={name}
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
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

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
