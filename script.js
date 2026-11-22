// Typing role
const roles=['Java Full Stack Developer','Java and SQL Developer','Web Developer'];
let ri=0,ci=0,del=false;const el=document.getElementById('role');
(function type(){const w=roles[ri];el.textContent=w.slice(0,ci);
  if(!del&&ci++===w.length){del=true;return setTimeout(type,1500)}
  if(del&&--ci===0){del=false;ri=(ri+1)%roles.length}
  setTimeout(type,del?35:80)})();
// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('section,.stats').forEach(s=>io.observe(s));
// Scroll progress + active nav link
const links=[...document.querySelectorAll('nav ul a')];
addEventListener('scroll',()=>{const h=document.documentElement;
  document.getElementById('bar').style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+'%';
  let cur='';document.querySelectorAll('section[id]').forEach(s=>{if(s.getBoundingClientRect().top<140)cur=s.id});
  links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))});

// Marquee: duplicate content for a seamless loop
const tr=document.querySelector('.track');tr.innerHTML+=tr.innerHTML;
// Animated counters
const cnt=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cnt.unobserve(e.target);
  e.target.querySelectorAll('[data-c]').forEach(b=>{const t=+b.dataset.c,d=t%1?1:0,t0=performance.now();
    (function f(n){const p=Math.min((n-t0)/1400,1);b.textContent=(t*(1-Math.pow(1-p,3))).toFixed(d);if(p<1)requestAnimationFrame(f)})(t0)})}),{threshold:.4});
document.querySelectorAll('.stats,.plan').forEach(x=>cnt.observe(x));
// Card spotlight follows the pointer
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();
  c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
// Photo parallax tilt
const ph=document.querySelector('.photo img');
addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  ph.style.transform=`perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`});

// Colour palette switcher
document.querySelectorAll('.pal button').forEach(b=>b.onclick=()=>{document.body.dataset.theme=b.dataset.t;
  document.querySelectorAll('.pal button').forEach(x=>x.classList.toggle('on',x===b))});
// Back to top button
const topBtn=document.getElementById('top');
addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>700));
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});