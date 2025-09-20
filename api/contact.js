// Vercel Serverless Function for contact form
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    
    // For now, we'll just log and return success
    console.log('Contact submission:', { name, email, phone, service, message });

    res.status(200).json({ 
      success: true, 
      message: 'Contact submission received successfully',
      id: Date.now() // Temporary ID
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error processing contact form' 
    });
  }
}
