
const img= document.querySelectorAll('.pelicula');
 async function intersection(entries, observer){
    entries.forEach(entry=>{
        console.log(entry.target);
    })

}

const options={

    threshold:1,
    rootMargin:'50px'
}
const observer=new IntersectionObserver(intersection,options);



img.forEach(pelicula=>{
    observer.observe(pelicula);
});




/*function callback(entries, observer){

    
    entries.forEach(entry=>{
        console.log('Intercepcion', entry.target);
        if(entry.isIntersecting){
            
                entry.target.src= entry.target.dataset.src;
                observer.unobserve(entry.target);
        }



    });


}
const observer = new IntersectionObserver(callback,options)
observer.observe(imagen)

img.forEach(i=>{
    observer.observe(i);
})*/
