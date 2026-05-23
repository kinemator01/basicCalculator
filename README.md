# 🧮 EasyCalc — My First Vanilla Web Development Project  |  https://kinemator01.github.io/basicCalculator/calculator.html

EasyCalc is a fully functional client-side web application and my very first independent project built after 3 months of learning web development fundamentals. It features a clean, responsive layout designed to process core arithmetic operations dynamically within a styled browser window grid.

![HTML5](https://img.shields.io/badge/Language-HTML5-blue?style=flat-square)
![CSS3](https://img.shields.io/badge/Language-CSS3-orange?style=flat-square)
![JavaScript](https://img.shields.io/badge/Language-JavaScript%20(ES6)-yellow?style=flat-square)

---

## ⚡ Application Architecture

This project maps out the fundamental trinity of front-end engineering: data structure, visual layout presentation, and interactive state logic.

* **Semantic DOM Layout:** Structured using standalone container classes (`calculator_body`) and organized item groupings to manage the physical button groupings layout safely.
* **Inline Event Synchronization:** Leveraged vanilla JavaScript `onclick` hooks to capture hardware click coordinates and dynamically pipe string arguments directly into processing files.
* **Client-Side Compute Engine:** Built functional routines that use JavaScript’s runtime processing behaviors to parse mathematical string buffers seamlessly and return instantaneous math values to the read-only display.

---

## 💻 Tech Stack Breakdown

* **HTML5 Markup:** Handled text inputs, descriptive tags, form structures, and embedded inline script triggers.
* **CSS3 Interface Styling:** Managed global layout rules using relative margins (`margin: auto`), explicit width containment limits (`600px`), specific button font overrides, and smooth `border-radius` vector trimming.
* **JavaScript DOM Scripting:** Utilized direct DOM selector targets (`document.getElementById`) to dynamically append, erase, or compute variables within the display element's current view state.

---

## 🧠 Engineering Retrospective & Future Optimization Sprints

Looking at this code today with more engineering experience, here is how I plan to refactor the legacy code repository to meet enterprise architectural standards:

1. **Modern CSS Layout Engine:** Strip out archaic markup breaks (`<br>`) used for spatial positioning and replace them with a responsive, high-performance **CSS Grid** or **Flexbox** structural setup.
2. **Hardened Security Architecture:** Replace the risky JavaScript runtime evaluator (`eval()`) engine with an isolated mathematical parsing function or a safe custom array compiler to eliminate cross-site script validation vulnerabilities.
3. **Advanced DOM Event Listeners:** Decouple layout mechanics away from dirty inline HTML `onclick` properties, migrating to centralized event delegation loops using unified script listeners (`addEventListener`).
