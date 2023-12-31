class ListNode {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class linkedList {
    constructor(){
        this.head = null
    }

    insertFirst(val){
        this.head = new ListNode(val, this.head);
    }

    insertLast(val){
        let newNode = new ListNode(val, null);

        if(!this.head){
            this.head = newNode;
        }

        let current = this.head;
        while(current.next){
            current = current.next
        }

        current.next = newNode;
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


let ll = new linkedList();

ll.insertFirst(2);
ll.insertLast(2);
ll.insertFirst(0);
ll.insertLast(4);
ll.insertFirst(-1);
ll.insertLast(1);


ll.display();