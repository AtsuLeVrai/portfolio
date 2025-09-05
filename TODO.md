# Portfolio "AtsuLeVrai" - A Visual Narrative Experience

*Inspired by Beat Saber's legendary maps "you" by Swifter and "Lifelike" by nasafrasa from Extra Sensory II*

> **"Talk to yourself but don't listen to yourself"**  
> — The story of an autodidact developer's breakthrough

---

## 🎭 **The Story**

This portfolio tells the story of a developer's journey from **CM2 Scratch experiments** to **backend mastery** — a
narrative of perfectionism, self-doubt, and finally breaking through to create something extraordinary.

Like Swifter's "you" represents "the end of a chapter and the start of a new one," this portfolio marks my transition
from **hiding behind perfectionism** to **shipping with confidence**.

---

## 🎵 **Visual Narrative Structure**

### **Act I: Loading - "Buildup Chaos" (Inspired by "you" 1:24-1:36)**

```
🌸 Luminous flower blooms in darkness
💥 Energy explosions cascade around the viewer  
✨ Floating particles gather momentum
🌿 Veins of light spread across the void
🔮 Buildup sphere pulses with anticipation
```

**Technical Implementation:**

- **Three.js + R3F**: Custom shaders for luminous flower geometry
- **@react-three/postprocessing**: Bloom effects for energy explosions
- **React Spring (via @react-three/drei)**: Staggered particle animations with easing curves
- **Howler.js**: Audio-reactive buildup sync (even without music)

### **Act II: Revelation - "Glass Awakening" (Inspired by "you" 0:30-1:24)**

```
⚡ Sudden flash reveals the developer's workspace
🪟 Glass-like surfaces reflect code snippets
✨ Translucent elements showcase tech stack
🌌 Ambient lighting creates dreamy atmosphere
```

**Hero Section:** Introduction with glassmorphism effects, floating code blocks, and gentle camera movements creating
an "out of body" developer experience.

### **Act III: Immersion - "Living Portfolio" (Inspired by "Lifelike")**

```
🌱 Environment breaks apart to reveal projects
☀️ Day/night cycle during skills showcase
🌧️ Ambient weather effects during transitions
💎 Realistic materials with proper reflections
🎯 Perfect scroll-interaction synchronization
```

**About & Skills:** Dynamic environment that evolves - from confined dark space to open landscapes. Skills bars grow
like organic matter, achievements bloom like flowers.

### **Act IV: The Drop - "Project Showcase Explosion"**

```
🚀 Complete environment transformation
🎆 Visual effects with particle systems
⚡ Real-time shader effects
🌈 Color explosions synchronized to scroll interactions
🔥 Maximum visual impact showcase
```

**Projects Section:** Each project triggers a complete scene change with cinematic transitions. GitHub stats materialize
as 3D data visualizations.

### **Act V: Outro - "Personal Message"**

```
🌅 Peaceful conclusion environment
💬 "Talk to yourself but don't listen to yourself"
📧 Contact form with subtle animations
🕊️ Gentle fade to leave lasting impression
```

---

## 🎨 **Design Philosophy**

### **Color Palette: "Floral Awakening"**

```css
:root {
    --bloom-pink: #ffb3d9;
    --soft-rose: #ffd6cc;
    --warm-beige: #f5e6d3;
    --glass-white: rgba(255, 255, 255, 0.1);
    --energy-coral: #ff9999;
    --ambient-cream: #fff8e1;
}
```

### **Typography & Motion**

- **Headings**: Bold, confident statements that materialize with particle effects
- **Body**: Readable, flowing text that animates organically
- **Code**: Monospace elements that glitch into existence
- **Motion**: Every animation serves the narrative - no gratuitous effects

---

## 🚀 **Development Phases**

### **Phase 1: Foundation**

- [x] Next.js 15 setup with TypeScript
- [x] Three.js scene architecture with R3F
- [x] Basic shader materials setup
- [x] Scroll-based animation timeline with Lenis

### **Phase 2: Loading Experience**

- [x] Luminous flower geometry with custom shaders
- [x] Energy explosion particle systems using Points
- [x] Buildup sphere with pulsing effects
- [x] Animated light veins with instanced meshes

### **Phase 3: Main Narrative**

- [x] Glass revelation transition with postprocessing
- [x] Environment breaking/rebuilding system
- [x] Dynamic lighting with day/night cycles
- [x] Project showcase transformations

### **Phase 4: Polish & Optimization**

- [ ] Performance optimization for mobile
- [ ] Accessibility options (reduced motion)
- [ ] SEO optimization for portfolio discoverability
- [ ] Analytics integration for visitor insights

---

## 🎯 **Target Experience Goals**

**First Impression:** "What the fuck is this madness?"  
**During Navigation:** "This is the most beautiful portfolio I've ever seen"  
**After Viewing:** "I need to hire this person immediately"

### **Performance Targets**

- **Loading**: < 3 seconds for initial scene
- **FPS**: Solid 60fps on desktop, 30fps mobile
- **Bundle**: < 2MB initial, code splitting for effects
- **Accessibility**: Full keyboard navigation + reduced motion support

---

## 🎮 **Beat Saber Integration Elements**

### **Direct Inspirations from "you" by Swifter**

- Darkness to light revelation sequence
- Particle buildup with energy accumulation
- Instant scene transitions at climax moments
- Personal message delivery in outro

### **Direct Inspirations from "Lifelike" by nasafrasa**

- Environment breaking and reforming
- Day/night cycle transitions
- Realistic materials and reflections
- Peaceful contemplative moments

### **Technical Parallels to Vivify Mod**

- Custom 3D models and shaders
- Real-time environment manipulation
- Perfect scroll-visual synchronization
- Cinematic camera movements

---

## 🔧 **Optimized Tech Stack & Dependencies**

### **Core 3D Framework**

```json
{
  "@react-three/fiber": "^9.3.0",
  "@react-three/drei": "^10.7.4",
  "@react-three/postprocessing": "^3.0.4",
  "three": "^0.179.1",
  "postprocessing": "^6.37.7"
}
```

### **Animation & Interaction**

```json
{
  "framer-motion": "^12.23.12",
  "@studio-freight/lenis": "^1.0.42",
  "maath": "^0.10.8",
  "simplex-noise": "^4.0.3"
}
```

### **State Management & Utils**

```json
{
  "zustand": "^5.0.8",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

### **Development Tools**

```json
{
  "leva": "^0.10.0",
  "@types/three": "^0.179.0"
}
```

### **REMOVED DEPENDENCIES (Problematic)**

❌ **animejs** - Conflicts with Three.js animation system  
❌ **howler** - Audio not needed for this project  
❌ **tw-animate-css** - Redundant with Framer Motion

### **ADDED DEPENDENCIES (Recommended)**

✅ **@studio-freight/lenis** - Smooth scroll for narrative progression  
✅ **@types/three** - Better TypeScript support

---

## 💻 **Claude Code Integration Instructions**

### **Project Structure to Generate**

```
src/
├── components/
│   ├── Experience/           # Main 3D scenes
│   │   ├── ActI_Loading.tsx
│   │   ├── ActII_Revelation.tsx
│   │   ├── ActIII_Immersion.tsx
│   │   ├── ActIV_Showcase.tsx
│   │   └── ActV_Outro.tsx
│   ├── Shaders/             # Custom GLSL shaders
│   │   ├── LuminousFlower.ts
│   │   ├── EnergyExplosion.ts
│   │   └── GlassMaterial.ts
│   ├── UI/                  # Overlay components
│   │   ├── LoadingScreen.tsx
│   │   ├── Navigation.tsx
│   │   └── ContactForm.tsx
│   └── Utils/               # Helpers
│       ├── ScrollManager.ts
│       ├── AnimationTimeline.ts
│       └── PerformanceMonitor.ts
├── stores/
│   └── portfolioStore.ts    # Zustand state management
├── styles/
│   └── globals.css          # Tailwind + custom CSS variables
└── pages/
    └── index.tsx            # Main portfolio page
```

### **Key Development Priorities**

1. **Start with Scene Architecture**: Create the basic R3F Canvas setup with proper camera controls
2. **Implement Scroll System**: Set up Lenis smooth scroll with progress tracking
3. **Build Act I First**: Focus on the loading experience with particle systems
4. **Progressive Enhancement**: Add each act incrementally with proper fallbacks
5. **Performance First**: Use React.memo, useMemo, and proper disposal patterns

### **Shader Development Guidelines**

- Use **@react-three/drei's shaderMaterial** for custom materials
- Keep shaders simple and performant for mobile devices
- Use **noise functions** from simplex-noise for organic effects
- Implement **LOD system** for complex geometries

### **Animation Philosophy**

- **Primary**: Use @react-three/fiber's useFrame for 3D animations
- **Secondary**: Framer Motion for UI elements and page transitions
- **Scroll**: Lenis for smooth narrative progression
- **NO AnimeJS**: Conflicts with Three.js rendering loop

---

## 📈 **Success Metrics**

**Engagement:**

- Time on site > 3 minutes average
- Full experience completion rate > 70%
- Social sharing rate > 15%

**Professional Impact:**

- Freelance inquiries increase 300%
- GitHub profile views spike
- Industry recognition and features

**Technical Achievement:**

- Smooth 60fps on 80% of devices
- Loading time under performance budget
- Zero accessibility violations

---

## 💭 **Personal Statement**

At 17, I've been coding for nearly a decade - from **Scratch in CM2** to **backend mastery today**. I've always been my
own worst critic, perfectionism keeping projects in the shadows.

This portfolio represents my **breakthrough moment** - like Swifter finally collaborating with Vivify after years of
dreaming. It's time to stop talking to myself and start showing the world what I can create.

**Backend Engineer. Trading Aspirant. Future Game Maker.**  
*Currently exploring Zig while building the next generation of Discord tooling.*

---

## 🤝 **Collaboration & Opportunities**

I'm seeking:

- **Freelance Backend Projects** - Scalable APIs and infrastructure
- **Trading Technology** - Building financial tools and systems
- **Game Development** - Backend services for multiplayer games
- **Open Source** - Contributing to impactful JavaScript ecosystem tools

**Let's build something extraordinary together.**

---

<div align="center">

*"Talk to yourself but don't listen to yourself"*  
**— AtsuLeVrai, 2025**

</div>