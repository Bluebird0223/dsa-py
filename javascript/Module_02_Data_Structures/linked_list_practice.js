/**
 * Linked List Practice (Implementation & Problems)
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

// 1. Reverse Linked List
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}

// 2. Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return dummy.next;
}

// 3. Linked List Cycle
function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// 4. Remove Nth Node From End of List
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
}

// 5. Palindrome Linked List
function isPalindrome(head) {
    let fast = head;
    let slow = head;

    // Find middle
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare
    let left = head;
    let right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
}

module.exports = {
    ListNode,
    LinkedList,
    reverseList,
    mergeTwoLists,
    hasCycle,
    removeNthFromEnd,
    isPalindrome
};
