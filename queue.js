class Stack{
    constructor(){
        this.queue = [];
    }
    
    insertData(data){
        this.queue.push(data);
    }

    popData(){
        if(this.queue.length){
            return this.queue.shift();
        }

        return null;
    }

    display(){
        console.log(this.queue);
    }
}


let stack = new Stack();

stack.insertData(1);
stack.insertData(1);
stack.insertData(8);
console.log(stack.popData());
console.log(stack.popData());
stack.display();