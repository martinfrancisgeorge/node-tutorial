const os=require('os')//built in module
const user=os.userInfo();
console.log(user)


//method that return system up time in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentos={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos);
 