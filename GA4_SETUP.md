# Google Analytics 4 (GA4) Setup Guide

## Overview
This website is pre-configured with Google Analytics 4 tracking for comprehensive user behavior analysis. The implementation tracks key user interactions while respecting privacy regulations.

## Setup Instructions

### 1. Obtain Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Navigate to **Admin** > **Data Streams**
4. Select your web stream or create a new one
5. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Configure the Measurement ID
Replace the placeholder ID in `client/index.html`:

```javascript
// Line 29 in client/index.html
const GA4_ID = 'G-PLACEHOLDER'; // Replace with your actual GA4 Measurement ID
```

Replace `G-PLACEHOLDER` with your actual measurement ID (e.g., `G-ABC123XYZ9`).

### 3. Privacy Settings (Pre-configured)
The implementation includes privacy-friendly defaults:
- IP anonymization enabled
- Advertising features disabled by default
- Secure cookie settings

## Tracked Events

The following events are automatically tracked:

### Page Views
- Automatic tracking on every page navigation
- Includes page path and title

### Form Submissions
- **Contact Form**: Tracks successful submissions
- **Newsletter Signup**: Tracks email subscriptions
- Includes form location and completion status

### User Interactions
- **Service Modal Opens**: Tracks which services users explore
- **CTA Button Clicks**: 
  - "Connect With Us" button (hero section)
  - "Explore Services" button (hero section)
  - Service modal CTAs
- **Language Changes**: Tracks language preference switches
- **WhatsApp Button**: Tracks clicks to contact via WhatsApp

### Video Interactions
- Play/Pause actions on the hero video

## Testing Your Implementation

### 1. Using GA4 DebugView
1. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
2. Enable the extension
3. Open your website
4. Go to Google Analytics > **Configure** > **DebugView**
5. Interact with your website and watch events appear in real-time

### 2. Browser Console
With the site in development mode, all GA4 events are logged to the browser console:
- Look for `[GA4 Event]` and `[GA4 Page View]` logs
- If you see `GA4 tracking is not configured`, the measurement ID needs to be updated

### 3. Real-time Reports
Once configured with a real measurement ID:
1. Go to Google Analytics > **Reports** > **Real-time**
2. You should see active users and events as they happen

## GDPR Compliance Considerations

### Current Implementation
- IP anonymization is enabled
- No personally identifiable information (PII) is collected
- Advertising features are disabled by default

### Recommended Additional Steps
1. **Cookie Consent Banner**: Consider implementing a cookie consent solution
2. **Privacy Policy**: Update your privacy policy to mention GA4 usage
3. **Data Retention**: Configure data retention settings in GA4 admin
4. **User Rights**: Implement user data deletion requests if required

## Custom Event Implementation

To add new custom events, use the analytics utility functions:

```javascript
import { trackEvent, trackButtonClick } from '@/lib/analytics';

// Track a custom event
trackEvent('custom_action', {
  event_category: 'engagement',
  event_label: 'specific_action',
  custom_parameter: 'value'
});

// Track a button click
trackButtonClick('button_name', 'page_location');
```

## Troubleshooting

### Events Not Appearing
1. Verify the measurement ID is correctly set in `index.html`
2. Check browser console for error messages
3. Ensure no ad blockers are interfering
4. Verify GA4 property is not filtering your IP address

### Development vs Production
- In development, events are logged to console
- In production, console logging is disabled
- Use DebugView for testing in both environments

## Environment Variables (Optional)

While the current implementation uses a direct replacement in HTML, you can enhance it to use environment variables:

1. Create a `.env` file with:
   ```
   VITE_GA4_MEASUREMENT_ID=G-YOUR-ID-HERE
   ```

2. Modify the implementation to read from environment variables if needed

## Support

For GA4-specific questions:
- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Developer Documentation](https://developers.google.com/analytics/devguides/collection/ga4)

For implementation questions:
- Review the code in `/client/src/lib/analytics.ts`
- Check component implementations for event tracking examples