const quizarr=[
    {
        question:"Which HTTP status code represents a 'Not Found' error?",
        answer:[
            {
              text:"200",
               correct:false
            },
            {
              text:"404", 
              correct:true
            },
            {
              text:"500",
               correct:false
            },
            {
              text:"302", 
              correct:false
            }

        ]
    },
    {
       question:"What is the purpose of the 'alt' attribute in an <img> tag?",
        answer:[
            {
              text:"To provide a link", 
              correct:false
            },
            {
              text:"To style the image", 
              correct:false
            },
            {
              text:"Alternative text if image fails to load", 
              correct:true
            },
            {
              text:"To set image alignment", 
              correct:false
            }
        ]
    },
    {
        question:"Which JavaScript method is used to select an element by its ID?",
        answer:[
            {
                text:"querySelect()",
                 correct:false
            },
            {
                text:"getElementById()",
                 correct:true
            },
            {
                text:"getElementByClass()", 
                correct:false
            },
            {
                text:"findAll()",
                 correct:false
            }
        ]
    },
    {
       question:"What is the main function of the Operating System's Kernel?",
        answer:[
            {
                text:"Graphic Design",
                 correct:false
            },
            {
                text:"Resource management and Hardware communication",
                 correct:true
            },
            {
                text:"Web Browsing", 
                correct:false
            },
            {
                text:"Database indexing",
                 correct:false
            }
        ]
    },
    {
      question:"What is 'Deadlock' in an Operating System?",
      answer:[
        {
           text:"A computer virus",
           correct:false
        },
        {
          text:"A state where processes are blocked waiting for each other",
           correct:true
        },
        {
           text:"A high-speed internet connection",
           correct:false
        },
        {
          text:"Shutting down the PC",
           correct:false
        }
      ]
    },
    {
      question:"Which of the following is an example of an Open Source OS?",
      answer:[
        {
           text:"Windows 11",
           correct:false
        },
        {
          text:"macOS",
           correct:false
        },
        {
           text:"Linux",
           correct:true
        },
        {
          text:"iOS",
           correct:false
        }
      ]
    },
    {
      question:"What does SQL stand for?",
      answer:[
        {
           text:"Simple Query Language",
           correct:false
        },
        {
          text:"Structured Query Language",
           correct:true
        },
        {
           text:"System Quick Look",
           correct:false
        },
        {
          text:"Standard Queue List",
           correct:false
        }
      ]
    },
    {
      question:"Which key uniquely identifies a record in a database table?",
      answer:[
        {
           text:"Foreign Key",
           correct:false
        },
        {
          text:"Primary Key",
           correct:true
        },
        {
           text:"Unique Key",
           correct:false
        },
        {
          text:"Composite Key",
           correct:false
        }
      ]
    },
    {
      question:"What is 'Normalization' in DBMS used for?",
      answer:[
        {
           text:"To increase data redundancy",
           correct:false
        },
        {
          text:"To reduce data redundancy and improve integrity",
           correct:true
        },
        {
           text:"To delete the database",
           correct:false
        },
        {
          text:"To create backups",
           correct:false
        }
      ]
    },
    {
      question:"Which SQL command is used to remove all records from a table without deleting the table structure?",
      answer:[
        {
           text:"DROP",
           correct:false
        },
        {
          text:"TRUNCATE",
           correct:true
        },
        {
           text:"DELETE",
           correct:false
        },
        {
          text:"DELETE ALL",
           correct:false
        }
      ]
    },
];
const  question=document.getElementById("question")
const butt=document.querySelectorAll(".button")
const button=document.querySelector(".all")
const step=document.querySelector(".last")
const body=document.querySelector("body")
const special=document.querySelector(".quiz")
const timebutt=document.querySelector(".time")
const message=document.querySelector(".message")
 let currentquestionindex=0;
 let score=0;
  startquiz()
 function startquiz(){
  if(currentquestionindex==(quizarr.length)-1){
    showquestion()
    step.innerHTML=`<b>Finish</b>`  }
  else{
     step.innerHTML="Next"
  showquestion()
  }
 }
 function showquestion(){
    let currentquestion=quizarr[currentquestionindex]
    let questionno=currentquestionindex+1;
    question.innerHTML=`${questionno} . ${currentquestion.question}`
    currentquestion.answer.forEach((l,index)=>{
       butt[index].innerHTML=l.text;
       butt[index].dataset.correct=l.correct;
 })
 }
 button.addEventListener("click",function(e){
  if(e.target.tagName==="BUTTON"){
    if(e.target.dataset.correct==="true"){
      e.target.style.border="2px solid green"
      e.target.style.backgroundColor="#9fddb9ff"
        score++;
    }
    else{
      e.target.style.border="2px solid red"
      e.target.style.backgroundColor="#ecb2b2ff"
      butt.forEach((l)=>{
        if(l.dataset.correct==="true"){
          l.style.border="2px solid green"
          l.style.backgroundColor="#9aeabc"
        }
      })
    }
    butt.forEach((l)=>{
    l.setAttribute("disabled","")
  })
  }
 })
 step.addEventListener("click",function(e){
  if(step.innerHTML=="Play Again"){
   location.reload()
    return;
  }
  currentquestionindex++;
  butt.forEach((l)=>{
    l.removeAttribute("disabled")
    l.removeAttribute("style")
  })
  if(currentquestionindex<quizarr.length){
    startquiz()
  }
 else{
  question.innerHTML=`Score ${score} out of ${currentquestionindex}`
  button.innerHTML=""
  step.innerHTML="Play Again"
      clearInterval(t)
  if(score===quizarr.length){
    message.innerHTML="Outstanding! 🏆"
    confetti({
      particleCount:300,
      spread:50,
      angel:60,
      origin:{x:0,y:1}
    })
    confetti({
      particleCount:300,
      spread:50,
      angle:120,
      origin:{x:1,y:1}
    })
  }
  else if(score>(quizarr.length/2)){
    message.innerHTML="Good job! 👍"
  }
     else{
     message.innerHTML="Keep Learning! 📚 Practice makes perfect"
  }
 }
 })
 let timeleft=300;
 const t=setInterval(function(){
 let minutes=Math.floor(timeleft/60);
 let second=timeleft%60;
 timebutt.innerHTML=`${minutes <10 ? '0':""}${minutes}:${second<10?'0':""}${second}`
 if(timeleft<=0){
  question.innerHTML=`Score ${score} out of ${quizarr.length}`
  button.innerHTML=""
  step.innerHTML="Play Again"
 }
 else{
  timeleft--;
 }
 },1000)
 
 }

 })
