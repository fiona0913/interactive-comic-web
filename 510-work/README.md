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

## ✅ Project Progress

- The project structure includes organized folders:
  - `static/` – for CSS, JavaScript, and image assets
  - `templates/` – for HTML templates
  - `app.py` – main Flask application file

- The homepage now includes:
  - Title animation for *One Hundred Years of Solitude*
  - Horizontal scrolling effect triggered by vertical scroll
  - Character portraits that appear one by one as the user scrolls
  - Modal popups with character information shown on image click

- The project runs locally without errors using:
  ```bash
  python app.py

