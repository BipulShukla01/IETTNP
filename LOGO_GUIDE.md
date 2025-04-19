# How to Add Your Photo as a Logo

This guide will help you add your own photo or image as the logo for the Bundelkhand University IET Training & Placement Cell website.

## Step 1: Prepare Your Logo Image

1. **Select or create your logo image**
   - Choose a high-quality image that represents your institution
   - Ideally, use an image with a transparent background (PNG format)
   - A square aspect ratio works best (e.g., 200x200 pixels)

2. **Optimize your image**
   - Resize the image to an appropriate size (recommended: 200x200 to 500x500 pixels)
   - Compress the image to reduce file size without losing quality
   - You can use tools like Adobe Photoshop, GIMP, or online services like TinyPNG

## Step 2: Add the Logo to Your Project

1. **Rename your image file**
   - Rename your logo image to `logo.png` (or another simple name)

2. **Place the file in the public directory**
   - Copy your logo file to the `public` folder in your project
   - Path: `c:/Users/shukl/Desktop/tnp/public/logo.png`

## Step 3: Verify the Logo Implementation

The website is already set up to use an image file as the logo. The following files have been configured:

1. **src/assets/logo.jsx**
   - This component is set up to display an image from `/logo.png`
   - If you used a different filename, update the `src` attribute in this file

2. **index.html**
   - The favicon is set to use the same logo image
   - This will display your logo in browser tabs

## Step 4: Test the Logo Display

1. **Start your development server**
   ```
   npm run dev
   ```

2. **Check the logo in these locations**:
   - Navbar (top left)
   - Footer (about section)
   - Hero section (homepage)
   - Browser tab (favicon)

3. **Adjust if needed**:
   - If the logo is too large or small, you can adjust the width and height parameters in:
     - Navbar.jsx (around line 34)
     - Footer.jsx (around line 15)
     - Hero.jsx (around line 11)

## Troubleshooting

If your logo doesn't appear:

1. **Check the file path**
   - Make sure the logo is in the correct location (public folder)
   - Verify the filename matches what's in the code

2. **Clear browser cache**
   - Press Ctrl+F5 or Cmd+Shift+R to force refresh

3. **Check for errors in the console**
   - Open browser developer tools (F12) and look for any errors

4. **Try a different image format**
   - If PNG doesn't work, try JPG or WebP

## Additional Customization

If you want to further customize how the logo appears:

1. **Adjust logo size in specific components**:
   - Open the component file (Navbar.jsx, Footer.jsx, or Hero.jsx)
   - Find the `<Logo />` component
   - Modify the width and height props

2. **Add CSS styling**:
   - You can add additional className props to the Logo component
   - Create custom CSS classes in your stylesheet

3. **Different logos in different places**:
   - If you want different versions of your logo in different places,
     you can modify the Logo component to accept a `variant` prop