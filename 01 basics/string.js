const name = "aryan" + "verma "
const repo = 15

console.log(name + repo + " value")

console.log(`hello my name is ${name} and i have ${repo} repositories`)  //it will give hello my name is ${name} and i have ${repo} repositories because we are using backticks and not single quotes

const game=new String("tekken")
console.log(game)  //it will give [String: 'tekken'] because we are using new keyword and it will create a string object

console.log(game[0])  //it will give t because it will give the first character of the string
console.log(game[1])  //it will give e because it will give the second character of the string
console.log(game[2])  //it will give k because it will give the third character of the string
console.log(game.__proto__)  //it will give k because it will give the third character of the string

console.log(game.length)  //it will give 6 because it will count the number of characters in the string
console.log(game.toUpperCase()) 
console.log(game.charAt(2)) //it will give k because it will give the third character of the string
console.log(game.indexOf("t")) //it will give 0 because it will give the index of the first occurrence of the character 't'

const newstring=name.substring(0,3)  //it will give tek because it will give the substring from index 0 to index 3
console.log(newstring)
const anotherstring=name.slice(0,3)  //it will give tek because it will give the substring from index 0 to index 3
console.log(anotherstring)

const newstring2=name.substring(-4,3)  //it will give tek because it will give the substring from index 0 to index 3
console.log(newstring2)


const spacestring="   hello world   "
console.log(spacestring)
console.log(spacestring.trim())  //it will give hello world because it will remove the spaces from the beginning and end of the string



const url="https://www.youtube.com/"
url.replace("https","http")  //it will give http://www.youtube.com/ because it will replace the first occurrence of the string "https" with "http"
console.log(url)  //it will give https://www.youtube.com/ because the replace method does not change the original string, it returns a new string with the replacement