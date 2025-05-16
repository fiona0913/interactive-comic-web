# Interactive Comic Website

An immersive web-based comic that combines storytelling and interactivity through animations, branching paths, and responsive UI.

---

## Project Objectives

- Design and develop an interactive comic that allows users to engage with the story through animations, branching paths, and responsive UI.
- Bridge the gap between static comics and interactive media by leveraging modern web technologies.

---

## Target Users and Their Needs

**Target Audience:**  
- Comic artists, illustrators, and visual storytellers seeking a customized digital platform to showcase their narrative works.
- Creative studios or publishing companies looking to transform traditional comics into interactive web experiences.
- Independent creators who want a unique and immersive way to present their stories online beyond static portfolios.

**User Needs:**  
- A customizable and visually compelling storytelling platform tailored to their artwork and narrative style.
- Easy-to-update structure that allows integration of various media (images, animations, etc.).
- Interactive features that elevate the storytelling (e.g., scroll-based animations).

---

## Key Deliverables

- Original illustrated comic with interactive story branches.
- Fully designed UI elements, animations, and visual assets.
- Responsive, deployed web application using HTML/CSS/JavaScript.
- Deployment on a public platform.

---

## Special Constraints

- The website must be responsive and optimized for performance.
- Smooth and intuitive user interaction is a core priority.

---

## Expected Outcome

- A working interactive comic website that users can explore online.
- A creative project showcasing the fusion of narrative, design, and web technology.
- A valuable portfolio piece demonstrating skills in storytelling, UX/UI, and front-end development.

---

## Tech Stack
- **HTML5 & CSS3** – Structuring and styling the interactive comic layout.
- **JavaScript (ES6+)** – Core interactivity and logic handling.
- **ScrollTrigger / Locomotive Scroll** – Scroll-based storytelling and parallax effects.
- **Lottie/Web Animations API** – Integrating vector-based animations exported from After Effects.

---

## Client info
yuqiao17@uw.edu (Diana Ding)

# Project Planning: Interactive Comic Website

## Project Scope
This project aims to develop an interactive website that introduces the characters of *One Hundred Years of Solitude* through illustration and animation. By combining visual storytelling with non-linear navigation, the website provides users with an immersive and intuitive way to explore the Buendía family tree and the novel’s complex character relationships. The focus is on front-end development, responsive design, and interaction logic.

## Target Users
- Readers and fans of *One Hundred Years of Solitude*
- Visual learners who benefit from graphic and animated storytelling
- Young users interested in interactive literature experiences
- Educators and students seeking accessible ways to explore literary characters

## Features
- **Interactive Character Map**: Illustrated portraits of characters that expand with key info and relationship lines
- **Micro-animations**: Smooth transitions and hover/click effects for engaging interactions
- **Responsive Design**: Fully usable on both desktop and mobile browsers

## Timeline

| Phase                  | Timeframe      | Deliverables                                   |
|------------------------|----------------|------------------------------------------------|
| 🔍 Planning & Design   | Week 1         | Finalize features, wireframes, and illustration roadmap |
| 💻 Development Sprint 1| Week 2–3       | Build character map and basic navigation structure |
| ✨ Development Sprint 2| Week 4–5       | Add animation logic and responsive layout      |
| 🎨 Visual Integration  | Week 6         | Add illustrated assets and test animations     |
| 🚀 Launch & Review     | Week 7         | Cross-browser testing, final polish, and deployment |

*Note: Timeline is flexible based on content and illustration progress.*

## Contact Information
- **Developer**: Diana Ding ([yuqiao17@uw.edu](mailto:yuqiao17@uw.edu))
- **Illustration & Design**: Diana Ding
- **GitHub Repository**: [https://github.com/DianaDing1017/510-work](https://github.com/DianaDing1017/510-work)




## 🔧 Developer Progress Update

### ✅ Virtual Environment Setup
A dedicated Conda environment named `comic_env` has been created and activated for this project. Required packages like Flask have been installed.

To recreate the environment:

```bash
conda create -n comic_env python=3.9
conda activate comic_env
pip install flask
```
## ✅ Project Progress

- The project structure includes organized folders:
  - `static/` – for CSS, JavaScript, and image assets
  - `templates/` – for HTML templates
  - `app.py` – main Flask application file

- The homepage now includes:
  - Title animation for *One Hundred Years of Solitude*
  - Horizontal scrolling effect triggered by vertical scroll
  - Character portraits that appear one by one as the user scrolls
  - Modal popups with character information shown on image click.

- The project runs locally without errors using:
  ```bash
  python app.py

## ✅ **Clent‘s Reviewed Features**

- **Loading Animation**  
  A small animation plays when the page loads, adding a fun visual touch to the site.

- **Homepage Title**  
  The homepage displays the title *One Hundred Years of Solitude* with custom typography and decorative illustrations that match the novel’s vibe.

- **Prologue Rain Effect**  
  A rain GIF has been added behind the background of the prologue. The prologue text, its title, and the Chapter 1 title are laid out clearly and logically.

- **Chapter 1 Content**  
  Chapter 1 (*The Miracle of Ice*) has been implemented with complete text layout and scrolling illustration effects.

- **Chapter 1 Character Cards**  
  Includes 4 interactive character cards (José Arcadio Buendía, Úrsula, Melquíades, Colonel Aureliano Buendía) with front/back flip functionality and hover/click animations.

- **Sidebar Functionality**  
  The sidebar generates animations based on scrolling and chapter position, with interactive effects that respond smoothly.

---

## ✅ **Approval/Change Requests**

| Feature                      | Status             | Notes                                                                                                             |
|------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------|
| Homepage Title Animation     | ✅ Approved        | Smooth and natural; meets expectations.                                                                           |
| Chapter 1 Text Section       | 🛠 Needs revision  | Suggest adjusting paragraph spacing and line height to improve readability.                                       |
| Character Card Flip Function | 🛠 Needs revision  | Flip works well, but suggest adding a small icon to hint “click to flip” for clearer guidance. Also continue refining the card UI design. |

---

## 🐞 **Bugs Found**

- **Issue:** Sometimes when the page loads, all images overlap each other. Users need to refresh a few times or resize the window to fix it. The image animations are not fully stable yet.

- **Question:** While the character cards help introduce Chapter 1’s characters, is there a more effective way to help readers remember the names and what the characters do?

---

## 💡 **Improvement Suggestions**

- The website is still mostly visual in its interaction. It would be great to add some **music and sound interactions** to enhance engagement and fun.

---

## 🔄 **Reflection**

The developer has successfully implemented the homepage animation, Chapter 1 narrative content, and interactive character cards as core features. The overall visual and functional direction aligns well with expectations. Minor polishing is still needed for responsiveness and UX cues (e.g., adding a flip hint icon). The next priorities are completing Chapter 2 and 3 content, expanding the multi-chapter character card system, and further optimizing the mobile experience.

---

# 📝 TECHIN510 – Interactive Comic Website Submission (Week 7)

## 📌 Meeting Notes – Week 7

### ✅ Feature Progress

- Developed **Chapter 2** content and added new character cards
- Refined **character card illustration style** to better match overall web aesthetics
- Redesigned the **scroll progress bar**, now featuring a **goldfish icon** as a symbolic reference from *One Hundred Years of Solitude*
- Implemented a **rain ambience audio toggle** at the bottom-right corner of the webpage to enrich the reading experience
- Improved **letter spacing** in Chapter 1 for better text readability
- Updated the **README.md** to include:
  - Setup instructions for **Windows** and **macOS**
  - Usage guidance
  - Project progress summary
  - Known issues

---

### 💬 Client Feedback (Fiona)

- On **Windows (>800px width)**, the spacing between text and images in Chapter 2 is too large, which affects the reading experience
- The **bottom of the webpage** feels unfinished — Fiona suggested adding a **“To Be Continued”** footer with stronger visual design

---

### 🛠 Feedback Handling

- [ ] Layout spacing on Windows is identified and scheduled for improvement
- [ ] “To Be Continued” footer will be designed and added in the next iteration
- [x] All other key feedback items addressed (including UI consistency and interactivity improvements)

---

### 🧾 README.md Updated Summary

- ✅ Cross-platform (Windows/macOS) setup and run instructions
- ✅ Usage overview for local development
- ✅ Development progress and feature highlights
- ✅ Known issues documented for reviewers
- ✅ Technologies and file structure explained

---
## ⚙️ Quick Start Guide

### 1. Clone the Repository

```bash
git clone https://github.com/fiona0913/interactive-comic-web
cd interactive-comic-web
```
### 2. Create and Activate a Virtual Environment
- On macOS / Linux:
 ```bash
python3 -m venv .venv
source .venv/bin/activate
 ```
- Windows:
 ```bash
python -m venv .venv
.venv\Scripts\activate
 ```
- Install Dependencies
```bash
pip install -r requirements.txt
 ```
- Run the Application
```bash
python app.py
```
 ```

 ```

```
