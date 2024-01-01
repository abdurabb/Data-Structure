class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        var newNode = new Node(val)
        if (this.root == null) {
            this.root = newNode;
            return;
        } else {
            var current = this.root;
            while (true) {
                if (val < current.val) {
                    if (current.left == null) {
                        current.left = newNode;
                        return;
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (current.right == null) {
                        current.right = newNode;
                        return
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    // DFS
    inOrder(root) {
        if (root == null) {
            return
        } else {
            this.inOrder(root.left)
            console.log(root.val);
            this.inOrder(root.right)
        }

    }

    preOrder(root) {
        if (root == null) {
            return
        } else {
            console.log(root.val);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if (root == null) {
            return
        } else {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val);
        }
    }

    // BFS --- Level Order

    levelOrder() {
        let queue = []
        queue.push(this.root)

        while (queue.length) {
            let temp = queue.shift()
            console.log(temp.val);

            if (temp.left) {
                queue.push(temp.left)
            }

            if (temp.right) {
                queue.push(temp.right)
            }
        }
    }

    getMin(root) {
        if (root.left == null) {
            return root.val;
        } else {
            this.getMin(root.left)
        }
    }

    getMax(root) {
        if (root.right == null) {
            return root.val;
        } else {
            this.getMax(root.right)
        }
    }

    contains(val) {
        var current = this.root;

        while (current) {
            if (current.val == val) {
                return true;
            } else if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right;
            }
        }

        return false;
    }

    delete(val) {
        let parentNode = null;
        this.deleteHeloper(val, this.root, parentNode)
    }

    deleteHeloper(val, current, parentNode) {
        while (current) {
            if (val < current.val) {
                parentNode = current;
                current = current.left;
            } else if (val > current.val) {
                parentNode = current;
                current = current.right;
            } else {
                if (current.left != null && current.right != null) {
                    current.val = this.getMin(current.right);
                    return this.deleteHeloper(current.val, current.right, current)
                } else {
                    if (parentNode == null) {
                        if (current.left) {
                            this.root = current.left;
                        } else {
                            this.root = current.right;
                        }
                    } else {
                        if (parentNode.left == current) {
                            if (current.left == null) {
                                parentNode.left = current.right
                            } else {
                                parentNode.left = current.left
                            }
                        } else {
                            if (current.left == null) {
                                parentNode.right = current.right
                            } else {
                                parentNode.right = current.left
                            }
                        }
                    }
                }
                break;
            }
        }
    }
}

var bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(17)

bst.delete(15)
bst.levelOrder()
// bst.postOrder(bst.root)
// console.log(bst.contains(15));