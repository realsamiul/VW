# Honda S2000 Website Replica

A faithful recreation of the Honda S2000 website featuring advanced animations, smooth scrolling, and interactive elements built with GSAP (GreenSock Animation Platform).

## Description

This project recreates the Honda S2000 website with all its original animations and interactions. The site features:

- **Advanced Loader Animation**: Custom gauge animation with progress counter
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth scroll experience
- **Parallax Effects**: Multi-directional parallax scrolling for depth
- **Interactive Elements**: Hover effects, scroll-triggered animations, and transitions
- **Responsive Design**: Optimized for desktop and mobile devices
- **GSAP Animations**: Professional-grade animations using GreenSock Animation Platform

## How to Run

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd honda-html-replica

# Start a local server
python -m http.server 8000

# Open your browser and visit:
# http://localhost:8000
```

### Option 2: Using main.py (if available)
```bash
# If you have a main.py script in the project root
python main.py
```

### Option 3: Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## How to Test

### Option 1: Using test_main.py (if available)
```bash
# If you have a test_main.py script in the project root
python test_main.py
```

### Option 2: Manual Testing
1. **Loader Animation**: Refresh the page to see the gauge loader animation
2. **Smooth Scrolling**: Scroll through the page to test Lenis smooth scrolling
3. **Parallax Effects**: Look for elements with `data-scroll-speed` attributes moving at different speeds
4. **Scroll Triggers**: Scroll to different sections to trigger various animations
5. **Interactive Elements**: Hover over buttons and interactive elements
6. **Console Testing**: Open browser dev tools and check for any JavaScript errors

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

### Performance Testing
- Test on different screen sizes (desktop, tablet, mobile)
- Check animation performance in browser dev tools
- Verify smooth 60fps animations

## Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactive functionality
- **GSAP**: Animation library with plugins:
  - ScrollTrigger
  - SplitText
  - CustomEase
  - ScrambleTextPlugin
- **Lenis**: Smooth scrolling library
- **jQuery**: DOM manipulation (legacy support)

## Project Structure

```
honda-html-replica/
├── index.html          # Main HTML file
├── css/               # Stylesheets
│   ├── 43384.css     # Main styles
│   └── ...           # Additional CSS files
├── js/               # JavaScript files
│   ├── 16118.js     # Main script loader
│   ├── 43300.js     # Core animations
│   ├── 43416.js     # Loader animations
│   ├── 43480.js     # Parallax effects
│   └── ...          # Additional JS files
├── assets/           # Media files
│   └── *.mp4        # Video assets
└── README.md         # This file
```

## Notes

- The project uses ES6 modules for script loading
- All animations are optimized for performance
- The loader animation includes a reverse effect for smooth transitions
- Parallax effects are disabled on mobile devices for better performance
