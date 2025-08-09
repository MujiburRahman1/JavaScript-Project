// document.write(new Date())

setInterval(() => {
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hr = now.getHours()

    document.getElementById("seconds").style.transform = `rotate(${sec * 6}deg)`
    document.getElementById("minutes").style.transform = `rotate(${min * 6}deg)`
    document.getElementById("hour").style.transform = `rotate(${(hr % 12) * 30 + min / 2}deg)`

})