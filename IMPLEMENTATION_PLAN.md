# Tidy Home - Implementation Action Plan

## Quick Start Commands

```powershell
# Navigate to project
cd C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1

# Create and switch to update branch
git checkout -b client-updates-jan-2025

# Start local development
npx vite --host
```

## Phase 1: Setup & Preparation (30 minutes)

### 1.1 Identify Component Files
Based on your project structure, here are the key files you'll be updating:

```
client/src/
├── pages/
│   ├── Home.tsx          # Hero, services, process sections
│   ├── About.tsx         # Add team bios, update process
│   ├── Services.tsx      # Update service descriptions
│   ├── Contact.tsx       # Transform to "Connect with Us"
│   └── [NEW] FAQ.tsx     # Create new FAQ page
├── components/
│   ├── Hero.tsx          # Update hero text
│   ├── Navigation.tsx    # Change "Contact" to "FAQ"
│   ├── Footer.tsx        # Remove phone number
│   └── ServiceCard.tsx   # Update button text
└── styles/
    └── globals.css       # Update color scheme
```

### 1.2 Request Missing Assets from Client
Send this to your client:
```
Hi! To complete the updates, I need:
1. Brand book with exact color codes (cream, greens, sage, orange)
2. Service section photos (6 images)
3. Portfolio photos organized by: Organization, Space Creation, Moving
4. Details about your form service (Typeform, Google Forms, etc.)
```

## Phase 2: Quick Wins - Text Updates (1 hour)

### 2.1 Update Navigation (5 min)
**File:** `client/src/components/Navigation.tsx`
```typescript
// Change "Contact" to "FAQ" in navigation items
// Update link from "/contact" to "/faq"
```

### 2.2 Update Hero Section (10 min)
**File:** `client/src/components/Hero.tsx` or `client/src/pages/Home.tsx`
```typescript
// Update text:
// - Main: "YOUR SPACE MATTERS"
// - Title: "The Tidy Touch"
// - Subtitle: "We specialize in curated, clutter-free living..."
```

### 2.3 Update All Buttons (15 min)
**Global Find & Replace:**
- Find: "Contact Us"
- Replace: "Get Started"

### 2.4 Update Footer (5 min)
**File:** `client/src/components/Footer.tsx`
```typescript
// Remove phone number
// Remove duplicate About section
```

## Phase 3: Style Updates (45 minutes)

### 3.1 Update Color Variables
**File:** `client/src/styles/globals.css` or `tailwind.config.ts`
```css
:root {
  /* Update these with brand colors */
  --color-background: #FAF7F2; /* Cream */
  --color-primary: #2A5434;    /* Dark Green (example) */
  --color-secondary: #8FA68E;  /* Sage (example) */
  --color-accent: #E67E22;     /* Orange (example) */
}
```

### 3.2 Remove White Backgrounds
**Global CSS Update:**
```css
/* Change all bg-white to bg-cream */
.bg-white { background-color: var(--color-background); }
```

## Phase 4: New Content (1 hour)

### 4.1 Create FAQ Page
**New File:** `client/src/pages/FAQ.tsx`
```typescript
const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "Peak season runs September through March..."
    },
    // Add all 4 FAQs
  ];
  
  return (
    // FAQ component structure
  );
};
```

### 4.2 Add Team Bios to About
**File:** `client/src/pages/About.tsx`
```typescript
// Add new section with Valeria & Raul bio
```

### 4.3 Update Process Section
**Files:** `client/src/pages/Home.tsx` and `client/src/pages/About.tsx`
```typescript
// Update Step 2 title and description
// Update Step 4 description
```

## Phase 5: Testing & Deployment (30 minutes)

### 5.1 Local Testing Checklist
```powershell
# Run dev server
npx vite --host

# Test each page:
# - Home: Check hero, services, process
# - About: Check bios, process
# - Services: Check buttons
# - FAQ: Check all questions
# - Footer: Verify no phone number
```

### 5.2 Commit and Deploy
```powershell
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Client updates: new copy, FAQ page, team bios, style updates"

# Push to branch
git push origin client-updates-jan-2025

# When ready, merge to main
git checkout main
git merge client-updates-jan-2025
git push origin main
```

## Component Mapping for Claude Code

When using Claude Code, provide these specific paths:

```
For Hero updates:
"Update /client/src/components/Hero.tsx with new text"

For Navigation:
"In /client/src/components/Navigation.tsx change Contact to FAQ"

For Colors:
"Update /client/src/styles/globals.css to use cream background #FAF7F2"

For FAQ page:
"Create new file /client/src/pages/FAQ.tsx with 4 questions"
```

## Priority Order

1. **Do First (Quick Wins):**
   - Navigation text change
   - Button text updates
   - Footer phone removal

2. **Do Second (Visible Impact):**
   - Hero text updates
   - Color scheme (if you have codes)
   - Process section updates

3. **Do Third (New Features):**
   - FAQ page creation
   - Team bios addition

4. **Do Last (Needs Assets):**
   - Portfolio photos
   - Service photos
   - Form integrations

## Emergency Rollback

If something breaks:
```powershell
# Revert to previous version
git checkout main
git push origin main --force

# Or revert last commit
git revert HEAD
git push origin main
```

---

Start with Phase 1.1 - identify your actual component files, then work through the quick wins in Phase 2!