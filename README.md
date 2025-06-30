# Fit With Nature

A cutting-edge 3D fitness coaching web application featuring stunning character animations and smooth transitions built with MERN stack, Three.js, and GSAP.

## 🌟 Live Demo

**[View Live Application](https://fit-with-nature.onrender.com)**

![Fit With Nature Demo](./demo-screenshot.png)
_Real-time 3D character transitions with GSAP timeline animations_

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Animation System](#animation-system)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

**Fit With Nature** is a modern fitness coaching platform that combines the power of 3D visualization with smooth animations to create an immersive user experience. Built with React Three Fiber and GSAP, the application features real-time character transitions between different exercise demonstrations.

### 🎯 What Makes It Special

- **3D Character Animations**: Seamless transitions between running and situps exercises
- **Advanced Timeline Control**: GSAP-powered crossfade effects with perfect timing
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Professional UI**: Clean, modern interface with custom fonts and imagery

## Key Features

### 🎬 3D Animation System

- **Character Transitions**: Smooth crossfade between exercise characters
- **GSAP Timeline Control**: Sophisticated positioning and timing management
- **Mesh Visibility Optimization**: Prevents rendering conflicts and blocking issues
- **Mobile-Optimized**: Responsive 3D rendering across all devices

### 🎨 Visual Experience

- **Wireframe Aesthetics**: Beautiful blue-tinted 3D models
- **Custom Typography**: SantElia Script font integration
- **High-Quality Images**: Professional fitness photography
- **Smooth Interactions**: OrbitControls for 3D scene navigation

### 🏗️ Technical Excellence

- **TypeScript**: Full type safety across client and server
- **Modern React**: Hooks, refs, and proper lifecycle management
- **Express Backend**: Robust server architecture
- **Production Ready**: Optimized builds and deployment configuration

## Technologies Used

### Frontend

- **React 18** with TypeScript
- **Three.js & React Three Fiber** - 3D rendering
- **GSAP & @gsap/react** - Advanced animations
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework

### Backend

- **Node.js & Express** - Server framework
- **TypeScript** - Type-safe backend development

### Deployment

- **Render** - Cloud hosting platform
- **Concurrently** - Multi-process development

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Quick Start

1. **Clone the repository:**

```bash
git clone https://github.com/gina-t/fit-with-nature.git
cd fit-with-nature
```

2. **Install dependencies:**

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
cd ..
```

3. **Environment Setup:**

```bash
# Create server environment file
echo "PORT=3001\nNODE_ENV=development" > server/.env.development
```

4. **Start development:**

```bash
npm run dev
```

### 🚀 Development URLs

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001
- **Full App**: http://localhost:5173

## Usage

### 🚀 Live Application

**[Fit With Nature - Live Demo](https://fit-with-nature.onrender.com)**

### 📹 Functionality Demo

**Watch the app in action:**

[🎥 **View Screen Recording**](https://drive.google.com/file/d/1FxNAbRBuq05jhW8et47PoiBp-Eux_cuZ/view?usp=sharing)

_Click the link above to see smooth 3D character transitions and GSAP animations_

### Key Features Demonstrated:

- **3D Character Transitions**: Seamless crossfade between running and situps
- **GSAP Timeline Control**: Sophisticated animation timing
- **Mobile Responsiveness**: Touch-friendly 3D interactions
- **Smooth Performance**: Optimized rendering and transitions

### 🎮 How to Use:

1. **Visit the live app** at the link above
2. **Interact with 3D scene** using mouse/touch to rotate and zoom
3. **Watch automatic transitions** every 5 seconds between exercises
4. **Experience smooth animations** powered by GSAP timelines

## Animation System

### GSAP Timeline Architecture

```typescript
// Sophisticated positioning control
tl.addLabel('transitionStart', 0);
tl.to(currentCharacter, { opacity: 0 }, 'transitionStart');
tl.to(nextCharacter, { opacity: 1 }, 'transitionStart+=0.6');
```

### Key Animation Features

- **Crossfade Transitions**: 1.2-second smooth opacity changes
- **Visibility Management**: Prevents mesh blocking during transitions
- **Timeline Callbacks**: Precise character switching control
- **Mobile Optimization**: Adjusted timing for touch devices

## Performance

### Bundle Analysis

- **Main Bundle**: ~1.3MB (385KB gzipped)
- **Load Time**: ~3 seconds on average connection
- **3D Assets**: Optimized GLTF models
- **Image Optimization**: WebP format where supported

### Optimization Features

- **Tree Shaking**: Unused code elimination
- **Asset Compression**: Gzip compression enabled
- **Lazy Loading**: Components loaded on demand
- **Memory Management**: Proper Three.js cleanup

## Troubleshooting

### Common Issues

**3D Models Not Loading:**

```bash
# Ensure models are in public/models/
ls public/models/characterOne.glb
ls public/models/characterTwo.glb
```

**Animation Lag:**

```bash
# Check GSAP installation
npm list gsap @gsap/react
# Clear cache and reinstall
rm -rf node_modules package-lock.json && npm install
```

**Build Warnings:**

```bash
# Large chunk size is normal for 3D apps
# To suppress warnings, increase chunkSizeWarningLimit in vite.config.ts
```

**iOS/Mobile Issues:**

- Ensure WebGL is supported
- Check for iOS-specific Three.js limitations
- Test touch interactions on actual devices

### Debug Mode

```typescript
// Enable debug logging in ThreeScene.tsx
console.log('Current ref:', currentRef ? 'found' : 'missing');
console.log('Transition complete');
```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Test 3D animations across devices
- Maintain GSAP timeline performance
- Update documentation for new features

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Dr. Gina Tsanaktsidis**  
_Full Stack Developer & Ophthalmologist_

- 📧 Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)
- 🐙 GitHub: [@gina-t](https://github.com/gina-t)
- 🌐 Portfolio: [ginadrcoder.net](https://ginadrcoder.net)

---

### 🙏 Acknowledgments

- **University of Sydney Coding Boot Camp** - Excellent curriculum and support
- **Three.js Community** - Amazing 3D web development resources
- **GSAP Team** - Best-in-class animation library
- **React Three Fiber** - Seamless React/Three.js integration

---
