const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav nav');if(toggle)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
function subscribe(e){e.preventDefault();const f=e.currentTarget;const m=document.getElementById('form-message');m.textContent='Thanks — you’re on the list.';f.reset()}
function contactSubmit(e){e.preventDefault();const f=e.currentTarget;const m=document.getElementById('contact-message');m.textContent='Thanks! Your message is ready to be connected to an email service.';f.reset()}
