# Tidy Home - Component File Map

## Actual File Locations for Updates

Based on your project structure, here are the EXACT files you need to update:

### Pages Directory
```
client/src/pages/
├── home.tsx           ← Hero text, services section, process
├── about.tsx          ← Add team bios, update process section
├── services.tsx       ← Update button text, descriptions
├── faqs.tsx          ← Update with 4 new FAQs (file exists!)
├── connect-with-us.tsx ← This is your lead form page
├── portfolio.tsx      ← Organize by service type
└── contact.tsx        ← May need to redirect to FAQ
```

### Components Directory (check these)
```
client/src/components/
├── Navigation.tsx     ← Change "Contact" to "FAQ" 
├── Footer.tsx        ← Remove phone number
├── Hero.tsx          ← If separate from home.tsx
└── ServiceCard.tsx   ← Update button text globally
```

## Quick Update Commands for Claude Code

Copy these exact commands when working with Claude Code:

### 1. Navigation Update
```
Update the navigation in /client/src/components/Navigation.tsx:
- Change "Contact" or "Contact Us" to "FAQ"
- Update the link from "/contact" to "/faqs"
```

### 2. Hero Section Update
```
In /client/src/pages/home.tsx update the hero section:
- Main heading: "YOUR SPACE MATTERS"
- Section title: "The Tidy Touch"
- Subtitle: "We specialize in curated, clutter-free living. Whether refreshing a room, preparing for a move, or designing from scratch, our team creates organized sanctuaries that blend luxury, functionality, and calm."
```

### 3. FAQ Page Update
```
Update /client/src/pages/faqs.tsx with these 4 questions:

1. "How far in advance should I book?"
   Answer: Include note about peak season (September-March)

2. "How do you charge for your services?"
   Answer: "We begin by preparing an initial estimate based on the information you share through our project request form. After our consultation, where we learn more about your space, needs, and scope, we refine the details and provide a customized proposal with transparent pricing."

3. "How do I get started?"
   Answer: "Simply visit our Connect With Us page and choose the service that best fits your needs. Once you submit your request, you'll be able to schedule your consultation so we can discuss your project in more detail."

4. "What areas do you serve?"
   Answer: "We proudly serve Dorado, San Juan, Carolina, and Bayamón with no additional travel fees. Projects outside these areas are also welcome, with travel costs discussed during your consultation."

Add at bottom: Section titled "Still have questions?" with text "For any additional questions, complete the form below"
```

### 4. About Page - Add Team Bio
```
In /client/src/pages/about.tsx add this new section after "The Journey":

Title: "Meet Valeria & Raul"
Content: "Valeria and Raul, a husband-and-wife team, founded Tidy Home with a shared vision of creating spaces that feel curated and intentional. Valeria, an interior stylist with a love for organization and space creation, brings ideas and designs to life through thoughtful details and creative projects. Raul is the hands-on force behind the vision, painting, installing, and problem-solving with skill and versatility. Together, they balance creativity and craftsmanship, leading a team that can take on any project and transform any space into a reflection of your lifestyle and vision."
```

### 5. Global Button Text Update
```
Search and replace in all files:
- Find: "Contact Us"
- Replace: "Get Started"
Files to check: home.tsx, services.tsx, about.tsx, all component files
```

### 6. Footer Phone Removal
```
In /client/src/components/Footer.tsx:
- Remove any phone number display
- Keep: email, working hours, service locations
- Remove any duplicate "About" section
```

### 7. Color Update (when you have brand colors)
```
Update /client/src/styles/globals.css:
- Replace all white backgrounds with cream: #FAF7F2
- Add brand colors as CSS variables
```

## Testing Each Change

After each update, test locally:
```powershell
# Terminal 1 - Run dev server
npx vite --host

# Terminal 2 - Git status
git status

# See what changed
git diff
```

## File Priority Order

1. **Do These First (5 minutes each):**
   - `components/Navigation.tsx` - Change Contact to FAQ
   - `components/Footer.tsx` - Remove phone
   - Global find/replace "Contact Us" → "Get Started"

2. **Then These (10 minutes each):**
   - `pages/home.tsx` - Hero text updates
   - `pages/faqs.tsx` - Add 4 questions
   - `pages/about.tsx` - Add team bio

3. **Finally These (need assets):**
   - `pages/portfolio.tsx` - Waiting for photos
   - `pages/services.tsx` - Waiting for service photos
   - Color updates - Waiting for brand book

## Verification Checklist

After making changes, verify:
- [ ] FAQ appears in navigation menu
- [ ] Clicking FAQ goes to /faqs page
- [ ] No phone number in footer
- [ ] All buttons say "Get Started"
- [ ] Hero says "YOUR SPACE MATTERS"
- [ ] About page has team bio
- [ ] FAQ page has 4 questions