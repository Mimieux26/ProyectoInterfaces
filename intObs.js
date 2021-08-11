const options={

    threshold:1,
    rootMargin:'50px'
}
const img= document.querySelectorAll('#imagen');
function callback(entries, observer){
    
    entries.forEach(entry=>{
        console.log('Intercepcion', entry.target);
        if(entry.isIntersecting){
            
                entry.target.src=entry.target.dataset.src;
                observer.unobserve(entry.target);
        }



    });


}
const observer = new IntersectionObserver(callback,options)
observer.observe(img)

img.forEach(i=>{
    observer.observe(i);
})