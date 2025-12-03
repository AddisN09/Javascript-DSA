class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export class singlyLinkedList{
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
        }
        this.size++;
        return this;
     }
     prepend(data){
        const newNode=new Node(data);
        let empty=this.isEmpty();
        if(empty){
            this.head=newNode;
        }
         newNode.next=this.head;
         this.head=newNode;
         this.size++;
         return this;    
     }
    insertAt(data, position){
        if(position<1 || position>this.size+1){
            console.log(`Invalid position value`);
            return;
        }
        if(position===1){
           return this.prepend(data);
        }
        else if(position===this.size+1){
           return this.append(data);
        }
        else{
            let temp=this.head;
            for(let i=1;i<position-1;i++){
                temp=temp.next;
            }
            const newNode=new Node(data);
            newNode.next=temp.next;
            temp.next=newNode;
        }
       this.size++;
       return this;
    }
    removeFirst(){
        let empty=this.isEmpty();
        if(empty){
            console.log(`The list is empty nothing to remove`);
            return;
        }
        let temp=this.head;
        this.head=this.head.next;
        let removedValue=temp.data;
        temp.next=null;
        temp=null;
        this.size--;
        return removedValue;
    }
    removeLast(){
        let empty=this.isEmpty();
        if(empty){
            console.log(`The list is empty nothing to remove`);
            return;
        }
        let temp=this.head;
        let slow=null;
        while(temp.next){ 
            slow=temp;
            temp=temp.next;  
        }
        if(this.size===1){
                return this.removeFirst();
            }
        let removedValue=temp.data;
         slow.next=null;
         temp=null;
         this.size--;
        return removedValue;
    }
    removeAt(position){
        let empty=this.isEmpty();
        if(empty){
            console.log(`The list is empty nothing to delete`);
            return;
        }
        if(position<1 || position>this.size){
            console.log(`Invalid input for position`);
            return;
        }
        let temp=this.head;
        let slow=null;
        for(let i=1;i<position;i++){
            slow=temp;
            temp=temp.next;
        }
        if(this.size===1 || position===1){
                return this.removeFirst();
            }
        let removedValue=temp.data;
        slow.next=temp.next;
        temp.next=null;
        temp=null;
        this.size--;
        return removedValue;
    }
}
