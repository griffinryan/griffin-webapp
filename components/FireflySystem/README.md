# FireflySystem Component

A Three.js-based particle animation system that replaces the purple rain animation with interactive fireflies.

## Usage

```jsx
import FireflyAnimation from '../components/FireflySystem';

// Default firefly theme
<FireflyAnimation />

// Purple theme (matching original rain)
<FireflyAnimation 
    usePurpleTheme={true}
    fireflyCount={100}
    bloomStrength={3.0}
/>

// Custom configuration
<FireflyAnimation 
    fireflyCount={60}
    bloomStrength={2.0}
    mouseRadius={200}
    mouseForce={0.4}
    fogColor={0x0a0a2e}
    fogNear={50}
    fogFar={800}
/>
```

## Props

- `fireflyCount` (number): Number of fireflies (default: 80)
- `usePurpleTheme` (boolean): Use purple colors like the original rain (default: false)
- `bloomStrength` (number): Glow intensity (default: 2.5)
- `mouseRadius` (number): Mouse interaction radius (default: 150)
- `mouseForce` (number): Mouse attraction strength (default: 0.3)
- `fogColor` (hex): Fog color for depth (default: 0x0a0a2e)
- `fogNear` (number): Fog start distance (default: 50)
- `fogFar` (number): Fog end distance (default: 800)

## Visual Presets

### Purple Rain Mode
```jsx
<FireflyAnimation 
    usePurpleTheme={true}
    fireflyCount={100}
    bloomStrength={3.5}
    fogColor={0x1a0a2e}
/>
```

### Minimal Mode
```jsx
<FireflyAnimation 
    fireflyCount={40}
    bloomStrength={1.5}
    mouseForce={0.2}
/>
```

### Magical Mode
```jsx
<FireflyAnimation 
    fireflyCount={120}
    bloomStrength={4.0}
    mouseRadius={250}
    mouseForce={0.5}
/>
```

## Performance Notes

- Reduce `fireflyCount` on mobile devices for better performance
- Lower `bloomStrength` if experiencing frame drops
- The system automatically adjusts particle distribution based on screen orientation

## Development

To expose the firefly system to the browser console for debugging:

```javascript
// In development mode, access via:
window.fireflySystem.setConfig({ fireflyCount: 200 });
```