import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-7">
      <div className="flex gap-4">
        <Mail className="shrink-0 text-[#E63946]" size={21} />

        <div>
          <h3 className="font-semibold">Get in touch</h3>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            Send us a message using the contact form, and let us know
            how we can help.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Phone className="shrink-0 text-[#E63946]" size={21} />

        <div>
          <h3 className="font-semibold">Customer support</h3>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            We're here to help with questions about products, outfit
            combinations, and styling.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <MapPin className="shrink-0 text-[#E63946]" size={21} />

        <div>
          <h3 className="font-semibold">Our approach</h3>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            Thoughtful essentials, versatile combinations, and a more
            personal approach to everyday menswear.
          </p>
        </div>
      </div>
    </div>
  )
}