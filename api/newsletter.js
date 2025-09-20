// Vercel Serverless Function for newsletter subscription
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // In production, you would:
    // 1. Check if email exists in database
    // 2. Save to database
    // 3. Send to email service (Mailchimp, SendGrid, etc.)
    // 4. Send confirmation email
    
    // For now, we'll just return success
    console.log('Newsletter subscription:', email);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      id: Date.now() // Temporary ID
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error processing subscription' 
    });
  }
}
