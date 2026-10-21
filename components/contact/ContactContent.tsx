'use client';
import { useForm, type SubmitHandler } from 'react-hook-form';
import MagneticButton from '@/components/common/MagneticButton';
import { useRef, useState } from 'react';
import { web3apikey } from '@/app/constants/data';
import { trackPortfolioEvent } from '@/lib/ferno';

type ContactFormValues = {
    name: string;
    email: string;
    message: string;
};

type Feedback = { type: 'success' | 'error'; message: string };

export default function ContactContent() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const hasStarted = useRef(false);

    const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
        trackPortfolioEvent('Contact Form Submitted');
        setFeedback(null);

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

            if (response.ok && result.success === true) {
                setFeedback({ type: 'success', message: 'Message sent. I’ll be in touch soon.' });
                trackPortfolioEvent('Contact Form Succeeded');
                reset();
            } else {
                setFeedback({ type: 'error', message: 'Couldn’t send your message. Please try again.' });
                trackPortfolioEvent('Contact Form Failed');
            }
        } catch {
            setFeedback({ type: 'error', message: 'Couldn’t send your message. Please try again.' });
            trackPortfolioEvent('Contact Form Failed');
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
                    <form
                        data-ph-mask
                        noValidate
                        aria-busy={isSubmitting}
                        onSubmit={handleSubmit(onSubmit, () => {
                            setFeedback({ type: 'error', message: 'Please fix the highlighted fields.' });
                        })}
                        onChangeCapture={() => {
                            if (feedback) setFeedback(null);
                        }}
                        onFocusCapture={(event) => {
                            if (hasStarted.current || !event.target.matches('input, textarea, select')) return;
                            hasStarted.current = true;
                            trackPortfolioEvent('Contact Form Started');
                        }}
                        className="space-y-12"
                    >
                        <div className="group relative">
                            <label htmlFor="contact-name" className="text-gray-400 text-sm uppercase ml-4">What&apos;s your name?</label>
                            <input
                                id="contact-name"
                                type="text"
                                autoComplete="name"
                                aria-invalid={Boolean(errors.name)}
                                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                {...register('name', {
                                    setValueAs: (value: string) => value.trim(),
                                    required: 'Enter your name.',
                                    maxLength: { value: 100, message: 'Keep your name under 100 characters.' },
                                })}
                                className={`w-full bg-transparent border-b py-4 px-4 text-2xl text-white focus:outline-none transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-600 focus:border-white'}`}
                                placeholder="John Doe *"
                            />
                            {errors.name && <p id="contact-name-error" className="mt-2 ml-4 text-sm text-red-300">{errors.name.message}</p>}
                        </div>

                        <div className="group relative">
                            <label htmlFor="contact-email" className="text-gray-400 text-sm uppercase ml-4">What&apos;s your email?</label>
                            <input
                                id="contact-email"
                                type="email"
                                autoComplete="email"
                                inputMode="email"
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                {...register('email', {
                                    setValueAs: (value: string) => value.trim(),
                                    required: 'Enter your email address.',
                                    maxLength: { value: 254, message: 'Keep your email under 254 characters.' },
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
                                })}
                                className={`w-full bg-transparent border-b py-4 px-4 text-2xl text-white focus:outline-none transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-600 focus:border-white'}`}
                                placeholder="john@doe.com *"
                            />
                            {errors.email && <p id="contact-email-error" className="mt-2 ml-4 text-sm text-red-300">{errors.email.message}</p>}
                        </div>

                        <div className="group relative">
                            <label htmlFor="contact-message" className="text-gray-400 text-sm uppercase ml-4">Your message</label>
                            <textarea
                                id="contact-message"
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                {...register('message', {
                                    setValueAs: (value: string) => value.trim(),
                                    required: 'Write a message.',
                                    minLength: { value: 10, message: 'Write at least 10 characters.' },
                                    maxLength: { value: 5000, message: 'Keep your message under 5,000 characters.' },
                                })}
                                rows={4}
                                className={`w-full bg-transparent border-b py-4 px-4 text-2xl text-white focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-600 focus:border-white'}`}
                                placeholder="Hello Fiyin, can you help me with... *"
                            />
                            {errors.message && <p id="contact-message-error" className="mt-2 ml-4 text-sm text-red-300">{errors.message.message}</p>}
                        </div>

                        <div className="pt-10">
                            <MagneticButton>
                                <button type="submit" disabled={isSubmitting} className="w-40 h-40 rounded-full bg-white text-black text-lg font-medium flex items-center justify-center hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
                                    {isSubmitting ? 'Sending…' : 'Send it'}
                                </button>
                            </MagneticButton>
                            {feedback && (
                                <p role={feedback.type === 'error' ? 'alert' : 'status'} className={`mt-6 text-sm ${feedback.type === 'error' ? 'text-red-300' : 'text-white'}`}>
                                    {feedback.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
