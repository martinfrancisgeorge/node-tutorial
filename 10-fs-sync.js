const {readFileSync,writeFileSync}=require('fs');
console.log('start')
//const  fs=require('fs');
//fs.read can create and write files

const first =readFileSync('./content/first.txt','utf-8');
const second =readFileSync('./content/second.txt','utf-8')

console.log(first,second);

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first},${second}`,
{flag:'a'}
)
//if file not there node create a file if there is one file then node will overwrite all the content
console.log('done with this task')
console.log('starting with the new task')

//reads line by line