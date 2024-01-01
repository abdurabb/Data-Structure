class NewNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new NewNode(val)

        if (this.root == null) {
            this.root = newNode
            return;
        }
        var current = this.root;
        while (true) {
            if (val < current.val) {
                if (current.left == null) {
                    current.left = newNode;
                    return
                } else {
                    current = current.left
                }
            } else if (val > current.val) {
                if (current.right == null) {
                    current.right = newNode;
                    return;
                } else {
                    current = current.right
                }
            } else {
                return undefined
            }
        }
    }


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

    contains(val) {
        let current = this.root;

        while (current != null) {
            if (val == current.val) {
                return true
            } else if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            }
        }

        return false
    }

    getMin(root) {
        if (root.left == null) {
            return root.val;
        } else {
            return this.getMin(root.left)
        }

    }

    getMax(root) {
        if (root.right == null) {
            return root.val
        } else {
            return this.getMax(root.right)
        }
    }

    delete(val) {
        let parentNode = null;
        this.deleteHelper(val, this.root, parentNode)
    }

    deleteHelper(data, currentNode, parentNode) {
        while (currentNode != null) {
            if (data < currentNode.val) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data > currentNode.val) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.right != null && currentNode.left != null) {
                    currentNode.val = this.getMin(currentNode.right);
                    return this.deleteHelper(currentNode.val, currentNode.right, currentNode);
                }else{
                    if(parentNode == null){
                        if(currentNode.left == null){
                            this.root = currentNode.right;
                        }else{
                            this.root = currentNode.left;
                        }
                    }else{
                        if(parentNode.left == currentNode){
                            if(currentNode.left == null){
                                parentNode.left = currentNode.right;
                            }else{
                                parentNode.left = currentNode.left
                            }
                        }else{
                            if(currentNode.left == null){
                                parentNode.right = currentNode.right;
                            }else{
                                parentNode.right = currentNode.left;
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

// // console.log(bst.contains(10));
// console.log(`${bst.getMax(bst.root)}===This is Maximum Value`);
// console.log(`${bst.getMin(bst.root)}=== This is Minimum Value`);

bst.delete(3)
bst.levelOrder()