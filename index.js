console.log("jithu");
// explicitly commit to push your code to github
const app = require('./app')
const {PORT}= process.env
app.listen(PORT,()=>{
    console.log(`SERVER running at port ${PORT}`);
})