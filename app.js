(function(){var $=function(i){return document.getElementById(i)};
var m=$('m'),n=$('nv');m.onclick=function(){var o=n.classList.toggle('o');m.setAttribute('aria-expanded',o);m.textContent=o?'Close':'Menu'};n.onclick=function(e){if(e.target.tagName=='A')n.classList.remove('o')};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
/* Minnie: moves around the screen, speech bubble pops */
var mw=$('mw'),mi=$('mi'),ms=$('ms'),mb=$('mb'),cur=ms.textContent,pi=0,cx=0,
PT=[[.03,0],[.8,.16],[.04,.4],[.76,.05],[.42,.28],[.84,.36]];
var MV=!1;/* set MV=!0 to let Minnie walk around the screen again */
var FR={walk:['walk1','walk2'],jog:['jog1','jog2'],sprint:['sprint','stride']},WD={front:86,walk1:165,walk2:165,jog1:160,jog2:155,stride:170,sprint:175,leap:145},tk,fi=0,sc=innerWidth<860?.72:1;
function show(n,f){mi.src='assets/minnie-'+n+'.webp';mi.style.width=(WD[n]*sc)+'px';mi.style.setProperty('--f',f)}
function go(i){var p=PT[i%PT.length],W=innerWidth-mw.offsetWidth-12,x=p[0]*W,d=Math.abs(x-cx)/W,dir=x>=cx?1:-1,k=d<.3?'walk':d<.6?'jog':'sprint',du={walk:3.4,jog:2.6,sprint:1.7}[k];
mw.classList.toggle('r',p[0]>.5);mw.style.setProperty('--d',du+'s');mw.style.transform='translate('+x+'px,'+(-p[1]*innerHeight*.55)+'px)';cx=x;
clearInterval(tk);clearTimeout(go.t);clearTimeout(go.u);fi=0;mi.className=k=='walk'?'mi':'mi mv';show(FR[k][0],dir);
tk=setInterval(function(){fi++;show(FR[k][fi%2],dir)},k=='sprint'?150:260);
go.t=setTimeout(function(){clearInterval(tk);mi.className='mi';show('leap',dir);go.u=setTimeout(function(){show('front',1)},800)},du*1000)}
function pop(c){mb.classList.remove('pop','nd');void mb.offsetWidth;mb.classList.add(c)}
function say(t){if(!t||t==cur)return;cur=t;ms.textContent=t;pop('pop');if(MV)go(++pi)}
var fxs=new Set(),lp=!0;function vis(){mw.classList.toggle('gone',fxs.size>0||!lp)}
var fo=new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?fxs.add(e.target):fxs.delete(e.target)});vis()},{threshold:.2});document.querySelectorAll('.fx').forEach(function(e){fo.observe(e)});
(function lo(){setTimeout(function(){lp=!lp;if(lp){if(MV)go(++pi);pop('pop')}vis();lo()},lp?9000:6000)})();
setInterval(function(){pop('nd')},7000);setTimeout(function(){pop('nd')},1500);
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)say(e.target.dataset.say)})},{threshold:.5});document.querySelectorAll('[data-say]').forEach(function(e){if(e.tagName!='BODY')so.observe(e)});
document.querySelectorAll('.lg').forEach(function(c){c.onclick=function(){c.classList.toggle('on')}});
var dg=$('dg');if(dg){document.querySelectorAll('.bc').forEach(function(c){c.onclick=function(){dg.querySelector('img').src='assets/'+c.dataset.i+'.jpg';dg.querySelector('img').alt=c.dataset.t;dg.querySelector('h3').textContent=c.dataset.t;dg.querySelector('p').textContent=c.dataset.d;dg.querySelector('.bt').href=c.dataset.l;dg.showModal()}});dg.querySelector('.x').onclick=function(){dg.close()};dg.onclick=function(e){if(e.target==dg)dg.close()}}
/* kalimba */
var ac,tm,on=!1,N=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],sd=$('sd');
function nt(){var t=ac.currentTime,f=N[Math.random()*N.length|0];[[f,.05],[f*2.76,.012]].forEach(function(p){var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=p[0];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p[1],t+.01);g.gain.exponentialRampToValueAtTime(1e-4,t+1.8);o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+1.9)});tm=setTimeout(nt,1300+Math.random()*2300)}
sd.onclick=function(){on=!on;sd.setAttribute('aria-pressed',on);if(on){ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();nt()}else clearTimeout(tm)};
document.querySelectorAll('.yv').forEach(function(b){b.onclick=function(){var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.id+'?autoplay=1&rel=0';f.allow='autoplay;encrypted-media;picture-in-picture;fullscreen';f.allowFullscreen=true;f.title=b.dataset.t;b.parentNode.replaceChild(f,b)}});
document.querySelectorAll('.iv').forEach(function(b){b.onclick=function(){var f=document.createElement('iframe');f.src='https://www.instagram.com/reel/'+b.dataset.ig+'/embed/';f.allow='encrypted-media;fullscreen';f.title=b.dataset.t;f.setAttribute('scrolling','no');b.parentNode.replaceChild(f,b)}});
var cf=$('cf');
if(cf){var EP='https://formsubmit.co/ajax/izmamohammad05@gmail.com',st=$('cs'),tz=cf.elements['timezone'],dl=$('tzl'),today=new Date().toISOString().slice(0,10);
function dtz(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){return''}}
try{Intl.supportedValuesOf('timeZone').forEach(function(z){var o=document.createElement('option');o.value=z;dl.appendChild(o)})}catch(e){}
tz.value=dtz();cf.querySelectorAll('input[type=date]').forEach(function(d){d.min=today});
function msg(t,ok){st.textContent=t;st.className=ok?'ok':'er'}
cf.onsubmit=function(e){e.preventDefault();var f=cf.elements;if(f['_honey'].value)return;if(!cf.checkValidity()){cf.reportValidity();return}
var ds=[1,2,3].map(function(i){return{d:f['date'+i].value,a:f['from'+i].value,b:f['to'+i].value}});
if(new Set(ds.map(function(x){return x.d})).size<3){msg('Please choose three different dates.');return}
for(var k=0;k<3;k++)if(ds[k].b<=ds[k].a){msg('For date '+(k+1)+', the end time must be after the start time.');return}
var p={name:f['name'].value,email:f['email'].value,topic:f['topic'].value,linkedin:f['linkedin'].value,timezone:tz.value,_subject:'Virtual coffee request from '+f['name'].value,_template:'table',_captcha:'false'};
ds.forEach(function(x,i){p['availability_'+(i+1)]=x.d+', '+x.a+' to '+x.b+' ('+tz.value+')'});
var bt=cf.querySelector('button[type=submit]');bt.disabled=true;msg('Sending...');
fetch(EP,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(p)}).then(function(r){return r.json()}).then(function(j){bt.disabled=false;if(j&&(j.success===true||j.success==='true')){msg('Thank you! Your request is on its way to Izma. She will reply by email to confirm one of your times.',1);cf.reset();tz.value=dtz()}else throw 0}).catch(function(){bt.disabled=false;var body=Object.keys(p).filter(function(q){return q[0]!='_'}).map(function(q){return q+': '+p[q]}).join('\n');st.className='er';st.innerHTML='Sorry, that did not send. <a class="ul" href="mailto:izmamohammad05@gmail.com?subject='+encodeURIComponent(p._subject)+'&body='+encodeURIComponent(body)+'">Send it with your email app instead</a>.'})}}
var sl=document.querySelector('.sl');if(sl){var si=sl.querySelectorAll('img'),sdt=document.querySelectorAll('.sd2 button'),ix=0,t2;
function sh(n){ix=(n+si.length)%si.length;si.forEach(function(x,i){x.classList.toggle('on',i==ix)});sdt.forEach(function(x,i){x.setAttribute('aria-current',i==ix)})}
function sa(){clearInterval(t2);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t2=setInterval(function(){sh(ix+1)},3200)}
sl.parentNode.onmouseenter=function(){clearInterval(t2)};sl.parentNode.onmouseleave=sa;sdt.forEach(function(x,i){x.onclick=function(){sh(i);sa()}});sh(0);sa()}
})();
