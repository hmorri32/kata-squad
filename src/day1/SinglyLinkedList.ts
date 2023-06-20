class SinglyLinkedListNode<T> {
  public data: T;
  public next: SinglyLinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> | null;
  private tail: SinglyLinkedListNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(item: T): void {
    const newNode = new SinglyLinkedListNode(item);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;

      this.head = newNode;
    }
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds");
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    // etc.
  }

  append(item: T): void {
    const newNode = new SinglyLinkedListNode(item);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(item: T): T | undefined {}
  get(idx: number): T | undefined {}
  removeAt(idx: number): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;

    return removedNode.data;
  }
}
