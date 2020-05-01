// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

const hasCycle = function (head) {
	// check to see if the head exist
	if (!head || !head.next) {
		return false;
	}
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		if (slow === fast) {
			return true;
		}
		slow = slow.next;
		fast = fast.next.next;
	}
	return false;
};
hasCycle([3, 2, 0, -4]);
