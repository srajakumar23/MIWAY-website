# MIWAY CMS User Guide

This guide explains how to update the visual content on the MIWAY website using the Admin Dashboard.

## 1. Accessing the Dashboard
1. Navigate to: `http://localhost:3000/admin/content`
2. You will see a list of editable content fields grouped by page (Home, Bundles, etc.).

## 2. Updating Images
The website uses **URLs** to display images. You cannot upload files directly in the editor; you must reference a hosted image or a local file path.

### Option A: Using Local Images (Recommended for Development)
1. Save your image file (e.g., `my-new-hero.jpg`) into the `public/` folder of the project.
2. In the Admin Dashboard, enter the path starting with `/`:
   - Example: `/my-new-hero.jpg`

### Option B: Using External URLs
1. Copy the direct link to an image (e.g., from Unsplash or a cloud host).
2. Paste the full URL into the field:
   - Example: `https://images.unsplash.com/photo-123...`

## 3. Key Content Fields

### 🏠 Home Page Slider
Search for: `home_hero_slide`

- **Images**: `home_hero_slide_1_image` (Slide 1), `_2_image` (Slide 2), `_3_image` (Slide 3)
  - *Recommended Size*: 1920x1080 pixels (Landscape)
- **Titles**: `home_hero_slide_1_title`
  - *Note*: Supports HTML. Use `<br />` for line breaks and `<span class="gradient-text">` for colored text.
- **Buttons**: `home_hero_slide_1_cta`

### 📦 Product Bundles
Search for: `bundles_item`

- **Images**: `bundles_item_1_image` (Pre-Primary), `_2_image` (Primary), `_3_image` (Middle)
  - *Recommended Size*: Vertical format (approx 3:4 aspect ratio), e.g., 600x800.
  - *Note*: If you leave this field empty, the site will automatically show the "Abstract Gradient" fallback.

## 4. Saving Changes
1. Click the **Save Changes** button next to the field you edited.
2. Refresh the main website (`http://localhost:3000`) to see the updates instantly.

## 5. Support
If you need to add *new* slides (e.g., Slide 4) or require design changes, please contact the developer, as this requires code updates.
