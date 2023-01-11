const posts=[
    {title:'Post one', body:'This is post one',createdat:new Date().getTime()},
    {title:'Post Two', body:'This is post Two',createdat:new Date().getTime()}
]
let intervalid=0
function getpost(){
    clearInterval(intervalid);
     intervalid =setInterval(() => {
            let output='';
            posts.forEach((post,index)=>{
             output+=`<li>${post.title}-- createdAT ${(new Date().getTime()-post.createdat)/1000} second ago</li>`;
            })
            document.body.innerHTML=output;
       
    }, 1000);
    
}
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdat:new Date().getTime()});

            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong');
            }
            
         }, 2000);
    })
   
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length>0){
           
            resolve( posts.pop());
            }
            else{
               reject('Array is empty')
            }
        
        }, 3000);
    })
}

// createpost({title:'Post three',body:'This is post three'})
// .then(()=>{
//     getpost()
//     deletepost()
// })
// .catch(err=>console.log(err));
// createpost({title:'Post Four',body:'This is post Four'})
// .then(()=>{
//     getpost();
//     deletepost().then(()=>{
//         getpost();
//         deletepost().then(()=>{
//             getpost();
//             deletepost().then(()=>{
//                 getpost();
//                 deletepost().then(()=>{})
//                 .catch((err)=>{console.log('Inside catch block',err)})
//             })
            
//         })
//     })
// })
// .catch(err=>{console.log(err)});







//promise .All
const user ={
    username:'Shivang',
    lastactivitytime:'jan 2 th '
}

 function updateLastActivity(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
       user.lastactivitytime=new Date().getTime();
       resolve(user.lastactivitytime) 
    }, 1000);
  })
}


// const promises1=Promise.resolve('Hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Good day')
// });
// Promise.all([promises1,promise2,promise3]).then(values=>console.log(values));


        Promise.all([createpost({title:'Post three',body:'This is post three'}),updateLastActivity()])
        .then(([cretepostresolves,updatelastactivityresolve])=>{
            getpost();
            console.log('User last activity time'+updatelastactivityresolve);

            // console.log(cretepostresolves);
        })
        .catch(err=>console.log(err))
    
    
    Promise.all([deletepost(),updateLastActivity()])
    .then(([deletetedpost,updatelastactivityresolve])=>{
        console.log('User last activity time'+updatelastactivityresolve);
        console.log(deletetedpost);
    })
    .catch(err=>console.log(err));