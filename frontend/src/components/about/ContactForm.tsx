import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitted(true)
    setForm(initialForm)
  }

  function updateField(field: keyof ContactFormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))

    setSubmitted(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Your name

          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="mt-2 w-full border border-gray-200 px-4 py-3 font-normal outline-none focus:border-black"
            placeholder="Full name"
          />
        </label>

        <label className="text-sm font-medium">
          Email address

          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="mt-2 w-full border border-gray-200 px-4 py-3 font-normal outline-none focus:border-black"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium">
        Subject

        <input
          required
          value={form.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          className="mt-2 w-full border border-gray-200 px-4 py-3 font-normal outline-none focus:border-black"
          placeholder="How can we help?"
        />
      </label>

      <label className="mt-5 block text-sm font-medium">
        Message

        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="mt-2 w-full resize-y border border-gray-200 px-4 py-3 font-normal outline-none focus:border-black"
          placeholder="Write your message..."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-3 bg-[#111111] px-7 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-[#E63946]"
      >
        SEND MESSAGE
        <ArrowRight size={16} />
      </button>

      {submitted && (
        <p role="status" className="mt-4 text-sm text-green-700">
          Thank you for reaching out! Your message has been received.
        </p>
      )}
    </form>
  )
}