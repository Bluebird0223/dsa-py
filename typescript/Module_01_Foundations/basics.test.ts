import { Stack, processNumbers, groupByCategory } from '../basics';

describe('Module 1: TypeScript Foundations', () => {
    describe('Stack Data Structure', () => {
        let stack: Stack<number>;

        beforeEach(() => {
            stack = new Stack<number>();
        });

        test('should push and pop items correctly', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
            expect(stack.pop()).toBeUndefined();
        });

        test('should check if empty', () => {
            expect(stack.isEmpty()).toBe(true);
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });

        test('should work with strings too (Generics)', () => {
            const stringStack = new Stack<string>();
            stringStack.push('hello');
            expect(stringStack.peek()).toBe('hello');
        });
    });

    describe('Functional Programming', () => {
        test('processNumbers should square even numbers', () => {
            const input = [1, 2, 3, 4, 5];
            const result = processNumbers(input);
            expect(result).toEqual([4, 16]); // 2^2, 4^2
        });
    });

    describe('Generic Helper', () => {
        test('groupByCategory should group items correctly', () => {
            const items = [
                { id: 1, category: 'A', val: 10 },
                { id: 2, category: 'B', val: 20 },
                { id: 3, category: 'A', val: 30 }
            ];

            const grouped = groupByCategory(items);

            expect(grouped['A']).toHaveLength(2);
            expect(grouped['B']).toHaveLength(1);
            expect(grouped['A'][0].id).toBe(1);
            expect(grouped['A'][1].id).toBe(3);
        });
    });
});
