class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor(){
        this.root = null;
    }

    insertNode(val){
        if(!this.root){
            this.root = new TreeNode(val);
        }else{

            let current = this.root;

            while(current){
                if(val <= current.val){
                    if(current.left){
                        current = current.left;
                    }else{
                        current.left = new TreeNode(val);
                        break;
                    }
                }else{
                    if(current.right){
                        current = current.right;
                    }else{
                        current.right = new TreeNode(val);
                        break;
                    }
                }
            }  
        }      
    }

    displayPreOrder(node = this.root){
        if(!node) return false;
        console.log(node.val);
        this.displayPreOrder(node.left);
        this.displayPreOrder(node.right);
        return true;
    }

    displayInOrder(node = this.root){
        if(!node) return false;
        this.displayInOrder(node.left);
        console.log(node.val);
        this.displayInOrder(node.right);
        return true;
    }

    displayPosOrder(node = this.root){
        if(!node) return false;
        this.displayPosOrder(node.left);
        this.displayPosOrder(node.right);
        console.log(node.val);
        return true;
    }
}


let tree = new BinaryTree();

tree.insertNode(1);
tree.insertNode(2);
tree.insertNode(4);
tree.insertNode(-2);
tree.insertNode(-1);
tree.insertNode(-3);



tree.displayPreOrder();
console.log("-----");
tree.displayInOrder();
console.log("-----");
tree.displayPosOrder();