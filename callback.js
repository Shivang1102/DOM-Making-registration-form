const posts=[
    {title:'Post one', body:'This is post one',createdat:new Date().getTime()},
    {title:'Post Two', body:'This is post Two',createdat:new Date().getTime()}
]
let intervalid=0
function getpost(){
    clearInterval(intervalid);
     intervalid =setInterval(() => {
        setTimeout(() => {
            let output='';
            posts.forEach((post,index)=>{
             output+=`<li>${post.title}-- createdAT ${(new Date().getTime()-post.createdat)/1000} second ago</li>`;
            })
            document.body.innerHTML=output;
        }, 1000); 
    }, 1000);
    
}
function createpost(post,callback){
 setTimeout(() => {
    posts.push({...post,createdat:new Date().getTime()});
    callback()
 }, 2000);
}
function create4post(post,callback){
setTimeout(() => {
    posts.push({...post,createdat:new Date().getTime()});
    callback()
}, 3000);
}

createpost({title:'Post Three',body:'This is post three'},getpost);
create4post({title:'Post Four',body:'This is post Four'},getpost);