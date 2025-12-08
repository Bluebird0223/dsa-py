# Data Structures & Algorithms in TypeScript 🚀

Welcome to the TypeScript edition of the comprehensive DSA course!

## 🌟 Why TypeScript for DSA?

- **Type Safety**: strict typing helps prevent common implementation bugs
- **Interfaces & Generics**: Write reusable, professional-grade data structures
- **Modern Syntax**: Use the latest ES features (destructuring, spread, async/await)
- **Industry Standard**: Most modern frontend/fullstack roles require TS proficiency

## 📂 Project Structure

```
typescript/
├── package.json              # Dependencies (jest, typescript, ts-node)
├── tsconfig.json             # TS Config
├── jest.config.js            # Test Config
├── Module_01_Foundations/    # TS Basics & Complexity
├── Module_02_Data_Structures/# Data Structures with Generics
├── Module_03_Core_Algorithms/# Algorithms implementation
├── Module_04_DP_Introduction/# DP Basics (Type-safe)
├── Module_05_DP_Advanced/    # Advanced Patterns
└── Module_06_DP_Professional/# Real-world Projects
```

## 🛠️ Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Tests**
   ```bash
   npm test
   ```

3. **Run Specific File**
   ```bash
   npx ts-node Module_01_Foundations/basics.ts
   ```

## 🧪 Testing

We use **Jest** for all problem verification. Each module contains test files (`*.test.ts`) that verify your solutions against edge cases.

Example:
```typescript
describe('Fibonacci', () => {
  test('should return correct values', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(10)).toBe(55);
  });
});
```

Happy Coding! 💻✨
