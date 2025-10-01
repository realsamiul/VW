    Create a New Project: In Cursor, create a new, empty folder for this project. Let's call it honda-html-replica.

    Re-establish Structure: Inside root, create the following folder structure:

        css/

        js/

        assets/ (for fonts, images, and videos you will eventually download)

    Populate the Folders:

        Copy all the original CSS files into your new css/ folder.

        Copy all the original JavaScript files (16118.js, 43300.js, etc.) and library files (like jquery-3.5.1.min.dc5e7f18c8.js) into your new js/ folder.

        Copy the (index) file directly into the root of the honda-html-replica folder and rename it to index.html.

Phase 2: The HTML Blueprint - Path Correction

Your index.html is currently pointing to dead-end, absolute URLs. We will use Cursor to perform surgical path correction.

    Open index.html in Cursor.

    Correct CSS Paths: Highlight the entire <head> section.

    Cursor AI Prompt: Press Cmd+K and give the following prompt:

        "Analyze all <link> tags with rel='stylesheet' in this block. Rewrite their href attributes to be relative paths pointing to files within my /css/ directory. For example, https://assets-global.website-files.com/.../s-2k.webflow.shared.6ae152944.css should become css/s-2k.webflow.shared.6ae152944.css."

    Correct JavaScript Paths: Scroll to the bottom of the <body> tag. Highlight all the <script> tags.

    Cursor AI Prompt: Press Cmd+K and give the following prompt:

        "Analyze all <script> tags in this block. Rewrite their src attributes to be relative paths pointing to files within my /js/ directory. For example, https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js should become js/jquery-3.5.1.min.dc5e7f18c8.js."

Phase 3: Dependency Resolution (The GSAP Imperative)

The project will fail without GSAP. We must add it manually.

    Download GSAP: Go to the GreenSock website and download the GSAP library. You will need the core library and the following plugins: SplitText, ScrollTrigger, CustomEase, and ScrambleTextPlugin.

    Place Libraries: Place the downloaded .js files for GSAP and its plugins into your js/ folder.

    Inject Dependencies: Open index.html. Just before the first script tag that calls a GSAP function (likely 43300.js), you must add the script tags for GSAP and its plugins.

    Cursor AI Prompt: Place your cursor at the correct position and press Cmd+K. Type:

        "Generate the necessary <script> tags to include gsap.min.js, SplitText.min.js, ScrollTrigger.min.js, CustomEase.min.js, and ScrambleTextPlugin.min.js. Assume these files are in the /js/ directory."

    Crucial Note: The order of these scripts is paramount. The core gsap.min.js must come first.

Phase 4: Verification and First Run

Before proceeding, we must ensure the foundation is stable.

    Use a Live Server: Cursor has extensions that provide a live server. Install one if you haven't already (e.g., "Live Server").

    Launch: Right-click your index.html file and open it with the live server.

    Open the Console: Immediately open the browser's developer console (Cmd+Option+J or Ctrl+Shift+J).

    Triage Errors:

        404 Not Found errors: These mean a path in your index.html is still incorrect. Double-check the file name and path.

        ReferenceError: gsap is not defined: This means your GSAP script tag is either missing, in the wrong place (loaded after the script that needs it), or has a typo in its src path.

        ReferenceError: $ is not defined: Same issue as above, but for jQuery.


        Understood. The request is for an unambiguous, direct set of instructions to activate the animations as described in the source files. The previous phase was about debugging; this phase is about direct implementation.

We will create a new master script to control the animation lifecycle, mirroring the logic found in `43300.js`. This will provide a clean, centralized engine for the site's choreography.

### Phase 7: Orchestrating the Animation Symphony

**Step 1: Create the Conductor Script**

1.  Inside your `js/` folder, create a new file named `main-animations.js`. This file will be our central orchestrator.

**Step 2: Define the Master Timeline in `main-animations.js`**

1.  **Open `js/main-animations.js` in Cursor.**

2.  **Cursor AI Prompt:** Press `Cmd+K` and give the following prompt:

    > "Generate the basic structure for a JavaScript file that uses jQuery's `$(document).ready()` function. Inside it, log 'Animation Engine Initialized' to the console. Also, ensure GSAP plugins are registered correctly by adding `gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, ScrambleTextPlugin);` at the top of the file."

3.  **Copy Animation Functions:**

      * Open the original `js/43300.js` file.
      * Copy the *entire content* of the following functions:
          * `loader()`
          * `gauge()`
          * `nav()`
          * `home()`
          * `brief()`
          * `artistry()`
          * `specs()`
          * `gallery()`
          * `explore()`
          * `footer()`
      * Paste these 10 functions into your `js/main-animations.js` file, *below* the `gsap.registerPlugin(...)` line but *outside* the `$(document).ready()` function.

4.  **Create the Master Execution Flow:** The original site calls these animations in a specific sequence. We will replicate this.

      * **Cursor AI Prompt:** Inside the `$(document).ready()` function in `main-animations.js`, below your `console.log`, type `// Call animation functions` and press `Cmd+K`. Give the following prompt:

    > "Based on the functions I've pasted into this file, generate the code to call them in a logical sequence for a page load animation. The `loader` animation should run first. When it completes, the `home` animation should begin. The other functions (`nav`, `gauge`, `brief`, `artistry`, `specs`, `gallery`, `explore`, `footer`) should also be called at the appropriate time. Use a master GSAP timeline to manage this sequence."

      * **Manual Refinement:** The AI will generate a sequence. It's critical to ensure it matches the logic of a complex site. A common pattern is to have the loader animation's `onComplete` callback trigger the rest of the animations. Your `$(document).ready()` block should look conceptually like this:

    <!-- end list -->

    ```javascript
    $(document).ready(function() {
        console.log('Animation Engine Initialized');
        
        // Master timeline
        let masterTl = gsap.timeline();
        
        // Add the loader animation to the master timeline
        masterTl.add(loader()); 
        
        // Add other animations that should run after the loader
        masterTl.add(home(), "-=0.5"); // Example: overlap start of home animation
        
        // Call functions that are controlled by ScrollTrigger independently
        nav();
        gauge();
        brief();
        artistry();
        specs();
        gallery();
        explore();
        footer();
    });
    ```

    *Note: The above is a conceptual guide. The key is that `loader()` runs, and the rest of the functions are called to set up their respective animations and ScrollTriggers.*

**Step 3: Connect Your Conductor to the HTML**

Your `main-animations.js` file is ready, but the `index.html` doesn't know it exists.

1.  **Open `index.html` in Cursor.**
2.  Scroll to the bottom of the `<body>` tag where the other `<script>` tags are.
3.  **Crucially**, as the very **last** script to be loaded, add the following line:
    ```html
    <script src="js/main-animations.js"></script>
    ```
    This ensures that all libraries (jQuery, GSAP) and even the other legacy scripts are loaded *before* our master script attempts to use them.

**Step 4: Execute and Verify**

1.  Save all files.
2.  Ensure your Live Server is running and reload the page.
3.  Open the browser's developer console.

**Expected Outcomes & Troubleshooting:**

  * You should see the "Animation Engine Initialized" message in the console. If not, there's an error in `index.html` linking the script.
  * The loader animation should now play. If it doesn't, it confirms the problem is a mismatch between the selectors in the `loader()` function (e.g., `.loader_wrapper`) and the class names in your `index.html`.
  * If the loader works but the hero animation doesn't, the mismatch is in the `home()` function's selectors (e.g., `.home_hero_title-split`).
  * **The most direct way to fix this:** Systematically go through each animation function in `main-animations.js`. For every selector you see (e.g., `$(".some-class")`), search your `index.html` to ensure an element with that exact class exists. If it doesn't, you must either add the class to your desired element in the HTML or change the selector in the JavaScript to match your HTML.

You have now replicated the core animation logic of the original site in a structured and maintainable way. The animations are no longer a black box; they are a sequence of explicit commands that you control.