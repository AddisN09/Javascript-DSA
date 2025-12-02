 export class ArrayAlgorithms{
    linearSearch(target,array){
        for(let i=0;i<array.length;i++){
            if(array[i]===target){
                return i;
            }
        }
        return -1;
    }
    insertionSort(array){
        for(let i=1;i<array.length;i++){
           let temp=array[i];
           let j=i-1;
           while(j>=0 && array[j]>temp){
            array[j+1]=array[j];
            j--;
           }
           array[j+1]=temp;
        }
        return array;
    }
     binarySearch(target,array){
        const sortedArray=this.insertionSort(array);
        let left=0;
        let right=sortedArray.length-1;
        while(left<=right){
            let mid=Math.floor((right+left)/2);
            if(sortedArray[mid]===target){
                return mid;
            }
            else if(sortedArray[mid]>target){
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }
        return -1;
    }
    selectionSort(array){
        for(let i=0;i<array.length;i++){
            let min=i;
            for(let j=i+1;j<array.length;j++){
                if(array[j]<array[min]){
                    min=j;
                }
                
            }   
             if(i!==min){
                 let temp=array[i];
                 array[i]=array[min];
                 array[min]=temp;
            }
        }
        return array;
    }
 }