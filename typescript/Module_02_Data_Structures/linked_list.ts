/**
 * Linked List Node (Generic)
 */
export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T, next: ListNode<T> | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Singly Linked List Implementation
 */
export class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add to end
    append(val: T): void {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add to beginning
    prepend(val: T): void {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }

    // Convert to Array for testing/logging
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}

/**
 * Common Linked List Problems
 */

// 1. Reverse Linked List
export function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
    let prev: ListNode<T> | null = null;
    let current = head;

    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

// 2. Detect Cycle (Floyd's Cycle Finding Algorithm)
export function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (!head || !head.next) return false;

    let slow: ListNode<T> | null | undefined = head;
    let fast: ListNode<T> | null | undefined = head; // Start at same pos for cleaner loop logic

    // Usually fast starts ahead or loop precondition handles it
    // Standard version:
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}
