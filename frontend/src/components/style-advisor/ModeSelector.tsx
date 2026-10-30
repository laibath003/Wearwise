
import { modes } from './types'
import type { Mode } from './types'

type ModeSelectorProps = {
  mode: Mode
  onModeChange: (mode: Mode) => void
}

export default function ModeSelector({
  mode,
  onModeChange,
}: ModeSelectorProps) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
          What can we help you with?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Choose a styling option to get started.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modes.map((item) => {
          const Icon = item.icon
          const active = mode === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onModeChange(item.id)}
              className={`flex min-h-32 items-start gap-4 border p-5 text-left transition ${
                active
                  ? 'border-[#E63946] bg-[#FFF8F8]'
                  : 'border-gray-200 bg-white hover:border-gray-400'
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center ${
                  active
                    ? 'bg-[#E63946] text-white'
                    : 'bg-gray-100 text-[#111111]'
                }`}
              >
                <Icon size={21} />
              </span>

              <span>
                <span className="block font-semibold text-[#111111]">
                  {item.title}
                </span>

                <span className="mt-1 block text-sm leading-6 text-gray-500">
                  {item.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}
