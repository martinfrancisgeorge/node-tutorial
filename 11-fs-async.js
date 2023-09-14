const {readFile,writeFile}=require('fs');

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)

    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err) {
            console.log(err)
            return
        } 
        const second=result
        writeFile(
            './content/result-sync.txt',
            `Here is the result : ${first},${second}`
            ,(err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')
            }) 
    })
})
console.log('starting nect task')



/*Traditional Function Expression:

javascript
Copy code
function add(a, b) {
   return a + b;
}
Arrow Function Equivalent:

javascript
Copy code
const add = (a, b) => a + b;
In your code, the arrow function is used as a callback function for the readFile method. It takes two parameters, err and result, and handles the logic for logging errors and displaying the file content.

*/