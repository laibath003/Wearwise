
import { CheckCircle2, Sparkles } from 'lucide-react'

const expectations = [
  'Recommendations tailored to your request',
  'Products matched to your budget',
  'Outfit combinations for different occasions',
  'Suggestions based on the Wearwise catalog',
]

export default function AdvisorSidebar() {
  return (
    <aside className="h-fit bg-[#F5F4F1] p-6 sm:p-7">
      <Sparkles size={25} className="text-[#E63946]" />

      <h3 className="mt-5 text-xl font-bold text-[#111111]">
        Good style starts with you.
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        Your wardrobe, your budget, your occasions. The advisor is being
        designed to make recommendations around what you actually need.
      </p>

      <div className="my-6 border-t border-gray-300" />

      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
        What to expect
      </p>

      <ul className="mt-4 space-y-4 text-sm text-gray-700">
        {expectations.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              size={18}
              className="shrink-0 text-[#E63946]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
