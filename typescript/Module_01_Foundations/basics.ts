/**
 * Module 1: TypeScript Foundations for DSA
 * 
 * This file covers essential TypeScript features needed for DSA:
 * 1. Basic Types & Interfaces
 * 2. Generics
 * 3. Functional Programming (map, filter, reduce)
 */

// 1. Basic Types & Interfaces
export interface User {
    id: number;
    name: string;
    isActive: boolean;
    tags?: string[]; // Optional property
}

// 2. Generics - Crucial for Data Structures
export interface Container<T> {
    value: T;
    id: string;
}

export function createContainer<T>(value: T): Container<T> {
    return {
        value,
        id: Math.random().toString(36).substr(2, 9)
    };
}

// 3. Problem: Generic Stack Implementation
export class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// 4. Functional Programming Practice
export const processNumbers = (nums: number[]): number[] => {
    // Return squares of even numbers
    return nums
        .filter(n => n % 2 === 0)
        .map(n => n * n);
};

export const groupByCategory = <T extends { category: string }>(items: T[]): Record<string, T[]> => {
    return items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, T[]>);
};
