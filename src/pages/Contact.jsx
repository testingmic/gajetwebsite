import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Building & Roads Construction',
  'Mining Services',
  'Logistics Services',
  'Commodities Trading',
  'General Enquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to discuss your next project or explore a partnership? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reach out to us through any of these channels and we&apos;ll respond as quickly as possible.
                </p>
              </div>

              {[
                {
                  icon: MapPin,
                  title: 'Our Location',
                  lines: ['Gajet Resources International Limited', 'Ghana, West Africa'],
                },
                {
                  icon: Phone,
                  title: 'Phone Number',
                  lines: ['+233 (0) 000 000 000', '+233 (0) 000 000 001'],
                },
                {
                  icon: Mail,
                  title: 'Email Address',
                  lines: ['info@gajetresources.com', 'projects@gajetresources.com'],
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
                },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-1">{title}</p>
                    {lines.map(l => (
                      <p key={l} className="text-gray-500 text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-900">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. Our team will review your enquiry and get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',service:'',message:'' }); }}
                    className="btn-primary mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-navy-900 mb-1">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-7">Fill out the form below and we&apos;ll be in touch shortly.</p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text" name="name" value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Phone Number</label>
                        <input
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange}
                          placeholder="+233 00 000 0000"
                          className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Company / Organisation</label>
                        <input
                          type="text" name="company" value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1.5">Service of Interest</label>
                      <select
                        name="service" value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors text-gray-700"
                      >
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message" value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project or enquiry…"
                        className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3">
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-navy-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="text-navy-400 mx-auto mb-3" />
            <p className="text-navy-600 font-semibold">Gajet Resources International Limited</p>
            <p className="text-navy-500 text-sm">Ghana, West Africa</p>
          </div>
        </div>
        {/* Grid lines to suggest map */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1d4080" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </section>
    </main>
  );
}
