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
    clear(){
        return this.stack.length=0;
    }
    print(){
        if(this.isEmpty()){
            console.log(`The stack is empty`);
            return;
        }
        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i]);
        }
    }
    toArray(){
        if(this.isEmpty()){
            return [];
        }
        let store=[];
          for(let i=this.stack.length-1;i>=0;i--){
             store.push(this.stack[i]);
        }
        return store;
    }
}