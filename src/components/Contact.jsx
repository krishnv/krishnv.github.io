import { useState } from 'react'

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function ContactForm({ formspreeId, email }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      // Fallback: open mailto with form data pre-filled
      const subject = encodeURIComponent(`Message from ${form.name}`)
      const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      setStatus('idle')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-gray-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-2">✓</p>
        <p className="text-gray-800 font-medium">Message sent!</p>
        <p className="text-sm text-gray-500 mt-1">I'll get back to you soon.</p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
          className="mt-4 text-xs text-gray-500 hover:text-gray-800 underline underline-offset-2"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-600">Something went wrong. Try emailing directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-5 py-2.5 bg-gray-950 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {!formspreeId && (
        <p className="text-xs text-gray-400">
          (Opens your email client — add a Formspree ID in portfolio.md for in-page sending)
        </p>
      )}
    </form>
  )
}

export default function Contact({ contact = {}, name }) {
  const socialLinks = [
    contact.github && { icon: GitHubIcon, label: 'GitHub', href: contact.github },
    contact.linkedin && { icon: LinkedInIcon, label: 'LinkedIn', href: contact.linkedin },
    contact.email && { icon: MailIcon, label: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
        Contact
      </h2>
      <p className="text-2xl font-light text-gray-700 mb-10">
        Let's build something together.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <ContactForm formspreeId={contact.formspreeId} email={contact.email} />

        {/* Links */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-4">Or reach me via</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-950 transition-colors"
                >
                  <span className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg">
                    <Icon />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* CV Download */}
          {contact.cvFile && (
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 mb-3">Resume</p>
              <a
                href={contact.cvFile}
                download
                className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-600 hover:text-gray-950 hover:shadow-sm transition-all"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-20">© {new Date().getFullYear()} {name}</p>
    </section>
  )
}
