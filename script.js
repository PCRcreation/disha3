// Typing effect for the role line
const roles=['Aspiring Software Developer','Web Development Learner','Problem Solver'];
const el=document.getElementById('role');let r=0,c=0,del=false;
if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=roles[0]}else{
(function tick(){
  const w=roles[r];
  el.textContent=w.slice(0,c);
  if(!del&&c<w.length){c++;setTimeout(tick,80)}
  else if(!del){del=true;setTimeout(tick,1400)}
  else if(c>0){c--;setTimeout(tick,40)}
  else{del=false;r=(r+1)%roles.length;setTimeout(tick,300)}
})()}
// Scroll reveal + active nav link
document.querySelectorAll('.sec .facts,.sec .skills,.sec .list,.sec .card,.sec .form,.sec h2').forEach(e=>e.classList.add('reveal'));
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>rv.observe(e));
const links=[...document.querySelectorAll('nav a')];
const sp=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s=>sp.observe(s));
// Contact form opens the visitor's email app. Replace you@example.com, or use Formspree/Netlify Forms.
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  const body=encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`);
  location.href=`mailto:you@example.com?subject=Portfolio%20message&body=${body}`;
  document.getElementById('status').textContent='Opening your email app...';
});
document.getElementById('yr').textContent=new Date().getFullYear();
