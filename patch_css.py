import os
import re

css_path = 'src/App.css'
with open(css_path, 'r') as f:
    content = f.read()

# Replace goldenrod and related colors
replacements = [
    ('goldenrod', '#3b82f6'),
    ('--accent-gold: #d4b45f;', '--accent-blue: #3b82f6;'),
    ('#ffcc00', '#60a5fa'), # lighter blue
    ('#ff9900', '#2563eb'), # darker blue
    ('rgba(255, 215, 0, 0.15)', 'rgba(59, 130, 246, 0.15)'),
    ('rgba(218, 165, 32, 0.5)', 'rgba(59, 130, 246, 0.5)'),
]

for old, new in replacements:
    content = content.replace(old, new)

# Let's also add some new styles at the bottom
new_styles = """

/* --- Modernization Overrides --- */
:root {
  --nav-height: 120px;
  --accent-blue: #3b82f6;
  --bg-dark: #0f172a;
  --surface-dark: #1e293b;
}

body {
  background-color: var(--bg-dark) !important;
}

/* Glassmorphism Navbar */
nav.navbar {
  background-color: rgba(15, 23, 42, 0.7) !important;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

nav.navbar.scrolled {
  background-color: rgba(15, 23, 42, 0.9) !important;
  backdrop-filter: blur(16px);
}

.project-card {
  background: var(--surface-dark);
}

.footer {
  background-color: var(--bg-dark);
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  background-image: linear-gradient(to top, rgba(59,130,246,0.05) 0%, transparent 100%);
}

::selection {
  background-color: var(--accent-blue);
  color: white;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-dark);
}
::-webkit-scrollbar-thumb {
  background: var(--accent-blue);
  border-radius: 4px;
}

/* Hero Title Gradient */
.hero-intro-text {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ffffff, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glowing Orb in background */
.hero-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: var(--accent-blue);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-20px) translateX(-50%); }
  60% { transform: translateY(-10px) translateX(-50%); }
}

.about-me-img-container {
  position: relative;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent-blue), #1e3a8a);
}

.about-me-img {
  display: block;
  border: 4px solid var(--bg-dark);
}

.section-title, .Feature-title, .About-Me-Title {
  background: linear-gradient(to right, #93c5fd, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
"""

content += new_styles

with open(css_path, 'w') as f:
    f.write(content)
print("CSS Updated Successfully!")
