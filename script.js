const all = document.querySelector('.all');
const tl = document.querySelector('.tl');
const tr = document.querySelector('.tr');
const bl = document.querySelector('.bl');
const br = document.querySelector('.br');
const bw = document.querySelector('.bw');
const bc = document.querySelector('.bc');
const bgc = document.querySelector('.bgc'); 

const block = document.querySelector('.block');
const textarea = document.querySelector('.block textarea');

function setRadius() {
  block.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`
  block.style.border = `${bw.value}px solid ${bc.value}`
  block.style.background = `${bgc.value}`
  
  textarea.textContent = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px ${bw.value}px solid ${bc.value}`
  
  textarea.style.color = 'white'
}

// All
all.addEventListener('input', function() {
  // block.style.borderRadius = all.value + 'px'
  
  setRadius()
  
  tl.value = all.value
  tr.value = all.value
  br.value = all.value
  bl.value = all.value
})

// Top Left
// tl.addEventListener('input', function() {
//   block.style.borderTopLeftRadius = tl.value + 'px'
// })

tl.addEventListener('input', setRadius)

// Top Right
tr.addEventListener('input', setRadius)

// Bottom Right
br.addEventListener('input', setRadius)

// Bottom Left
bl.addEventListener('input', setRadius)

// 
bw.addEventListener('input', setRadius)
bc.addEventListener('input', setRadius)
bgc.addEventListener('input', setRadius)


