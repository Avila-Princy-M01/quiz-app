# Quiz Challenge - Next.js Website

A modern, responsive quiz website built with **React and Next.js**, featuring real-time countdown, interactive questions, and beautiful animations.

## 🚀 Features

- 🕒 **Real-time current time display** with live updates
- ⏰ **Quiz start time with countdown timer** (today at 2 PM)
- 📝 **5 multiple choice questions** (A, B, C, D options)
- 📊 **Progress tracking** with visual progress bar
- ✅ **Form validation** (submit only when all questions answered)
- 🎨 **Beautiful UI** with gradient backgrounds and animations
- 📱 **Fully responsive design** (desktop, tablet, mobile)
- 🌙 **Dark mode support** with automatic theme detection
- ⚡ **Smooth animations** using Framer Motion
- 🔧 **TypeScript support** for better development experience

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Frontend library
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone or download this project**
2. **Navigate to the project directory:**
   ```bash
   cd quiz-nextjs
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the project:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:
```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
quiz-nextjs/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Landing page
│   │   └── quiz/
│   │       └── page.tsx   # Quiz page
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       └── label.tsx
│   └── lib/
│       └── utils.ts      # Utility functions
├── .vscode/              # VS Code configuration
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## ⚙️ Configuration

### Quiz Start Time

The quiz start time is configured in `src/app/page.tsx`:

```typescript
const getQuizStartTime = () => {
  const today = new Date()
  today.setHours(14, 0, 0, 0) // 2 PM today
  return today
}
```

To change the quiz start time, modify the `setHours()` parameters:
- First parameter: Hour (0-23, 24-hour format)
- Second parameter: Minutes (0-59)
- Third parameter: Seconds (0-59)
- Fourth parameter: Milliseconds (0-999)

### Questions

Quiz questions are defined in `src/app/quiz/page.tsx` in the `questions` array. Each question has:
- `id`: Unique identifier
- `question`: The question text
- `options`: Array of 4 options with `value` (A, B, C, D) and `text`

Example:
```typescript
{
  id: 1,
  question: "What is the capital of France?",
  options: [
    { value: "A", text: "London" },
    { value: "B", text: "Berlin" },
    { value: "C", text: "Paris" },
    { value: "D", text: "Madrid" }
  ]
}
```

## 🎨 Customization

### Colors and Themes

The project uses Tailwind CSS with a comprehensive design system. You can modify colors in:
- `src/app/globals.css` - CSS custom properties for light/dark themes
- Component files - Tailwind classes for gradients and colors

### Animations

Animations are powered by Framer Motion. You can customize:
- Animation variants in component files
- Transition durations and easing
- Hover and tap animations

### UI Components

The project uses custom UI components built with Radix UI primitives:
- Component styles in `src/components/ui/`
- Tailwind classes for styling
- TypeScript for type safety

## 🔧 VS Code Setup

### Recommended Extensions

The project includes VS Code extension recommendations. Install these for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - React code snippets
2. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
3. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
4. **Prettier - Code formatter** - Code formatting
5. **ESLint** - JavaScript/TypeScript linting
6. **TypeScript Importer** - Auto import TypeScript modules

### VS Code Settings

The project includes optimized VS Code settings in `.vscode/settings.json`:

- Format on save with Prettier
- ESLint auto-fix on save
- Tailwind CSS IntelliSense
- TypeScript auto-imports
- File associations for JSX/TSX

### Debugging

VS Code debugging configurations are included in `.vscode/launch.json`:

- **Next.js: debug server-side** - Debug server-side code
- **Next.js: debug client-side** - Debug in Chrome
- **Next.js: debug full stack** - Debug both server and client

## 📱 Responsive Design

The website is fully responsive with:

- **Mobile-first approach** using Tailwind CSS breakpoints
- **Touch-friendly interactions** with proper touch targets
- **Optimized layouts** for different screen sizes
- **Accessible design** following WCAG guidelines

### Breakpoints

- `sm`: 640px and up (tablets)
- `md`: 768px and up (small laptops)
- `lg`: 1024px and up (desktops)
- `xl`: 1280px and up (large screens)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please feel free to reach out!

---

**Built with ❤️ using Next.js and React**

