let div1 = document.createElement('div')
div1.id="drag"
document.body.appendChild(div1)

let drawing = false
let lastX
let lastY
document.onmousedown = (e)=>{
  drawing = true
  lastX = e.clientX
  lastY = e.clientY
}
document.onmousemove = (e)=>{
  if(drawing){
    let detaX = e.clientX - lastX
    let detaY = e.clientY - lastY
    let top = parseInt(div1.style.top)||0
    let left = parseInt(div1.style.left)||0
    let resultY = top + detaY
    let resultX = left + detaX
    if(resultX<0){
      resultX = 0
    }
    if(resultY<0){
      resultY = 0
    }
    let width = document.body.clientWidth
    let height = document.body.clientHeight
    let {width:divWidth,height:divHeight} = div1.getBoundingClientRect()
    if(resultX>= 0+width-divWidth){
      resultX = width-divWidth
    }
    if(resultY>= 0+height-divHeight){
      resultY = height-divHeight
    }
    div1.style.top = resultY + 'px'
    div1.style.left = resultX + 'px'
    lastX = e.clientX
    lastY = e.clientY
  }
}
document.onmouseup = ()=>{
drawing = false
}
