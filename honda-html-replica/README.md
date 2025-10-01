# Honda S2000 Website Replica

A tribute to the engineering, design, and culture of Honda's iconic S2000 roadster. This website celebrates the timeless appeal of a car that continues to inspire enthusiasts worldwide.

## Features

- **Smooth Animations**: GSAP-powered animations with ScrollTrigger
- **Interactive Loader**: Counter animation with gauge bars
- **Parallax Effects**: Scroll-triggered parallax animations
- **Smooth Scrolling**: Lenis-powered smooth scrolling
- **Responsive Design**: Mobile and desktop optimized
- **Performance Optimized**: GPU acceleration and asset preloading

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Lenis (Smooth Scrolling)
- jQuery

## Project Structure

```
honda-html-replica/
├── css/           # All stylesheets
├── js/            # All JavaScript files + GSAP plugins
├── assets/        # All media assets
├── index.html     # Main HTML file
├── vercel.json    # Vercel deployment configuration
└── package.json   # Project metadata
```

## How to Run Locally

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`

## How to Test

1. Open the website in your browser
2. Check the browser console for any JavaScript errors
3. Test the loader animation (should count from 0-100)
4. Test smooth scrolling functionality
5. Test parallax effects by scrolling through the page
6. Test responsive design on different screen sizes

## Deployment

This project is configured for easy deployment to Vercel:

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to the project directory
3. Run: `vercel`
4. Follow the prompts to deploy

Or deploy directly from the Vercel dashboard by connecting your GitHub repository.

## License

MIT License - Feel free to use this project for educational purposes.

## Credits

- Original Honda S2000 website design
- GSAP for animations
- Lenis for smooth scrolling
- All assets and content are for tribute/educational purposes only