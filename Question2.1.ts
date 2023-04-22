class MyNode {
    value: number;
    next: MyNode | null;

    constructor(value: number, next: MyNode | null) {
        this.value = value;
        this.next = next;
    }
    hasNext(){
        return this.next;
    }
}

class LinkedList {
    head: MyNode|null;

    constructor(head: MyNode) {
        this.head = head;
    }
}

const createList = (array: number[]): void => {
    let head: MyNode = new MyNode(array[0], null);
    let list: LinkedList = new LinkedList(head);
    let currentNode = list.head;
    for (let i = 1; i < array.length; i++) {
        const newNode = new MyNode(array[i], null);
        currentNode.next = newNode;
        currentNode = newNode;
    }
}


const reverseList = (list : LinkedList) : void => {
    let prevNode: MyNode | null = null;
    let currentNode: MyNode | null = list.head;
    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    list.head = prevNode;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let head: MyNode = new MyNode(arr[0], null);
let list: LinkedList = new LinkedList(head);
createList(arr);

