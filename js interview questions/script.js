//1. The Magical Sorting Hat:
 //Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["aryan","tanu","aditya","abhishek","karan","rishabh","daksha","sumit","naveen","khushi","rohan","anjali","robert"]

let house =[]

console.log(students.length)

for (const student of students){
    if(student.length< 6){
        house.push("jwala house")
    }
    else if (student.length<8){
        house.push("naina house")
    }
    else if (student.length<12){
        house.push("saraswati house")
    }
    else{
        house.push("vindhya house")
    }
    
}

console.log(house)

