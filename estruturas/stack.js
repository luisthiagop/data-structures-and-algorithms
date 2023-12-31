class Stack{
    constructor(){
        this.stack = [];
    }
    
    insertData(data){
        this.stack.push(data);
    }

    popData(){
        if(this.stack.length){
            return this.stack.pop();

        }

        return null;
    }

    display(){
        console.log(this.stack);
    }
}


let stack = new Stack();

stack.insertData(1);
stack.insertData(1);
stack.insertData(8);
console.log(stack.popData());
stack.display();