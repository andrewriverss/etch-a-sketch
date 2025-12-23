# Etch-A-Sketch

A browser-based drawing pad with a modern neon aesthetic, built to practice DOM manipulation and event handling in vanilla JavaScript. This project takes the classic mechanical toy concept and upgrades it with dynamic sizing, glowing colors, and "click-and-drag" drawing mechanics.

## Live Demo

**[Click here for a live demo](https://drewriverscode.github.io/etch-a-sketch/)**

## What I Learned

This project was a deep dive into how JavaScript interacts with the HTML DOM. Key takeaways included:

* **DOM Manipulation & Generation:** Instead of hard-coding the grid in HTML, I used JavaScript loops to dynamically generate rows and cells based on the set size.
* **Complex Event Listeners:** Implementing the "drag to draw" feature required tracking multiple mouse states (`mousedown`, `mouseover`, and `mouseup`) simultaneously to create a continuous line effect.
* **State Management:** Tracking the active application state—such as the `currentColor`, and toggling between "Draw" and "Erase" modes—to ensure the UI controls match the cursor behavior.
* **Input Validation:** Handling the grid resizing logic involves validating user input (ensuring the number is between 2-100) to prevent performance crashes or layout breaking.
* **Dynamic Styling:** Applying inline styles via JavaScript not just for background colors, but also for adding `box-shadow` to create the neon glow effect on painted cells.
* **CSS Flexbox:** Utilizing Flexbox to keep the main layout responsive and the control panel aligned, ensuring the grid stays centered regardless of the screen size.

## Purpose

This project was created as part of **The Odin Project's Foundations curriculum**. It served as a focused exercise to strengthen JavaScript fundamentals and master the concept of **creating dynamic user interfaces**. The main goal was to move beyond static webpages and build a truly interactive application where the structure (the drawing grid) can be instantly generated, modified and cleared using pure JavaScript logic.