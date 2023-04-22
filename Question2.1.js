var MyNode = /** @class */ (function () {
    function MyNode(value, next) {
        this.value = value;
        this.next = next;
    }
    MyNode.prototype.hasNext = function () {
        return this.next;
    };
    return MyNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = head;
    }
    return LinkedList;
}());
var createList = function (array) {
    var _a, _b;
    var head = new MyNode(array[0], null);
    var list = new LinkedList(head);
    var currentNode = list.head;
    for (var i = 1; i < array.length; i++) {
        var newNode = new MyNode(array[i], null);
        currentNode.next = newNode;
        currentNode = newNode;
    }
    console.log((_b = (_a = head.next) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.value);
};
var reverseList = function (list) {
    var prevNode = null;
    var currentNode = list.head;
    while (currentNode !== null) {
        var nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    list.head = prevNode;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var head = new MyNode(arr[0], null);
var list = new LinkedList(head);
createList(arr);
