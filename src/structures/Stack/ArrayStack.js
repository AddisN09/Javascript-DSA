export class ArrayStack{
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
    push(data){
      this.stack.push(data);
      return this.stack.length;
    }
    pop(){
        if(this.isEmpty()){
            console.log(`The stack is empty`);
            return;
        }
        return this.stack.pop();
    }
    peek(){
         if(this.isEmpty()){
            console.log(`The stack is empty`);
            return;
        }
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
}