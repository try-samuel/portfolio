'use client';
import { useForm } from 'react-hook-form';
import MagneticButton from '@/components/common/MagneticButton';
import { useState } from 'react';
import { web3apikey } from '../constants/data';

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('');

  const onSubmit = async (data: any) => {
    setStatus('Sending...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: web3apikey,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Message Sent!');
        reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Error. Try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('Error. Try again.');
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#1C1D20] text-white pt-32 px-4 sm:px-10 pb-20">
      {/* HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT COLUMN: Info */}
        <div>
          <h1 className="text-6xl md:text-8xl font-medium mb-10 tracking-tighter">
            Let&apos;s start <br /> a project
          </h1>
          <div className="space-y-4 text-gray-400 text-xl">
            <p>hello@fiyin.ng</p>
            <p>+234 815 281 9194</p>
            <p className="mt-10 text-sm uppercase tracking-widest text-gray-500">Socials</p>
            <div className="flex gap-6 text-white">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="relative z-10 mt-10 lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="group relative">
              <label className="text-gray-500 text-sm uppercase ml-4">What&apos;s your name?</label>
              <input
                {...register("name")}
                className="w-full bg-transparent border-b border-gray-600 py-4 px-4 text-2xl text-white focus:outline-none focus:border-white transition-colors"
                placeholder="John Doe *"
              />
            </div>

            <div className="group relative">
              <label className="text-gray-500 text-sm uppercase ml-4">What&apos;s your email?</label>
              <input
                {...register("email")}
                className="w-full bg-transparent border-b border-gray-600 py-4 px-4 text-2xl text-white focus:outline-none focus:border-white transition-colors"
                placeholder="john@doe.com *"
              />
            </div>

            <div className="group relative">
              <label className="text-gray-500 text-sm uppercase ml-4">Your message</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-transparent border-b border-gray-600 py-4 px-4 text-2xl text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Hello Fiyin, can you help me with... *"
              />
            </div>

            <div className="pt-10">
              <MagneticButton>
                <button className="w-40 h-40 rounded-full bg-white text-black text-lg font-medium flex items-center justify-center hover:bg-gray-200 transition-colors">
                  {status || "Send it"}
                </button>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
