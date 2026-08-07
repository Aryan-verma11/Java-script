// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr =[2,2,3,4,4,5]

function doublearray(arr){
    let length=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            length.push(arr[i]*2)
        }
        else{
            length.push(arr[i]*2)
        }
    }
    return length;
}

console.log(doublearray(arr))