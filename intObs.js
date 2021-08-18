function IntersectionObs(){

const options={
    root:null,
    threshold:1,
    rootMargin:'10px'
   
};
const img= document.querySelectorAll('img');


function callback(entries, observer){    
    entries.forEach(entry=>{
        /*console.log('Intercepcion', entry.target);*/
        if(entry.isIntersecting){
            
                entry.target.src= entry.target.dataset.src;
                observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver(callback,options)

img.forEach(i=>{
    observer.observe(i);
})

}