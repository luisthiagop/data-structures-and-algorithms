class HashMap{
    constructor(){
        this.hm = {};
    }

    insert(key, value){
        this.hm[key] = value;
    }

    delete(key){
        delete this.hm[key];
    }

    search(value){
        if (Object.values(this.hm).find(v => v === value)) return true;
        return false;
    }

    get(key){
        return this.hm[key] ? this.hm[key] : -1;
    }

    getSize(){
        return Object.entries(this.hm).length;
    }

    isEmpty(){
        return this.getSize() == 0;
    }
}

let teste = new HashMap();

teste.insert(1, 3);
console.log(teste.isEmpty(1));