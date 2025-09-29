import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, X } from "lucide-react";

// Define validation schema with Zod
const waitlistSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistModalProps {
  onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (data: { fullName: string; email: string }) => {
    try {
      setIsLoading(true);

      const res = await fetch(
        "https://husridge-server.onrender.com/api/waitlist/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            fullName: data.fullName,
          }),
        },
      );

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      const resData = await res.json();
      console.log(resData);
      setIsSuccess(true);
    } catch (e: unknown) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div
        className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="bg-white rounded-4xl p-6 md:p-12 pt-12 max-w-[600px] w-[90vw] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-transparent border-none text-3xl cursor-pointer"
          aria-label="Close"
        >
          <X />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="mb-4 flex items-center justify-center">
              <CircleCheck className="text-green-500 size-20" />
            </div>
            <h2 className="font-bold text-xl md:text-3xl mb-3 text-green-600">
              You are in!
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Thank you for joining! We&apos;ll notify you as soon as Husridge
              launches.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-[40px] bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-center font-bold text-xl md:text-3xl mb-3">
              Join Our Waitlist
            </h2>
            <p className="text-center text-lg md:text-xl mb-8">
              Be the first to know when Husridge goes live—join the waitlist
              today!
            </p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block font-medium text-lg md:text-2xl mb-2">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                className={`w-full p-2 md"py-5 md:px-5 rounded-full border-[1.5px] text-md md:text-xl mb-2 outline-none ${
                  errors.fullName ? "border-red-500" : "border-[#D1D9E6]"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mb-4 pl-5">
                  {errors.fullName.message}
                </p>
              )}

              <label className="block font-medium text-lg md:text-2xl mb-2 mt-4">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                className={`w-full p-2 md"py-5 md:px-5 rounded-full border-[1.5px] text-md md:text-xl mb-2 outline-none ${
                  errors.email ? "border-red-500" : "border-[#D1D9E6]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-4 pl-5">
                  {errors.email.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 rounded-[40px] bg-black text-[#FFC700] font-semibold text-2xl border-none cursor-pointer mt-6 disabled:opacity-70"
              >
                {isLoading ? "Submitting..." : "Save"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
