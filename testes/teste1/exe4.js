// Write a Python function that checks if a given binary tree is a binary search tree (BST).

class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}

const verifyBinaryTree = (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    if (root === null) {
        return true;
    }

    if (root.value <= min || root.value > max) {
        return false;
    }

    return (
        verifyBinaryTree(root.left, min, root.value) &&
        verifyBinaryTree(root.right, root.value, max)
    );
};

let root = new TreeNode(2, null, null);
let new1 = new TreeNode(4, null, null);  // Corrected value to make it a valid BST
let new2 = new TreeNode(3, null, null);

root.setLeft(new1);
root.setRight(new2);

console.log(verifyBinaryTree(root));
