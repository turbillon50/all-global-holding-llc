import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017'
const DB_NAME = process.env.DB_NAME || 'allglobalholding'

let client = null
let db = null

async function connectToDatabase() {
  if (db) return db
  
  try {
    client = new MongoClient(MONGO_URL)
    await client.connect()
    db = client.db(DB_NAME)
    console.log('Connected to MongoDB')
    return db
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(request, { params }) {
  try {
    const path = params?.path?.join('/') || ''
    
    // Health check endpoint
    if (path === 'health' || path === '') {
      return NextResponse.json(
        { 
          status: 'healthy', 
          message: 'All Global Holding LLC API',
          version: '1.0.0',
          timestamp: new Date().toISOString()
        },
        { headers: corsHeaders }
      )
    }

    // Get all newsletter subscribers
    if (path === 'subscribers') {
      const database = await connectToDatabase()
      const subscribers = await database.collection('subscribers').find({}).toArray()
      return NextResponse.json(
        { success: true, data: subscribers },
        { headers: corsHeaders }
      )
    }

    // Get all contact submissions
    if (path === 'contacts') {
      const database = await connectToDatabase()
      const contacts = await database.collection('contacts').find({}).toArray()
      return NextResponse.json(
        { success: true, data: contacts },
        { headers: corsHeaders }
      )
    }

    // Get all waitlist entries
    if (path === 'waitlist') {
      const database = await connectToDatabase()
      const waitlist = await database.collection('waitlist').find({}).toArray()
      return NextResponse.json(
        { success: true, data: waitlist },
        { headers: corsHeaders }
      )
    }

    // Companies data endpoint
    if (path === 'companies') {
      const companies = [
        {
          id: 'fractional-living',
          name: 'Fractional Living',
          description: 'Premium real estate fractional ownership, second-home access and structured property participation in Quintana Roo, Cancún, Tulum and Playa del Carmen.',
          status: 'coming_soon',
          category: 'real_estate'
        },
        {
          id: 'vandefy',
          name: 'Vandefy',
          description: 'Digital payments, crypto acceptance, tokenization, wallets and modern financial access for the ecosystem.',
          status: 'coming_soon',
          category: 'fintech'
        },
        {
          id: 'sell-experience',
          name: 'Sell Experience',
          description: 'Premium experiences marketplace: flights, hotels, villas, yachts, car rentals, curated trips, hospitality and lifestyle services.',
          status: 'coming_soon',
          category: 'travel'
        },
        {
          id: 'momentum',
          name: 'Momentum',
          description: 'AI-powered app factory and technology studio for automation, no-code, low-code, landing pages, apps, CRM systems, internal tools and commercial platforms.',
          status: 'coming_soon',
          category: 'technology'
        },
        {
          id: 'urmah',
          name: 'URMAH',
          description: 'Ticketing platform integrated with Ticket Tailor for large-scale music and entertainment events in Mexico.',
          status: 'coming_soon',
          category: 'events'
        }
      ]
      
      return NextResponse.json(
        { success: true, data: companies },
        { headers: corsHeaders }
      )
    }

    return NextResponse.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders }
    )

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function POST(request, { params }) {
  try {
    const path = params?.path?.join('/') || ''
    const body = await request.json()

    // Newsletter subscription
    if (path === 'subscribe') {
      const { email } = body
      
      if (!email || !email.includes('@')) {
        return NextResponse.json(
          { error: 'Valid email is required' },
          { status: 400, headers: corsHeaders }
        )
      }

      const database = await connectToDatabase()
      const existingSubscriber = await database.collection('subscribers').findOne({ email })
      
      if (existingSubscriber) {
        return NextResponse.json(
          { success: false, message: 'Email already subscribed' },
          { status: 409, headers: corsHeaders }
        )
      }

      const subscriber = {
        id: uuidv4(),
        email,
        subscribedAt: new Date().toISOString(),
        source: 'landing_page'
      }

      await database.collection('subscribers').insertOne(subscriber)
      
      return NextResponse.json(
        { success: true, message: 'Successfully subscribed', data: subscriber },
        { status: 201, headers: corsHeaders }
      )
    }

    // Contact form submission
    if (path === 'contact') {
      const { name, email, message, company } = body
      
      if (!email || !message) {
        return NextResponse.json(
          { error: 'Email and message are required' },
          { status: 400, headers: corsHeaders }
        )
      }

      const database = await connectToDatabase()
      
      const contact = {
        id: uuidv4(),
        name: name || 'Anonymous',
        email,
        message,
        company: company || null,
        submittedAt: new Date().toISOString(),
        status: 'new'
      }

      await database.collection('contacts').insertOne(contact)
      
      return NextResponse.json(
        { success: true, message: 'Message received. We will contact you soon.', data: contact },
        { status: 201, headers: corsHeaders }
      )
    }

    // Waitlist / Future Access List
    if (path === 'waitlist') {
      const { email, name, interests } = body
      
      if (!email || !email.includes('@')) {
        return NextResponse.json(
          { error: 'Valid email is required' },
          { status: 400, headers: corsHeaders }
        )
      }

      const database = await connectToDatabase()
      const existingEntry = await database.collection('waitlist').findOne({ email })
      
      if (existingEntry) {
        return NextResponse.json(
          { success: false, message: 'Already on the waitlist' },
          { status: 409, headers: corsHeaders }
        )
      }

      const entry = {
        id: uuidv4(),
        email,
        name: name || null,
        interests: interests || [],
        joinedAt: new Date().toISOString(),
        status: 'pending'
      }

      await database.collection('waitlist').insertOne(entry)
      
      return NextResponse.json(
        { success: true, message: 'Welcome to the future access list!', data: entry },
        { status: 201, headers: corsHeaders }
      )
    }

    return NextResponse.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders }
    )

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500, headers: corsHeaders }
    )
  }
}

// TODO: Future Clerk Authentication Integration
// When implementing Clerk:
// 1. Install @clerk/nextjs
// 2. Wrap the app with ClerkProvider in layout.js
// 3. Add middleware.js for route protection
// 4. Use useUser() and useAuth() hooks in components
// 5. Add SignIn, SignUp, UserButton components
// 6. Configure webhooks for user sync with database
//
// Example middleware.js:
// import { clerkMiddleware } from '@clerk/nextjs/server'
// export default clerkMiddleware()
// export const config = { matcher: [...] }
