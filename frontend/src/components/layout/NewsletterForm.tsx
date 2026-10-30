
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) return

    setMessage(
      'Thanks for your interest! Newsletter signup will be connected soon.'
    )
    setEmail('')
  }

  return (
    <div>
      <h2 className="mb-5 text-xs font-bold tracking-[0.2em]">
        STAY IN THE LOOP
      </h2>

      <p className="mb-5 text-sm leading-6 text-gray-400">
        Get style inspiration and updates on our latest collections.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex border-b border-gray-600"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          aria-label="Your email address"
          className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-gray-500"
        />

        <button
          type="submit"
          aria-label="Subscribe"
          className="pl-3 transition hover:text-[#E63946]"
        >
          <ArrowRight size={19} />
        </button>
      </form>

      {message && (
        <p role="status" className="mt-3 text-xs text-gray-300">
          {message}
        </p>
      )}
    </div>
  )
}
