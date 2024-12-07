import { LinkedList, LinkedListNode } from "../linked_list/llv1.js";

export class StackTest extends LinkedList {
  constructor() {
    super();
    this._min = Infinity;
    this._length = 0;
  }

  push(value) {
    const node = new LinkedListNode(value);

    if (!this._head) {
      this.createHeadAndTail(node);
      this._min = node.value;
    } else {
      this._tail.next = node;
      this._tail = node;
      this.updateMinValue(node.value);
    }

    this._length++;
    return this;
  }

  pop() {
    if (!this._head) return null;

    const poppedValue = this._head.value;
    this._head = this._head.next;
    this._length--;

    if (this._head) {
      this.findNewMinValue();
    } else {
      this._min = Infinity;
    }

    return poppedValue;
  }

  updateMinValue(value) {
    this._min = Math.min(this._min, value);
  }

  findNewMinValue() {
    let node = this._head;
    this._min = Infinity;
    while (node) {
      this.updateMinValue(node.value);
      node = node.next;
    }
  }

  get showMin() {
    return this._min;
  }

  show() {
    let str = "";
    let node = this._head;
    while (node) {
      str += `${node.value}`;
      node = node.next;

      if (node) str += " <- ";
    }
    process.stdout.write(str);
  }

  get length() {
    return this._length;
  }
}
