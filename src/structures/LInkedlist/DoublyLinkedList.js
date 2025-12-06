class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}
export class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        if(!this.head){
            return true;
        }
        return false;
    }
    append(data){
        const newNode=new Node(data);
        let empty=this.isEmpty();
        if(empty){
            this.head=newNode;
        }
        else{
            let temp=this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next=newNode;
            newNode.previous=temp;
        }
        this.size++;
        return this;
    }
    prepend(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
        }
        else{
            let temp=this.head;
            temp.previous=newNode;
            newNode.next=temp;
            this.head=newNode;
        }
        this.size++;
        return this;
    }
    insertAt(data,position){
      if(position<0 || position>this.size){
        console.log(`Invalid input for position`);
        return;
      }
      if(position===0){
        return this.prepend(data);
      }
      if(position===this.size){
        return this.append(data);
      }
      else{
        const newNode=new Node(data);
        let temp=this.head; 
        let follower=null;
        for(let i=0;i<position;i++){
            follower=temp;
            temp=temp.next;
        }
         newNode.next=follower.next;
         newNode.previous=temp.previous;
         follower.next=newNode;
         temp.previous=newNode;
      }
      this.size++;
      return this;
    }
    toArray(){
        let empty=this.isEmpty();
        if(empty){
            return [];
        }
        let temp=this.head;
        let storeValue=[];
        while(temp){
            storeValue.push(temp.data);
            temp=temp.next;
        }
        return storeValue;
    }
    traverseForward(){
        let valueArray=this.toArray();
        if(valueArray.length===0){
            console.log(`The list is empty nothing to display`);
            return;
        }
        else{
            let display=`NULl<- - - `;
            valueArray.forEach((item,index)=>{
                display+=`${item} `;
                if(index!==valueArray.length-1){
                    display+=`<= = => `
                }
            });
            display+=` - - ->NULL`;
            console.log(display);
        }
    }
    traverseBackward(){
        let valueArray=this.toArray();
        if(valueArray.length===0){
            console.log(`The list is empty nothing to display`);
            return;
        }
        else{
            let display=`NULL<- - - `;
            valueArray.reverse().forEach((item,index)=>{
                display+=`${item}`;
                if(index!==valueArray.length-1){
                    display+= ` <= = => `;
                }
            });
            display+=` - - ->NULL`;
            console.log(display);
        }
    }
}