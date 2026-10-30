import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { styleAdvisorRequestSchema } from './schemas/styleAdvisor.js'
import { supabase } from './lib/supabase.js'
import { gemini, GEMINI_MODEL } from './lib/gemini.js'
import { generateStyleRecommendations } from './services/styleAdvisorService.js'

const app = express()
const PORT = Number(process.env.PORT) || 4000

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  }),
)

app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Wearwise API is running',
  })
})
app.get('/api/products', async (_req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select(
      'id, name, category, price, old_price, color, badge, image_url, description, sizes, occasions, style_tags, in_stock',
    )
    .order('name', { ascending: true })

 if (error) {
  console.error('Supabase products error:', error)

  return res.status(500).json({
    success: false,
    message: 'Unable to fetch products',
  })
}

  const products = data.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: Number(product.price),
    oldPrice:
      product.old_price === null ? undefined : Number(product.old_price),
    color: product.color,
    badge: product.badge ?? undefined,
    image: product.image_url,
    description: product.description,
    sizes: product.sizes,
    occasions: product.occasions,
    styleTags: product.style_tags,
    inStock: product.in_stock,
  }))

  return res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  })
})


app.post('/api/style-advisor', async (req, res) => {
  console.log('Style Advisor request received');

  const validation = styleAdvisorRequestSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: 'Invalid style advisor request',
      errors: validation.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    })
  }

  try {
    const recommendation = await generateStyleRecommendations(
      validation.data,
    )

    return res.status(200).json({
      success: true,
      message: recommendation.message,
      data: recommendation,
    })
  } catch (error) {
    console.error('Style advisor request failed:', error)

    return res.status(500).json({
      success: false,
      message: 'Unable to generate recommendations right now. Please try again.',
    })
  }
})


app.listen(PORT, () => {
  console.log(`Wearwise API running at http://localhost:${PORT}`)
})
