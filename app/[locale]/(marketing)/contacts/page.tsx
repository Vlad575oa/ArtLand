'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [budget, setBudget] = useState('')

    return (
        <div className="bg-contact-background text-[#f0f2ef] font-display antialiased leading-relaxed min-h-screen relative overflow-x-hidden bg-grain-texture">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-contact-secondary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-black/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-7 flex flex-col gap-10">
                    <div className="space-y-4 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <span className="inline-block py-1 px-3 rounded-full bg-contact-primary/10 text-contact-primary text-xs font-bold tracking-widest uppercase border border-contact-primary/20 shadow-sm">
                            Inquire
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#f0f2ef] tracking-tight leading-[1.1]">
                            Let's Cultivate Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-contact-primary to-[#dccbb5]">Living Space</span>
                        </h1>
                        <p className="text-lg text-contact-muted max-w-xl leading-relaxed">
                            Connect with our principal architects to discuss your vision for a sustainable, luxury outdoor living space. We bridge nature and modern architecture.
                        </p>
                    </div>

                    <form className="bg-contact-surface/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-contact-convex border border-white/5 space-y-8 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-contact-primary/5 rounded-full blur-3xl transition-opacity duration-700 opacity-30 group-hover:opacity-60 pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-contact-secondary ml-4">Full Name</label>
                                <input
                                    className="w-full bg-contact-surface border-none text-text-main placeholder-[#3d5246]/70 rounded-full py-4 px-6 shadow-contact-concave focus:ring-1 focus:ring-contact-primary/30 outline-none transition-all"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-contact-secondary ml-4">Email Address</label>
                                <input
                                    className="w-full bg-contact-surface border-none text-text-main placeholder-[#3d5246]/70 rounded-full py-4 px-6 shadow-contact-concave focus:ring-1 focus:ring-contact-primary/30 outline-none transition-all"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-contact-secondary ml-4">Project Location</label>
                                <input
                                    className="w-full bg-contact-surface border-none text-text-main placeholder-[#3d5246]/70 rounded-full py-4 px-6 shadow-contact-concave focus:ring-1 focus:ring-contact-primary/30 outline-none transition-all"
                                    placeholder="City, Country"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-contact-secondary ml-4">Estimated Budget</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-contact-surface border-none text-text-main rounded-full py-4 px-6 shadow-contact-concave appearance-none focus:ring-1 focus:ring-contact-primary/30 outline-none cursor-pointer"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    >
                                        <option value="">Select Range...</option>
                                        <option value="50-100">$50k - $100k</option>
                                        <option value="100-250">$100k - $250k</option>
                                        <option value="250-500">$250k - $500k</option>
                                        <option value="500+">$500k+</option>
                                    </select>
                                    <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-contact-secondary pointer-events-none text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-contact-secondary ml-4">Project Vision</label>
                            <textarea
                                className="w-full bg-contact-surface border-none text-text-main placeholder-[#3d5246]/70 rounded-[2rem] py-4 px-6 shadow-contact-concave focus:ring-1 focus:ring-contact-primary/30 resize-none outline-none transition-all"
                                placeholder="Tell us about your space and dreams..."
                                rows={4}
                            ></textarea>
                        </div>

                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-xs text-contact-muted max-w-xs text-center md:text-left leading-relaxed">By submitting this form, you agree to our privacy policy regarding your personal data.</p>
                            <button className="bg-gradient-to-br from-[#dccbb5] to-[#c2a77f] hover:to-[#d2b48c] text-contact-surface font-extrabold py-4 px-10 rounded-full shadow-contact-convex-sand active:shadow-contact-concave active:scale-95 transform transition-all duration-300 flex items-center gap-3 group border border-white/10" type="submit">
                                Send Inquiry
                                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
                    <div className="grid gap-6">
                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-start gap-5 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#3d5246] to-contact-background shadow-contact-convex flex items-center justify-center text-contact-primary group-hover:text-[#dccbb5] transition-colors">
                                <span className="material-icons">business</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[#f0f2ef] font-bold text-lg mb-1">The Studio</h3>
                                <p className="text-contact-muted text-sm leading-relaxed">
                                    1200 Greenway Blvd, Suite 400<br />
                                    Portland, OR 97205
                                </p>
                            </div>
                        </div>

                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-start gap-5 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#3d5246] to-contact-background shadow-contact-convex flex items-center justify-center text-contact-primary group-hover:text-[#dccbb5] transition-colors">
                                <span className="material-icons">phone_in_talk</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[#f0f2ef] font-bold text-lg mb-1">Direct Line</h3>
                                <p className="text-contact-muted text-sm leading-relaxed mb-2">
                                    For immediate architectural inquiries.
                                </p>
                                <a className="block text-[#f0f2ef] font-medium hover:text-contact-primary transition-colors" href="tel:+15550912244">+1 (555) 091-2244</a>
                                <a className="block text-contact-primary text-sm mt-1 hover:text-[#dccbb5] transition-colors" href="mailto:studio@landscape-architects.com">studio@landscape-architects.com</a>
                            </div>
                        </div>

                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-center justify-between border border-white/5">
                            <span className="text-sm font-semibold text-contact-muted uppercase tracking-widest pl-2">Follow Us</span>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-full bg-contact-background shadow-contact-convex flex items-center justify-center text-contact-secondary hover:text-contact-primary hover:scale-110 transition-all duration-300" href="#">
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v-.002zm0 1.8c-2.637 0-2.974.01-4.022.058-1.05.048-1.62.224-2.002.372a3.11 3.11 0 00-1.127.732 3.11 3.11 0 00-.732 1.127c-.148.382-.325.952-.372 2.002-.048 1.048-.058 1.385-.058 4.022 0 2.637.01 2.974.058 4.022.048 1.05.224 1.62.372 2.002.345.886.966 1.507 1.853 1.853.382.148.952.325 2.002.372 1.048.048 1.385.058 4.022.058 2.637 0 2.974-.01 4.022-.058 1.05-.048 1.62-.224 2.002-.372a3.11 3.11 0 001.127-.732 3.11 3.11 0 00.732-1.127c.148-.382.325-.952.372-2.002.048-1.048.058-1.385.058-4.022 0-2.637-.01-2.974-.058-4.022-.048-1.05-.224-1.62-.372-2.002a3.11 3.11 0 00-.732-1.127 3.11 3.11 0 00-1.127-.732c-.382-.148-.952-.325-2.002-.372-1.049-.048-1.386-.058-4.023-.058zm0 4.414a5.386 5.386 0 100 10.772 5.386 5.386 0 000-10.772zm0 8.973a3.587 3.587 0 110-7.174 3.587 3.587 0 010 7.174zm5.275-9.35a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
                                </a>
                                <a className="w-10 h-10 rounded-full bg-contact-background shadow-contact-convex flex items-center justify-center text-contact-secondary hover:text-contact-primary hover:scale-110 transition-all duration-300" href="#">
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-contact-convex border border-white/5 map-grayscale-filter group">
                        <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl"></div>
                        <div className="absolute inset-0 bg-contact-primary/5 z-10 pointer-events-none mix-blend-overlay"></div>
                        <iframe
                            allowFullScreen
                            className="w-full h-full grayscale"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357597.0223594193!2d-122.9231804473872!3d45.542241511210156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1684346765000!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            title="Office Location Map"
                        ></iframe>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20">
                            <div className="relative">
                                <span className="w-4 h-4 bg-contact-primary rounded-full block animate-ping absolute"></span>
                                <span className="w-4 h-4 bg-contact-primary rounded-full block relative shadow-[0_0_15px_#d2b48c]"></span>
                                <div className="w-0.5 h-8 bg-gradient-to-t from-transparent to-contact-primary mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
