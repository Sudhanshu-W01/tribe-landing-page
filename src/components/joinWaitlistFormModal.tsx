"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface JoinWaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  emailFromFooter?: string;
}

export default function JoinWaitlistModal({
  isOpen,
  setIsOpen,
  emailFromFooter,
}: JoinWaitlistModalProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullname: "",
    role: "",
    collegeName: "",
    email: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const roles = ["Student", "Builder", "Other"];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (formData.role === "Student") {
      if (!formData.collegeName.trim())
        newErrors.collegeName = "College name is required";
    }
    const emailToValidate = emailFromFooter ?? formData.email;

    if (!emailToValidate.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(emailToValidate)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_JOIN_WAITLIST_BACKEND_URL}/api/waitlist/join`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            email: emailFromFooter ?? formData.email,
          }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.message || "Something went wrong");
        return;
      }

      setFormData({ fullname: "", role: "", collegeName: "", email: "" });
      toast.success("You've successfully joined the waitlist!");
      setIsOpen(false);
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRoleSelect = (role: string) => {
    setFormData({ ...formData, role });
    setErrors({ ...errors, role: "" });
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setFormData({ fullname: "", role: "", collegeName: "", email: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div
        className="bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] w-full max-w-md rounded-xl border-2 border-[#31373F]"
        // style={{ boxShadow: "0 2px 5px 1px #b0e681" }}
      >
        <div className="bg-black  w-full max-w-md rounded-xl p-12 shadow-lg relative font-mulish opacity-[0.92]">
          <button
            onClick={handleClose}
            disabled={submitting}
            className="absolute top-3 right-3 text-gray-500 hover:brightness-125 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-[#b0e681] font-nohemi500">
            Join the Waitlist
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block mb-1 font-medium font-mulish">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border-2 bg-[#000] border-[#768293] placeholder:text-[#768293] rounded-xl px-3 py-2 outline-none "
              />
              {errors.fullname && (
                <p className="text-red-400 text-sm">{errors.fullname}</p>
              )}
            </div>

            <div className="mb-4  overflow-hidden" ref={dropdownRef}>
              <label className="block mb-1 font-medium font-mulish">Role</label>
              <div
                className="relative  w-full rounded-xl px-3 py-2 border-2 bg-[#000] border-[#768293] cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span
                  className={`${
                    formData.role ? "text-white" : "text-gray-600"
                  }`}
                >
                  {formData.role || "Select your role"}
                </span>
                <div className="absolute right-3 top-2.5 text-gray-400">
                  &#9662;
                </div>
              </div>

              {dropdownOpen && (
                <div className="absolute border-2 bg-[#000] border-[#768293] w-full mt-1  rounded-xl shadow z-10 ">
                  {roles.map((role) => (
                    <div
                      key={role}
                      onClick={() => handleRoleSelect(role)}
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-xl"
                    >
                      {role}
                    </div>
                  ))}
                </div>
              )}
              {errors.role && (
                <p className="text-red-400 text-sm">{errors.role}</p>
              )}
            </div>

            {formData.role === "Student" && (
              <div className="mb-4">
                <label className="block mb-1 font-medium">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="College/University Name"
                  className="w-full  rounded-xl px-3 py-2 outline-none  border-2 bg-[#000] border-[#768293] placeholder:text-gray-600"
                />
                {errors.collegeName && (
                  <p className="text-red-400 text-sm">{errors.collegeName}</p>
                )}
              </div>
            )}

            <div className="mb-6">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={
                  emailFromFooter !== undefined
                    ? emailFromFooter
                    : formData.email
                }
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="w-full  rounded-xl px-3 py-2 outline-none border-2 bg-[#000] border-[#768293] placeholder:text-gray-600"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#b0e681] text-black py-2 rounded-xl hover:brightness-125 text-lg font-medium "
            >
              {submitting ? "Joining..." : "Join"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
