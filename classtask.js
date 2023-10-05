var button =document.getElementById("button");
button.innerHTML=5
var count=5
setTimeout(()=>{
    count=count-1
    button.innerHTML=count
    setTimeout(()=>{
        count=count-1
        button.innerHTML=count
        setTimeout(()=>{
            count=count-1
            button.innerHTML=count
            setTimeout(()=>{
                count=count-1
                button.innerHTML=count
                setTimeout(()=>{
                    count=count-1
                    button.innerHTML="Happy Independence Day!!!"
                })
            },1000)

        },1000)
    },1000)
},1000)
