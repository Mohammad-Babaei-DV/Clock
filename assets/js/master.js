let ds = document.getElementById('sec')
let dm = document.getElementById('min')
let dh = document.getElementById('hor')
setInterval(clock, 1000);

function clock() {
    let datee = new Date()
    let s = datee.getSeconds()
    ds.style.transform='rotate('+(s*6)+'deg)'
    let m = ((datee.getMinutes())*60)
    dm.style.transform='rotate('+(m*.1)+'deg)'
    let h = ((datee.getHours())*3600)
    dh.style.transform='rotate('+(h*0.00833)+'deg)'
}
clock()