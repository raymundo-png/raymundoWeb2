const message = document.getElementById("message")
const Button = document.getElementById("LoadBtn")
const Button2 = document.getElementById("LoadBtn2")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule= document.getElementById("schedule")

Button.addEventListener("click", function(){
    message.innerHTML = "Loading Dashboard..."
    message.style.color = "red"

    const message2Promise = new Promise(function(resolve){

        setTimeout(function(){

            message.innerHTML = "Dashboard is Ready!";

            resolve();
            
        },1000)
    })

    const messagePromise = new Promise(function(resolve){

        setTimeout(function(){

            message.innerHTML = "Dashboard is Ready!";

            resolve();
            
        },1000)
    })

});

Button2.addEventListener("click", function(){
    Button.style.backgroundColor = "blue"
    Button2.style.backgroundColor = "red"

    profile.innerHTML = "Profile: Waiting";
    grades.innerHTML = "grades: Waiting";
    schedule.innerHTML = "schedule: Waiting";

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){

            profile.innerHTML = "Profile: Loaded";

            resolve();

        },1000)
    })

    const gradesPromise = new Promise(function(resolve){

        setTimeout(function(){

            grades.innerHTML = "Grades: Loaded";

            resolve();
            
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){

        setTimeout(function(){

            schedule.innerHTML = "Schedule: Loaded";

            resolve();
            
        },3000)
    })
})
