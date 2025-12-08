class ArrayStack{
    constructor(){
        this.stack=[];
    }
    isEmpty(){
        let length=this.stack.length;
        if(!length){
             return true;
        }
        return false;
    }
}