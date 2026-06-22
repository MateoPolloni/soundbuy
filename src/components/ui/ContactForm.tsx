'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center animate-fade-in">
        <div className="font-display font-extrabold gradient-text text-2xl mb-2">Message sent</div>
        <p className="text-sm text-[#8080a8]">
          Thanks, {name.split(' ')[0]}. We typically respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-input"
        />
      </div>

      <select
        value={subject}
        onChange={e => setSubject(e.target.value)}
        className="form-input cursor-pointer"
      >
        <option>General Inquiry</option>
        <option>Licensing Question</option>
        <option>Producer Application Support</option>
        <option>Billing & Payments</option>
        <option>Report an Issue</option>
      </select>

      <textarea
        required
        rows={5}
        placeholder="Your message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="form-input resize-none"
      />

      <button type="submit" className="btn-primary w-full justify-center">
        Send Message
      </button>
    </form>
  );
}
