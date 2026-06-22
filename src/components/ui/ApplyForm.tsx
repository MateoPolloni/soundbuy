'use client';

import { useState } from 'react';

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center animate-fade-in">
        <div className="font-display font-extrabold gradient-text text-2xl mb-2">Application received</div>
        <p className="text-sm text-[#8080a8]">
          We&apos;ll review your submission, {name.split(' ')[0]}, and follow up within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full bg-[#0c0c16] border border-[rgba(124,58,237,0.18)] text-[#eeeeff] px-4 py-3.5 text-sm focus:outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors placeholder-[#48486a]"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-[#0c0c16] border border-[rgba(124,58,237,0.18)] text-[#eeeeff] px-4 py-3.5 text-sm focus:outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors placeholder-[#48486a]"
      />
      <input
        type="text"
        required
        placeholder="Primary genre"
        value={genre}
        onChange={e => setGenre(e.target.value)}
        className="w-full bg-[#0c0c16] border border-[rgba(124,58,237,0.18)] text-[#eeeeff] px-4 py-3.5 text-sm focus:outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors placeholder-[#48486a]"
      />
      <button type="submit" className="btn-primary w-full justify-center">
        Submit Application
      </button>
    </form>
  );
}
