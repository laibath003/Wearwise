
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  throw new Error('Missing GEMINI_API_KEY in backend environment variables.')
}

export const gemini = new GoogleGenAI({
  apiKey,
  httpOptions: {
    timeout: 30000,
    retryOptions: {
      attempts: 2,
      initialDelay: 1,
      maxDelay: 2,
      expBase: 2,
      jitter: 0,
      httpStatusCodes: [503],
    },
  },
})

export const GEMINI_MODEL =
  process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite'
