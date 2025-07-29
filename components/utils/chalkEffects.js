// Chalk drawing utilities for canvas effects

// Generate rough path for chalk-like appearance
export const generateChalkPath = (startX, startY, endX, endY) => {
  const points = [];
  const segments = 20;
  const roughness = 2;
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = startX + (endX - startX) * t;
    const y = startY + (endY - startY) * t;
    
    // Add slight randomness for hand-drawn effect
    const offsetX = (Math.random() - 0.5) * roughness;
    const offsetY = (Math.random() - 0.5) * roughness;
    
    points.push({ x: x + offsetX, y: y + offsetY });
  }
  
  return points;
};

// Create chalk texture pattern
export const createChalkTexture = (ctx, width, height) => {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 30;
    data[i] = 254 - noise;     // R
    data[i + 1] = 243 - noise;  // G
    data[i + 2] = 199 - noise;  // B
    data[i + 3] = Math.random() * 255; // A (variable opacity)
  }
  
  return imageData;
};

// Draw a chalk stroke with texture
export const drawChalkStroke = (ctx, points, progress, strokeWidth = 5, colorVariant = 'cream', colorMode = 'dark') => {
  if (points.length < 2) return;
  
  ctx.save();
  
  // Color variations with theme support
  const colors = {
    light: {
      cream: '#1a1a1a',      // Dark gray/black for light mode
      pink: '#dc2626',       // Darker red-pink for light mode
      purple: '#7c3aed',     // Darker purple for light mode
      coral: '#ef4444',      // Darker coral for light mode
      lavender: '#8b5cf6'    // Darker lavender for light mode
    },
    dark: {
      cream: '#fef3c7',      // Original cream for dark mode
      pink: '#ff6b6b',       // Original pink
      purple: '#c084fc',     // Original purple
      coral: '#fca5a5',      // Original coral
      lavender: '#e9d5ff'    // Original lavender
    }
  };
  
  const themeColors = colors[colorMode] || colors.dark;
  ctx.strokeStyle = themeColors[colorVariant] || themeColors.cream;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Calculate how many points to draw based on progress
  const pointsToDraw = Math.floor(points.length * progress);
  
  // Draw multiple passes for texture
  for (let pass = 0; pass < 3; pass++) {
    ctx.globalAlpha = 0.3 + (pass * 0.2);
    ctx.lineWidth = strokeWidth + (pass * 2);
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < pointsToDraw; i++) {
      // Use quadratic curves for smoother lines
      const cp = points[i - 1];
      const p = points[i];
      const midX = (cp.x + p.x) / 2;
      const midY = (cp.y + p.y) / 2;
      
      ctx.quadraticCurveTo(cp.x, cp.y, midX, midY);
    }
    
    ctx.stroke();
  }
  
  // Add texture overlay
  ctx.globalCompositeOperation = 'multiply';
  ctx.globalAlpha = 0.1;
  
  // Draw noise texture
  for (let i = 0; i < pointsToDraw - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    
    for (let j = 0; j < 5; j++) {
      const offsetX = (Math.random() - 0.5) * strokeWidth;
      const offsetY = (Math.random() - 0.5) * strokeWidth;
      ctx.fillStyle = `rgba(200, 190, 170, ${Math.random() * 0.3})`;
      ctx.fillRect(p1.x + offsetX, p1.y + offsetY, 2, 2);
    }
  }
  
  ctx.restore();
};

// Create chalk dust particles
export class ChalkDust {
  constructor(x, y, colorMode = 'dark') {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = Math.random() * 0.5 + 0.2;
    this.life = 1.0;
    this.decay = 0.01;
    this.size = Math.random() * 3 + 1;
    this.colorMode = colorMode;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.02; // gravity
    this.life -= this.decay;
    
    return this.life > 0;
  }
  
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life * 0.3;
    // Use dark particles in light mode, light particles in dark mode
    ctx.fillStyle = this.colorMode === 'light' ? '#1a1a1a' : '#fef3c7';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Generate letter paths for text (supports multi-line)
export const generateLetterPaths = (textLines, fontSize, spacing, totalWidth, totalHeight) => {
  // Handle both string and array inputs
  const lines = Array.isArray(textLines) ? textLines : [textLines];
  const allPaths = [];
  
  const letterWidths = {
    'S': fontSize * 0.7,
    'O': fontSize * 0.8,
    'F': fontSize * 0.6,
    'T': fontSize * 0.7,
    'W': fontSize * 1.0,
    'A': fontSize * 0.8,
    'R': fontSize * 0.7,
    'E': fontSize * 0.6,
    'N': fontSize * 0.8,
    'G': fontSize * 0.8,
    'I': fontSize * 0.3,
    'B': fontSize * 0.7,
    'D': fontSize * 0.8,
    'L': fontSize * 0.6,
    'P': fontSize * 0.7,
    'H': fontSize * 0.8,
    '!': fontSize * 0.3,
    ' ': fontSize * 0.4
  };
  
  // Color pattern for visual interest
  const colorPattern = ['cream', 'pink', 'cream', 'purple', 'cream', 'coral', 'cream', 'lavender'];
  let colorIndex = 0;
  
  // Calculate line positions
  const lineHeight = fontSize * 1.8;
  const totalTextHeight = lines.length * lineHeight;
  const startY = (totalHeight - totalTextHeight) / 2 + fontSize;
  
  lines.forEach((line, lineIndex) => {
    const letters = line.split('');
    const linePaths = [];
    
    // Calculate line width
    const lineWidth = letters.reduce((sum, letter) => 
      sum + (letterWidths[letter] || fontSize * 0.7) + spacing, 0) - spacing;
    
    // Center the line
    let currentX = (totalWidth - lineWidth) / 2;
    const baseY = startY + (lineIndex * lineHeight);
    
    letters.forEach((letter, index) => {
      const width = letterWidths[letter] || fontSize * 0.7;
      const rotation = (Math.random() - 0.5) * 0.12; // Slight rotation
      
      // Assign colors with pattern
      const color = colorPattern[colorIndex % colorPattern.length];
      colorIndex++;
      
      const letterPath = {
        letter,
        x: currentX,
        y: baseY + (Math.random() - 0.5) * 3, // Slight vertical variation
        width,
        rotation,
        color,
        lineIndex,
        paths: generateLetterStrokes(letter, currentX, baseY, fontSize)
      };
      
      linePaths.push(letterPath);
      currentX += width + spacing;
    });
    
    allPaths.push(...linePaths);
  });
  
  return allPaths;
};

// Generate individual strokes for each letter
const generateLetterStrokes = (letter, x, y, size) => {
  const strokes = [];
  const s = size;
  
  // Simplified letter constructions
  switch(letter) {
    case 'S':
      // Top curve
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.9, x + s*0.5, y - s));
      strokes.push(generateChalkPath(x + s*0.5, y - s, x + s*0.2, y - s*0.95));
      strokes.push(generateChalkPath(x + s*0.2, y - s*0.95, x + s*0.1, y - s*0.8));
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.8, x + s*0.15, y - s*0.65));
      // Middle curve
      strokes.push(generateChalkPath(x + s*0.15, y - s*0.65, x + s*0.3, y - s*0.55));
      strokes.push(generateChalkPath(x + s*0.3, y - s*0.55, x + s*0.5, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.5, y - s*0.5, x + s*0.65, y - s*0.4));
      // Bottom curve
      strokes.push(generateChalkPath(x + s*0.65, y - s*0.4, x + s*0.7, y - s*0.25));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.25, x + s*0.6, y - s*0.1));
      strokes.push(generateChalkPath(x + s*0.6, y - s*0.1, x + s*0.4, y));
      strokes.push(generateChalkPath(x + s*0.4, y, x + s*0.1, y - s*0.1));
      break;
    case 'O':
      // Circle approximation with bezier curves
      const segments = 8;
      for (let i = 0; i < segments; i++) {
        const angle1 = (i / segments) * Math.PI * 2;
        const angle2 = ((i + 1) / segments) * Math.PI * 2;
        const x1 = x + s*0.4 + Math.cos(angle1) * s*0.4;
        const y1 = y - s*0.5 + Math.sin(angle1) * s*0.4;
        const x2 = x + s*0.4 + Math.cos(angle2) * s*0.4;
        const y2 = y - s*0.5 + Math.sin(angle2) * s*0.4;
        strokes.push(generateChalkPath(x1, y1, x2, y2));
      }
      break;
    case 'F':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.6, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.5, x + s*0.5, y - s*0.5));
      break;
    case 'T':
      strokes.push(generateChalkPath(x + s*0.35, y, x + s*0.35, y - s));
      strokes.push(generateChalkPath(x, y - s, x + s*0.7, y - s));
      break;
    case 'W':
      strokes.push(generateChalkPath(x, y - s, x + s*0.2, y));
      strokes.push(generateChalkPath(x + s*0.2, y, x + s*0.4, y - s*0.7));
      strokes.push(generateChalkPath(x + s*0.4, y - s*0.7, x + s*0.6, y));
      strokes.push(generateChalkPath(x + s*0.6, y, x + s*0.8, y - s));
      break;
    case 'A':
      strokes.push(generateChalkPath(x, y, x + s*0.4, y - s));
      strokes.push(generateChalkPath(x + s*0.4, y - s, x + s*0.8, y));
      strokes.push(generateChalkPath(x + s*0.2, y - s*0.4, x + s*0.6, y - s*0.4));
      break;
    case 'R':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.5, y - s));
      strokes.push(generateChalkPath(x + s*0.5, y - s, x + s*0.6, y - s*0.8));
      strokes.push(generateChalkPath(x + s*0.6, y - s*0.8, x + s*0.5, y - s*0.6));
      strokes.push(generateChalkPath(x + s*0.5, y - s*0.6, x + s*0.1, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.3, y - s*0.5, x + s*0.6, y));
      break;
    case 'E':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.6, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.5, x + s*0.5, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.6, y));
      break;
    case 'N':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.7, y));
      strokes.push(generateChalkPath(x + s*0.7, y, x + s*0.7, y - s));
      break;
    case 'G':
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.8, x + s*0.5, y - s));
      strokes.push(generateChalkPath(x + s*0.5, y - s, x + s*0.2, y - s*0.8));
      strokes.push(generateChalkPath(x + s*0.2, y - s*0.8, x + s*0.1, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.5, x + s*0.2, y - s*0.2));
      strokes.push(generateChalkPath(x + s*0.2, y - s*0.2, x + s*0.5, y));
      strokes.push(generateChalkPath(x + s*0.5, y, x + s*0.7, y - s*0.2));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.2, x + s*0.7, y - s*0.4));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.4, x + s*0.4, y - s*0.4));
      break;
    case 'H':
      // Left vertical stroke
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      // Right vertical stroke
      strokes.push(generateChalkPath(x + s*0.7, y, x + s*0.7, y - s));
      // Horizontal crossbar
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.5, x + s*0.7, y - s*0.5));
      break;
    case 'I':
      strokes.push(generateChalkPath(x + s*0.15, y, x + s*0.15, y - s));
      break;
    case 'B':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.5, y - s));
      strokes.push(generateChalkPath(x + s*0.5, y - s, x + s*0.6, y - s*0.8));
      strokes.push(generateChalkPath(x + s*0.6, y - s*0.8, x + s*0.5, y - s*0.6));
      strokes.push(generateChalkPath(x + s*0.5, y - s*0.6, x + s*0.1, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.1, y - s*0.5, x + s*0.5, y - s*0.5));
      strokes.push(generateChalkPath(x + s*0.5, y - s*0.5, x + s*0.6, y - s*0.3));
      strokes.push(generateChalkPath(x + s*0.6, y - s*0.3, x + s*0.5, y - s*0.1));
      strokes.push(generateChalkPath(x + s*0.5, y - s*0.1, x + s*0.1, y));
      break;
    case 'D':
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.5, y - s));
      strokes.push(generateChalkPath(x + s*0.5, y - s, x + s*0.7, y - s*0.7));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.7, x + s*0.7, y - s*0.3));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.3, x + s*0.5, y));
      strokes.push(generateChalkPath(x + s*0.5, y, x + s*0.1, y));
      break;
    case 'L':
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.1, y));
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.6, y));
      break;
    case 'P':
      // Vertical stroke
      strokes.push(generateChalkPath(x + s*0.1, y, x + s*0.1, y - s));
      // Top horizontal
      strokes.push(generateChalkPath(x + s*0.1, y - s, x + s*0.6, y - s));
      // Right curve
      strokes.push(generateChalkPath(x + s*0.6, y - s, x + s*0.7, y - s*0.85));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.85, x + s*0.7, y - s*0.65));
      strokes.push(generateChalkPath(x + s*0.7, y - s*0.65, x + s*0.6, y - s*0.5));
      // Bottom horizontal of P
      strokes.push(generateChalkPath(x + s*0.6, y - s*0.5, x + s*0.1, y - s*0.5));
      break;
    case ' ':
      // No strokes for space
      break;
    case '!':
      // Vertical line (thicker at top, thinner at bottom)
      strokes.push(generateChalkPath(x + s*0.15, y - s*0.35, x + s*0.15, y - s*0.95));
      strokes.push(generateChalkPath(x + s*0.18, y - s*0.35, x + s*0.18, y - s*0.95));
      // Circular dot
      const dotCenterX = x + s*0.165;
      const dotCenterY = y - s*0.15;
      const dotRadius = s*0.06;
      const dotSegments = 6;
      for (let i = 0; i < dotSegments; i++) {
        const angle1 = (i / dotSegments) * Math.PI * 2;
        const angle2 = ((i + 1) / dotSegments) * Math.PI * 2;
        const x1 = dotCenterX + Math.cos(angle1) * dotRadius;
        const y1 = dotCenterY + Math.sin(angle1) * dotRadius;
        const x2 = dotCenterX + Math.cos(angle2) * dotRadius;
        const y2 = dotCenterY + Math.sin(angle2) * dotRadius;
        strokes.push(generateChalkPath(x1, y1, x2, y2));
      }
      break;
    default:
      // Default to a simple vertical line
      strokes.push(generateChalkPath(x + s*0.3, y, x + s*0.3, y - s));
  }
  
  return strokes;
};