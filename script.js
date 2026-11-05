const openButton=document.getElementById('openLetter');
const letter=document.getElementById('letter');
const poemButton=document.getElementById('openPoem');
const poem=document.getElementById('poem');
const answerArea=document.getElementById('answerArea');

openButton.addEventListener('click',()=>{
  letter.classList.remove('hidden');
  openButton.classList.add('hidden');
  poemButton.classList.remove('hidden');
  letter.scrollIntoView({behavior:'smooth',block:'nearest'});
});
poemButton.addEventListener('click',()=>{
  poem.classList.remove('hidden');
  poemButton.classList.add('hidden');
  answerArea.classList.remove('hidden');
  poem.scrollIntoView({behavior:'smooth',block:'nearest'});
});
document.getElementById('yesBtn').addEventListener('click',()=>{
  document.getElementById('reply').textContent='Me acabas de sacar una sonrisa enorme. ❤️';
});
document.getElementById('thinkBtn').addEventListener('click',()=>{
  document.getElementById('reply').textContent='Está bien, tómate tu tiempo. Gracias por leerme. 🌷';
});
const heartLayer=document.querySelector('.hearts');
function makeHeart(){
  const heart=document.createElement('span');
  heart.className='heart';heart.textContent=Math.random()>.5?'♡':'♥';
  heart.style.left=Math.random()*100+'vw';
  heart.style.fontSize=(12+Math.random()*18)+'px';
  heart.style.animationDuration=(7+Math.random()*6)+'s';
  heartLayer.appendChild(heart);setTimeout(()=>heart.remove(),14000);
}
setInterval(makeHeart,850);
