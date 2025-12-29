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

UniCookbook is a collaborative recipe management application that allows users to add, view, edit, and share recipes. The app supports AI-powered recipe parsing from both text and URLs, making it easy to import recipes from various sources.

### Key Features

- 🤖 AI-powered recipe parsing
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

### Method 1: Text Input

1. Click the "Add Recipe" button (+ icon)
2. Select the "Text" tab
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

### Method 2: URL Import

1. Click the "Add Recipe" button (+ icon)
2. Select the "URL" tab
3. Paste a recipe URL from a supported website
4. Click "Parse Recipe from URL"
5. The AI will fetch and parse the recipe

### Recipe Preview & Editing

After parsing, you'll see a preview where you can:
- Edit any field (title, servings, times, ingredients, instructions)
- Add, remove, or reorder ingredients and instructions
- Add custom tags
- Save or discard the recipe

### Default Behavior

**Automatic Tagging:**
- All new recipes automatically receive an "Untested" tag
- If you have active filter tags when adding a recipe, those tags are also added automatically

**Contributor Tracking:**
- Your first name (from Google account) is automatically used as a suggestion
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

---

## Filtering & Search

### Filter by Type (Tags)

The tag filter uses **AND logic**:
- Click tag buttons to toggle them on/off
- Multiple tags can be selected simultaneously
- Only recipes with **all** selected tags are shown
- Selected tags are highlighted in green
- Click "All Recipes" to clear all filters

**Example:**
- Selecting "Pasta" + "Untested" shows only recipes tagged with both

**Note:** Non-authorized users do not see the "Untested" filter option.

### Filter by Contributor

Filter recipes by the person who added them:
- Click contributor buttons to filter
- Only one contributor can be selected at a time
- Click "All Contributors" to clear the filter

### Search

Use the search bar to find recipes by:
- Recipe title
- Ingredients
- Instructions
- Contributor name
- Notes

Search is **case-insensitive** and works across all text fields.

### Combined Filtering

All three filters (Tags, Contributor, Search) work together:
- Tags: Must match ALL selected tags (AND)
- Contributor: Must match selected contributor
- Search: Must match search query
- Results must satisfy ALL active filters

---

## Tag System

### Predefined Tags

- **Breakfast** - Morning meals
- **Pasta** - Pasta dishes
- **Not Pasta** - Non-pasta dishes
- **Dips & Sauces** - Condiments and dips
- **Sweet Stuff** - Desserts and sweets
- **Drinks** - Beverages
- **Untested** - Recipes awaiting approval

### Custom Tags

You can add custom tags when editing recipes:
1. Type the tag name in the "Add custom tag" field
2. Click "Add Tag"
3. Custom tags appear alongside predefined tags

### The "Untested" Tag

**Special Behavior:**
- Automatically added to all new recipes
- Only visible to authorized users
- Recipes with this tag are hidden from non-authorized users
- Automatically removed when recipe receives 2 approvals

---

## Recipe Approval System

**Purpose:** Quality control for new recipes before they're visible to all users.

### How It Works

1. **New Recipe Added**
   - Recipe receives "Untested" tag automatically
   - Visible only to authorized users

2. **Approval Process**
   - Authorized users can approve untested recipes
   - Each recipe requires **2 approvals** from different users
   - **Contributors cannot approve their own recipes**

3. **After Approval**
   - Once 2 approvals are received, "Untested" tag is removed
   - Recipe becomes visible to all users
   - Approval history is preserved

### Approval Interface

When viewing an untested recipe, authorized users see:
- **Approval Status:** Shows current approvals (e.g., "1 / 2")
- **Approval History:** List of who has approved
- **Approve Button:** Click to add your approval
- **Remove My Approval:** If you've approved, you can revoke it

**Button States:**
- ✅ **Green "Approve Recipe"** - Available to approve
- 🔒 **Gray (Disabled)** - You are the contributor (cannot self-approve)
- ✔️ **Approved Message** - You already approved or 2 approvals reached
- ⛔ **Red "Remove My Approval"** - Visible when you've already approved

### Approval Rules

1. Only authorized users can approve
2. Contributors cannot approve their own recipes
3. Each user can only approve a recipe once
4. Recipe needs 2 unique approvals
5. Once approved (2 approvals), "Untested" tag is removed automatically
6. You can remove your own approval; if approvals drop below 2, the "Untested" tag is added back automatically

### Checking Contributor Status

The system checks if you're the contributor by:
- Comparing your email with the recipe's `user_email` field
- Comparing your user ID with the recipe's `contributor_id` field

This ensures each user can only approve recipes they did not contribute to.

---

## Sharing & Exporting

### Share Link

Click the Share button to:
- Generate a unique URL for the recipe
- Automatically copy the link to clipboard
- Recipients can view the recipe directly when opening the link

### Copy to Clipboard

Click the Copy button to:
- Copy the full recipe text to clipboard
- Formatted as plain text with all details
- Easy to paste into emails, messages, or documents

### Print

Click the Print button to:
- Open print-friendly view
- Use browser's print dialog
- Optimized layout for printing

### Download as PDF

Click the Download button to:
- Generate a PDF of the recipe
- Download automatically
- Formatted for easy reading and storage

---

## Data Management

### Data Storage

**Primary Storage:** Supabase (PostgreSQL database)
- All recipes stored in cloud
- Real-time synchronization
- Shared across all users

**Fallback Storage:**
- LocalStorage (browser-based)
- Used if Supabase is unavailable

### Backup & Export

**Manual Backup:**
1. Click your profile icon
2. Select "Backup Data"
3. All recipes exported as JSON
4. Copy from the modal or download

**Restore:**
1. Click "Restore Data"
2. Paste JSON backup
3. Click "Restore"
4. Data is imported to Supabase

### Delete All Recipes

**⚠️ Warning:** This action cannot be undone!

1. Click profile icon
2. Select "Delete All Recipes"
3. Confirm the action
4. All recipes are permanently deleted from Supabase

**Note:** This deletes ALL recipes for ALL users, not just your own.

---

## Tips & Best Practices

### Adding Recipes

✅ **Do:**
- Paste complete recipe text for best AI parsing results
- Include ingredient amounts and units
- Review and edit the parsed recipe before saving
- Add relevant tags for easy filtering

❌ **Don't:**
- Submit incomplete recipe information
- Approve recipes without testing them
- Delete the "Untested" tag manually from new recipes

### Organizing Recipes

- Use **multiple tags** to categorize recipes effectively
- Add **custom tags** for specific dietary needs or occasions
- Use **contributor filter** to find recipes from specific people
- Leverage **search** for quick ingredient or recipe name lookup

### Recipe Approval

- **Test the recipe** before approving
- Provide **feedback** to contributors if issues found
- Use the **edit feature** to fix minor issues before approving
- Remember: You need **2 independent approvals** for quality assurance

### Filtering

- Combine **tag filters** for precise results (e.g., "Breakfast" + "Sweet Stuff")
- Use **search** with filters for powerful queries
- Clear filters frequently to discover new recipes

---

## Troubleshooting

### Common Issues

**Can't see a recipe you just added:**
- Check if you're filtering by tags that exclude it
- Clear all filters and search

**Can't approve a recipe:**
- Verify you're not the contributor
- Check if you already approved it
- Ensure you're logged in as an authorized user

**Recipe parsing failed:**
- Ensure recipe text is complete
- Try reformatting the text
- Check that the URL is accessible
- Contact an administrator if issues persist

**Changes not saving:**
- Check your internet connection
- Verify you're logged in
- Check browser console for errors

---

## Support

For issues, questions, or feature requests:
- Contact your system administrator
- Check the browser console for error messages
- Verify your authorization status

---

*Last updated: December 24, 2025*
