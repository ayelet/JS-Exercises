class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  isEmpty() {
    return this.size === 0;
  }
  add(element) {
    let node = new Node(element); // next === null
    let current;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
    this.size++;
  }
  getFirst() {
    return this.head.element;
  }
  getLast() {
    let current = this.head;
    // traverse through list till the end
    while (current.next) current = current.next;
    return current.element;
  }
  draw() {
    // display linked list to console
    let str = "";
    let current = this.head;
    while (current) {
      str += current.element + "->";
      if (current.next === null) str += "null";
      current = current.next;
    }
    console.log(str);
  }
  reverse() {
    let stack = [];
    
    let current = this.head;
    while (current) {
        stack.push(current);
        current = current.next;
    }
    
    // Set head to end of list.
    // this.head.next = null;
    let result = stack.pop() || [];
    this.head = result;
    current = result;
    while (current) {
        current.next = stack.pop();
        current = current.next;
    }
    current = null;
    return result;
};
  

  removeKNode(k) {
      console.log('removing element ' + k);
    let counter = 0;
    if (k > this.size - 1) return;
    // remove head
    if (k === 0) {
        this.head = this.head.next;
        return;
    }
    let curr = this.head;
    for (let i = 0; i < k - 1; i++)
        curr = curr.next;
    if (curr.next.next !== null) curr.next = curr.next.next;
    else curr.next = null;
  }
  circularLinkedList() {
    let iter1 = this.head;
    let iter2 = this.head;
    while (iter1 != null && iter2 != null) {
      if (!iter2.next || !iter1.next) return false;
      iter1 = iter1.next;
      iter2 = iter2.next.next;
      if (iter1 == iter2) return true;
    }
    return false;
  }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.draw();
console.log("first element in list: ", linkedList.getFirst());
console.log("last element in list: ", linkedList.getLast());
console.log('head: ', linkedList.head.element, ' tail: ', linkedList.tail.element);
linkedList.reverse();
console.log("reversing list:");
linkedList.draw();
// linkedList.removeKNode(2);
linkedList.draw();

console.log("is linked list circular:", linkedList.circularLinkedList());
