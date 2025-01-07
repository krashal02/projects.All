setInterval(() => {
    let d = new Date()
    let hhours = d.getHours()
    let mmintues = d.getMinutes()
    let sseconds = d.getSeconds()

    let hrotation = 30 * hhours + mmintues / 2;
    let mrotation = 6 * mmintues;
    let srotation = 6 * sseconds;

    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`

}, 1000);