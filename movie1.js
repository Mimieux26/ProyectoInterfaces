const link_api = 'https://api.themoviedb.org/3/movie/popular?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=es&page=1';
const url_images = 'https://image.tmdb.org/t/p/w300';





const main = document.getElementById('section1');

getPelicula(link_api);

function getPelicula(link) {
    fetch(link).then(res => res.json()).then(data => {
        showPeli(data.results);

    })
}


function showPeli(data) {
    main.innerHTML = '<h1>Pel&iacute;culas Populares</h1>';
    data.forEach(peli => {
        const { title, poster_path, vote_average, overview } = peli;
        const peliElement = document.createElement('div');
        peliElement.classList.add('pelicula');
        peliElement.innerHTML += `
        <img src="images/placeholder.jpg" data-src="${url_images+poster_path}" alt="${title}" id="imagen">
        
            <div class="peli-info">
                    <h3>${title}</h3>
                    <p>
                    <input type="radio" name="valoracion" value= "1">
                    <label for="radio1">❤</label>
                    <input type="radio" name="valoracion" value= "2">
                    <label for="radio2">❤</label>
                    <input type="radio" name="valoracion" value= "3">
                    <label for="radio3">❤</label>
                    <input type="radio" name="valoracion" value= "4">
                    <label for="radio4">❤</label>
                    <input type="radio" name="valoracion" value= "5">
                    <label for="radio5">❤</label>
                    </p>

                    
                    <button id="vermas" onclick="vermasdesc()">Ver mas</button>
                
            </div>
            <div class="descripcion" id="desct">
                <div id="toggle" onclick="toggle()"></div>
                <h3>Descripcion</h3>
                ${overview}

            
            </div>
        `

        main.appendChild(peliElement);


    });

/***currying***/
    const options={
        root:null,
        threshold:1,
        rootMargin:'10px'
       
    };
    const img= document.querySelectorAll('#imagen');
    console.log(img);
    function callback(entries, observer){
        
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
    })
    

    






}





function vermasdesc(){
    let sec=document.getElementsByClassName('descripcion');
    console.log(sec);
    sec[0].classList.value = 'descripcion active';


    /*sec.classList.value='descripcion active'*/

}

function toggle() {
    let desco = document.getElementById('desct');
    desco.classList.value = 'descripcion deactive'





}







