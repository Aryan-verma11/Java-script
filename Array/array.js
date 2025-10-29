console.log("lets learn about the arrya in javascripyt")


let arr=[1,2,3,4,5,7]
console.log(arr);
// array are mutable and string are immutable so we can change the array
arr[1]=9;
console.log(arr);
//  methods of array
// 1.tostring
console.log(arr.toString());
//2.join 
console.log(arr.join(" and "))
//3.pop
a=[1,2,3,4,5];
let c=a.pop()
console.log(a)
console.log(c)
//4.push
a.push("aryan")
console.log(a)
//5.shift pahly wale elemet ko  nikal dega
console.log(a.shift())
//6.unshift element ko pahly index me add kar deta hai
a.unshift("verma")
console.log(a)
// 7.delete
delete a[3]
console.log(a)
//8.concate method union of the array without changing the existing array
a1=[1,2,3,4]
a2=[5,6,7,8]
a3=[9,10,11,12]
let d=a1.concat(a2,a3)
console.log(d)
// 9.splice ye method hmmey ek position sy elements ko nikalne me ya fir insert krny me madad krta hai
let num=[7,8,9,10,11,12,13]
let e=num.splice(1,2,5456,3454)
console.log(e)
console.log(num)//inserting 
