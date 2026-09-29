# SuckerPunch Pickles - Exact Homepage Clone

An exact, pixel-perfect clone of the [SuckerPunch Pickles](https://suckerpunchpickles.com/) home page using all local assets and pristine styling, typography, and animations.

## How to Run

### Option 1: One-Click Launcher (Windows)
Double-click `start.bat`. It will start the local HTTP server and automatically launch the website in your default browser at `http://localhost:3000`.

### Option 2: Using Node.js
Run the following command in this directory:
```bash
node server.js
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Direct File Opening
You can directly double-click `index.html` (or `suckerpunchpickles.com/index.html`) to open the site directly in your web browser (`file:///...`).

---

## What was Fixed & Restored

1. **Missing & Corrupted Assets Fetched**:
   - High-resolution hero desktop and mobile banners (`one-two-punch-hero-desktop_2000x.png`, `SweetBBQ-reel_static-mobile_2000x.png`, etc.).
   - Product package images, jars, shots, pouches, and transparent PNGs.
   - SVG icons (`check.svg`, badges, arrows, logos).
   - High-quality brand typography fonts (`NexaRegular`, `NexaBold`, `NexaBlack`, `NexaBlackItalic`, `VodkaBrushBold`, `SteelfishRg-Regular`, `SteelfishRg-Bold`, `NexaRustSans-Black1`, `NexaRustSans-Black2`).

2. **Clean Production Bundles Restored**:
   - Replaced damaged/beautified scripts with the pristine original production bundle (`bundle.js`, `bundle.css`, `header.js`, `header.css`, `hero-carousel.css`).
   - Fixed corrupted optional chaining (`?.`) and nullish coalescing (`??`) syntax errors that were breaking JavaScript execution.

3. **Fully Functional Animations & Interactivity**:
   - **Hero Carousel**: Swiper carousel with autoplay, touch swipe, and navigation controls.
   - **Sticky Navigation Bar & Header**: Smooth sticky header transitions with logo, navigation links, and search drawer.
   - **Cart Drawer**: Smooth sliding side drawer with backdrop, empty state graphics, and responsive mobile/desktop controls.
   - **Athlete & Product Sliders**: Swiper touch sliders with next/prev buttons for featured products and athlete endorsements.
   - **Responsive Breakpoints**: Custom Tailwind breakpoints matching the live site from mobile (370px) to ultra-wide (1900px).
   - **Disabled Aggressive 3rd-Party Tracking Popups**: Blocked external marketing popups (Wisepops/Privy) so the clone displays clean and uninterrupted.
