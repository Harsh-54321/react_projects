# CSS Modules in React — Complete Guide

## What is a CSS Module?

A CSS Module is **a regular `.css` file where every class name is automatically
scoped to the component that imports it**.

The build tool (Vite / webpack) transforms:

```css
/* Button.module.css */
.button { background: purple; }
```

…into a unique hash at build time:

```html
<!-- rendered HTML -->
<button class="Button_button__xK2p9">Click me</button>
```

No other component can accidentally override `.button` because **the real class
name in the DOM is unique**.

---

## Project Structure

```
src/
├── styles/
│   └── global.css               ← the ONLY non-module file (reset + CSS vars)
│
├── components/
│   ├── Button/
│   │   ├── Button.jsx            ← component logic
│   │   ├── Button.module.css     ← scoped styles
│   │   └── index.js              ← barrel export
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── index.js
│   │
│   ├── Card/
│   │   ├── Card.jsx
│   │   ├── Card.module.css
│   │   └── index.js
│   │
│   ├── Badge/
│   │   ├── Badge.jsx
│   │   ├── Badge.module.css
│   │   └── index.js
│   │
│   ├── Avatar/
│   │   ├── Avatar.jsx
│   │   ├── Avatar.module.css
│   │   └── index.js
│   │
│   └── Alert/
│       ├── Alert.jsx
│       ├── Alert.module.css
│       └── index.js
│
├── App.jsx
├── App.module.css
└── main.jsx
```

---

## Core Concepts — with Code Examples

### 1. Importing a module

```jsx
// ✅  named import — 'styles' is just an object
import styles from './Button.module.css';

// styles.button  → 'Button_button__xK2p9'  (unique hash)
// styles.primary → 'Button_primary__aB3x1'
```

### 2. Applying a single class

```jsx
<button className={styles.button}>Click</button>
```

### 3. Applying multiple classes (variants + base)

```jsx
// Method A — template literal
<button className={`${styles.button} ${styles.primary}`}>

// Method B — array join (cleaner for many conditions)
const cls = [
  styles.button,
  styles[variant],     // dynamic — e.g. styles['primary']
  styles[size],
  disabled ? styles.disabled : '',
].filter(Boolean).join(' ');

<button className={cls}>
```

### 4. `composes` — inherit styles from another class

```css
/* Header.module.css */
.navLink { color: #d1d5db; font-weight: 500; }

.navLinkAccent {
  composes: navLink;   /* ← inherits all navLink rules */
  color: #a78bfa;      /* then overrides / adds more */
}
```

### 5. Global CSS variables still work

CSS custom properties (`--color-primary`) are **not** scoped — they live on
`:root` and are readable by any module:

```css
/* global.css */
:root { --color-primary: #6c63ff; }

/* Button.module.css — can still read the variable */
.button { background: var(--color-primary); }
```

### 6. The `index.js` barrel

Each component folder has a tiny `index.js`:

```js
export { default } from './Button';
```

This lets importers write the short form:

```js
import Button from './components/Button';   // ✅ clean
// instead of:
import Button from './components/Button/Button'; // ❌ verbose
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Why CSS Modules vs other solutions?

| Approach | Scoped? | Colocated? | Plain CSS? | Zero runtime? |
|---|---|---|---|---|
| Global CSS | ❌ | ❌ | ✅ | ✅ |
| **CSS Modules** | **✅** | **✅** | **✅** | **✅** |
| CSS-in-JS (styled-components) | ✅ | ✅ | ❌ | ❌ |
| Tailwind | Partial | ✅ | ❌ | ✅ |
| BEM convention | Manual | ❌ | ✅ | ✅ |

CSS Modules give you **genuine scoping with zero runtime cost and plain CSS syntax**.
