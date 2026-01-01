# UniCookbook User Manual

Welcome to UniCookbook! This guide will help you understand all the features and functionality of the application.

## Table of Contents

- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [User Profile](#user-profile)
- [Adding Recipes](#adding-recipes)
- [Viewing Recipes](#viewing-recipes)
- [Editing Recipes](#editing-recipes)
- [Filtering & Search](#filtering--search)
- [Tag System](#tag-system)
- [Recipe Approval System](#recipe-approval-system)
- [Sharing & Exporting](#sharing--exporting)
- [Data Management](#data-management)

---

## Getting Started

UniCookbook is a collaborative recipe management application that allows users to add, view, edit, and share recipes. The app supports AI-powered recipe parsing from text, URLs, images, and multi-page PDFs, making it easy to import recipes from virtually any source.

### Key Features

- 🤖 AI-powered recipe parsing with GPT-4o Vision
- 📸 Image and PDF upload support
- 📄 Multi-page PDF processing with page selection
- 🌍 Automatic language detection and translation to British English
- 📏 Imperial to metric conversion
- 🔐 Google authentication with role-based access
- 🏷️ Multi-tag filtering system
- ✅ Recipe approval workflow
- 📤 Share, print, and export recipes
- 🔍 Advanced search functionality
- 💾 Cloud storage with Supabase

---

## Authentication

### Login Methods

**Google Sign-In**
- Click the "Sign in with Google" button
- Select your Google account
- If your email is in the authorized users list, you'll have full access

**Guest Access**
- Click "Continue as Guest" for read-only access
- Guest users can view approved recipes but cannot add or edit

### User Roles

#### Authorized Users
Authorized users (defined in the backend's `AUTHORIZED_USERS` environment variable) have full access:
- ✅ Add new recipes
- ✅ Edit any recipe
- ✅ Delete recipes
- ✅ Approve untested recipes
- ✅ View all recipes including untested ones
- ✅ Access all filter tags including "Untested"

#### Non-Authorized Users & Guests
Non-authorized users and guests have limited access:
- ✅ View approved recipes (non-untested)
- ❌ Cannot see "Untested" recipes
- ❌ Cannot see "Untested" filter tag
- ❌ Cannot add, edit, or delete recipes
- ❌ Cannot approve recipes

---

## User Profile

### Accessing Your Profile

1. Click your profile icon in the top-right corner
2. Select "User Profile" (or navigate to the profile view)
3. You'll see your account details including:
   - **Email** (from Google account, read-only)
   - **Full Name** (synced from Google, read-only)
   - **Display Name (Alias)** - Your contributor alias (editable by authorized users)
   - **Authorization Status** - Shows if you're an authorized user or guest
   - **Member Since** - Account creation date
   - **Last Login** - Your most recent login

### Setting Your Display Name (Alias)

**Authorized Users Only:**
Your display name (alias) is how your name appears as the contributor on recipes you add or contribute to.

1. Click the **Display Name (Alias)** field
2. Enter your preferred alias (up to 50 characters)
3. Click **Save Changes**

**Alias Rules:**
- Must be unique across all users (no two users can have the same alias)
- Cannot be empty
- Maximum 50 characters
- Appears on all recipes you contribute to

**Note:** Non-authorized users cannot set an alias. The alias field is disabled for guest and non-authorized users.

### Recipe Adoption

If you change your alias and there are existing recipes with custom contributor names that match your new alias, you'll be prompted:

```
Found X recipe(s) with custom contributor "[YourNewAlias]".
Do you want to adopt them by linking to your profile?
```

- **OK:** Links those recipes to your profile (they'll show your alias going forward)
- **Cancel:** Leaves them as custom contributors

### Deleting Your Profile

**⚠️ Warning:** This action cannot be undone!

1. Scroll to the bottom of your profile
2. Click **Delete Profile**
3. Confirm the deletion

**When you delete your profile:**
- Your user ID is removed from all recipes you contributed to
- Custom contributor names remain (e.g., if a recipe used "John's Special" as a custom name, it stays)
- All approvals you gave are removed from recipes
- Your account is permanently deleted
- You'll be logged out

---

## Adding Recipes

### Overview

UniCookbook offers multiple ways to add recipes using AI-powered parsing:

1. **Text Input** - Paste recipe text
2. **URL Import** - Enter a recipe URL
3. **Image Upload** - Upload photos or screenshots
4. **PDF Upload** - Upload single or multi-page PDFs

All methods use advanced AI to extract recipe information, detect the language, translate to British English if needed, and convert measurements to metric.

### Method 1: Paste Text

1. Click the "Add Recipe" button (+ icon)
2. Select the "Paste Text" tab
3. Paste or type your recipe in any format
4. Click "Parse Recipe with AI"
5. The AI will extract and structure:
   - Title
   - Servings
   - Prep time
   - Cook time
   - Ingredients (with support for ingredient groups)
   - Instructions
   - Notes
   - Tags

**AI Processing:**
- Detects if the recipe is in a foreign language
- Translates to British English (GB)
- Uses British terminology (courgette, aubergine, etc.)
- Converts imperial measurements to metric with originals in brackets

### Method 2: URL Import

1. Click the "Add Recipe" button (+ icon)
2. Select the "From URL" tab
3. Paste a recipe URL from a supported website
4. Click "Parse Recipe from URL"
5. The AI will fetch, parse, and process the recipe

**Notes:**
- Works with most recipe websites
- May fail on paywalled or login-required sites
- Complex pages may take longer to process

### Method 3: Image Upload

1. Click the "Add Recipe" button (+ icon)
2. Select the "Upload Image/PDF" tab
3. Click the upload area or drag and drop an image
4. Wait for the image to be processed and compressed
5. Click "Parse Recipe from Image"

**Supported Image Formats:**
- PNG, JPG, JPEG
- Maximum file size: 10MB
- Images are automatically compressed to optimize processing

**Best Results:**
- Use clear, well-lit photos
- Ensure text is readable
- Works with cookbook photos, screenshots, or handwritten recipes

### Method 4: PDF Upload (Multi-Page Support)

1. Click the "Add Recipe" button (+ icon)
2. Select the "Upload Image/PDF" tab
3. Upload a PDF file (drag and drop or click to browse)
4. Wait for PDF conversion (all pages are converted to images)
5. **For multi-page PDFs:**
   - View thumbnails of all pages
   - Click pages to select/deselect
   - Use "Select All" or "Clear" buttons
   - First page is selected by default
6. Click "Parse Recipe from X Page(s)"
7. The AI will combine selected pages into a single recipe

**PDF Features:**
- Supports multi-page PDFs
- Select specific pages to parse
- AI combines multiple pages into one recipe
- Maximum file size: 10MB
- Password-protected PDFs not supported

**Processing Details:**
- Each page is converted to an image
- Images are compressed for faster processing
- Selected pages are sent together to the AI
- AI intelligently combines information from all pages

### Recipe Preview & Editing

After parsing, you'll see a preview where you can:
- Edit any field (all pre-filled by AI)
- Add, remove, or reorder ingredients and instructions
- Review AI conversions and translations
- Add custom tags
- Save or discard the recipe

### Default Behavior

**Automatic Tagging:**
- All new recipes receive an "Untested" tag automatically
- If you have active filter tags when adding a recipe, those tags are also added automatically

**AI Processing:**
- Language detection and translation to British English
- Metric conversion (imperial measurements converted with originals in brackets)
- British terminology (courgette instead of zucchini, aubergine instead of eggplant)
- Structured grouping of ingredients and instructions

**Contributor Tracking:**
- **Authorized users:** Your alias (from your user profile) is used as the contributor
- **Non-authorized users:** You cannot add recipes

**Continue Adding:**
- Check "Continue adding recipes" to quickly add multiple recipes without returning to the list

---

## Viewing Recipes

### Recipe List View

Recipes are displayed as cards showing:
- Title
- Tags
- Servings, prep time, and contributor
- Number of ingredients and steps

**Visual Indicators:**
- 🟡 Yellow cards = Untested recipes (visible only to authorized users)
- ⚪ White cards = Approved recipes

### Recipe Detail View

Click any recipe card to view full details:
- Complete ingredient list (with support for ingredient groups marked with ###)
- Step-by-step instructions
- Notes section
- Contributor information
- Tags
- Approval status (for untested recipes)

### Action Buttons

In the recipe detail view:
- 🔗 **Share** - Copy a shareable link to clipboard
- 📋 **Copy** - Copy the entire recipe text to clipboard
- ✏️ **Edit** - Modify the recipe (authorized users only)
- 🖨️ **Print** - Print-friendly view
- 📥 **Download** - Export as PDF
- 🗑️ **Delete** - Remove the recipe (authorized users only)

---

## Editing Recipes

**Access:** Authorized users only

1. Open a recipe in detail view
2. Click the Edit button (pencil icon)
3. Modify any field:
   - Text fields: Direct editing
   - Ingredients/Instructions: Add, remove, reorder, or edit individual items
   - Tags: Select from predefined tags or add custom ones
4. Click "Save Changes" or "Cancel"

### Editing Features

**Ingredients & Instructions:**
- ➕ Add new items
- 🗑️ Remove items
- ↕️ Reorder with drag handles
- ✏️ Edit text inline

**Tags:**
- Select from predefined categories:
  - Breakfast
  - Pasta
  - Not Pasta
  - Dips & Sauces
  - Sweet Stuff
  - Drinks
  - Untested
- Add custom tags via text input

**Metric Conversion:**
- Click "Convert to Metric" to automatically convert imperial measurements to metric
- Uses AI to intelligently convert based on ingredient type
- Preserves original measurements in brackets
- Handles teaspoons and tablespoons appropriately
- Converts British vs American terminology

---

## Filtering & Search

### Tag Filtering

Filter recipes by one or more tags:
1. Click tag pills in the sidebar or above the recipe list
2. Multiple tags can be active (shows recipes matching ALL selected tags)
3. Active tags are highlighted
4. Click again to deselect

**Available Tags:**
- Breakfast
- Pasta
- Not Pasta
- Dips & Sauces
- Sweet Stuff
- Drinks
- Untested (authorized users only)
- Custom tags (user-created)

### Search Bar

Use the search box to find recipes by:
- Recipe title
- Ingredient names
- Instruction text
- Contributor names
- Tags

**Search Tips:**
- Search is case-insensitive
- Matches partial words
- Searches across all recipe fields
- Combines with tag filters

### Contributor Filter

Filter by contributor (authorized users only):
1. Click the contributor dropdown
2. Select a specific contributor
3. View only recipes from that contributor
4. Select "All Contributors" to clear

---

## Tag System

### Predefined Tags

UniCookbook includes these built-in tags:
- **Breakfast** - Morning meals
- **Pasta** - Pasta-based dishes
- **Not Pasta** - Non-pasta dishes
- **Dips & Sauces** - Dips, sauces, and condiments
- **Sweet Stuff** - Desserts and sweet treats
- **Drinks** - Beverages
- **Untested** - Recipes not yet tested (auto-added to new recipes)

### Custom Tags

Authorized users can add custom tags:
1. When editing a recipe, type a new tag name
2. Press Enter or click "Add"
3. The tag is added to the recipe and becomes available system-wide

### Tag Behavior

- Tags are case-sensitive
- Tags persist across all recipes
- Deleting a tag from one recipe doesn't remove it from others
- Custom tags appear alongside predefined tags

---

## Recipe Approval System

**Access:** Authorized users only

### Purpose

The approval system helps manage recipe quality:
- New recipes are marked "Untested" by default
- Authorized users can test and approve recipes
- Non-authorized users only see approved recipes

### Approving a Recipe

1. Open an untested recipe (yellow card)
2. Click the "Approve Recipe" button
3. The recipe is marked as approved
4. The "Untested" tag is removed
5. The recipe becomes visible to all users

### Unapproving a Recipe

1. Open an approved recipe
2. Click "Mark as Untested"
3. The "Untested" tag is added back
4. The recipe is hidden from non-authorized users

---

## Sharing & Exporting

### Share Link

1. Open a recipe in detail view
2. Click the Share button (🔗)
3. A shareable URL is copied to your clipboard
4. Share the link with others

**Note:** Recipients must have access to the app to view the recipe.

### Copy to Clipboard

1. Open a recipe
2. Click the Copy button (📋)
3. The entire recipe text is copied in plain format
4. Paste anywhere (email, notes, messages)

### Print

1. Open a recipe
2. Click the Print button (🖨️)
3. A print-friendly version opens
4. Use your browser's print function

**Print Features:**
- Clean, formatted layout
- Ingredient groups preserved
- Instruction sections preserved
- No UI elements (buttons, filters)

### Download as PDF

1. Open a recipe
2. Click the Download button (📥)
3. A formatted PDF is generated
4. The PDF downloads automatically

**PDF Features:**
- Professional formatting
- Preserves all recipe groups
- Includes all metadata
- Suitable for archiving or sharing

---

## Data Management

### Backup & Restore

**Access:** Authorized users only

### Creating a Backup

1. Go to the recipe list view
2. Click "Download Backup"
3. All recipes are exported as a JSON file
4. Save the file securely

### Restoring from Backup

1. Click "Restore from Backup"
2. Select a previously saved backup file
3. Choose restore option:
   - **Replace all:** Deletes current recipes and restores from backup
   - **Merge:** Adds backup recipes to existing ones (skips duplicates)
4. Confirm the operation

**⚠️ Warning:** "Replace all" permanently deletes current recipes!

### Data Storage

- Recipes are stored in Supabase PostgreSQL
- Real-time sync across devices
- Automatic backups (if configured in Supabase)
- Secure cloud storage

---

## Tips & Best Practices

### Adding Recipes

- **Use clear recipe sources** - Well-formatted recipes parse better
- **Review AI parsing** - Always check the preview before saving
- **Add descriptive tags** - Makes recipes easier to find
- **Test multi-page PDFs** - Select only relevant pages for better results
- **Use good quality images** - Clear, well-lit photos work best

### Organizing Recipes

- **Use consistent tags** - Stick to existing tags when possible
- **Add notes** - Include cooking tips or variations
- **Group ingredients logically** - Use ### headers for multi-component recipes
- **Set clear contributors** - Helps track recipe sources

### Searching

- **Combine filters** - Use tags + search for precise results
- **Search by ingredient** - Find recipes using specific ingredients
- **Use contributor filter** - Find all recipes from a specific person

### Maintenance

- **Regular backups** - Download backups periodically
- **Approve tested recipes** - Remove "Untested" tag after testing
- **Update recipes** - Keep prep/cook times and servings accurate
- **Clean up tags** - Remove unnecessary custom tags

---

## Troubleshooting

### Recipe Parsing Issues

**Problem:** AI fails to parse recipe correctly
- **Solution:** Review the source text for clarity, try reformatting, or manually enter the recipe

**Problem:** URL import fails
- **Solution:** Ensure the URL is accessible, not behind a paywall, and contains a recipe

**Problem:** Image/PDF upload fails
- **Solution:** Check file size (max 10MB), ensure file is not corrupted, refresh page and try again

**Problem:** PDF conversion fails
- **Solution:** Verify PDF is not password-protected, try a different PDF viewer to check validity

### Authentication Issues

**Problem:** Can't sign in with Google
- **Solution:** Check internet connection, verify Google account works, clear browser cache

**Problem:** Lost authorization after login
- **Solution:** Contact admin to verify your email is in AUTHORIZED_USERS list

### Display Issues

**Problem:** Recipes not showing
- **Solution:** Check filter tags, verify you're not filtering to empty results

**Problem:** Can't see "Untested" recipes
- **Solution:** This is normal for non-authorized users; contact admin for access

### Data Issues

**Problem:** Recipe changes not saving
- **Solution:** Check internet connection, verify Supabase is accessible, try refreshing

**Problem:** Backup restore failed
- **Solution:** Verify backup file is valid JSON, check file wasn't corrupted

---

## FAQ

**Q: Can I add recipes in other languages?**
A: Yes! The AI automatically detects and translates to British English.

**Q: What image formats are supported?**
A: PNG, JPG, and JPEG files up to 10MB.

**Q: Can I upload multi-page PDFs?**
A: Yes! You can select specific pages to parse and combine into one recipe.

**Q: How does metric conversion work?**
A: The AI converts imperial measurements (cups, ounces, °F) to metric (ml, grams, °C) and includes the original in brackets.

**Q: Why are some recipes yellow?**
A: Yellow cards indicate "Untested" recipes, visible only to authorized users.

**Q: Can guests add recipes?**
A: No, only authorized users can add, edit, or delete recipes.

**Q: How do I become an authorized user?**
A: Contact the application administrator to add your email to the AUTHORIZED_USERS list.

**Q: Are my recipes private?**
A: No, all recipes are shared with everyone who has access to the app.

**Q: Can I delete my account?**
A: Yes, through the User Profile page, but this action cannot be undone.

**Q: What happens to my recipes if I delete my account?**
A: Recipes remain but your profile link is removed; they show as custom contributors.

---

## Contact & Support

For issues, questions, or feature requests, contact the application administrator.

**Version:** 2.0
**Last Updated:** January 2026
