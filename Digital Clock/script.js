

setInterval(()=>{
    const time = new Date()

    document.getElementById("clock").innerText = time.toLocaleTimeString()
},1000)