function ObtenerLocal(data) {
    main.innerHTML = '<h1>Pel&iacute;culas Favoritas</h1>';
    data.forEach(peli => {
        const { title, poster_path, overview, id } = peli;

        const peliElement = document.createElement('div');
        peliElement.classList.add('pelicula');
        peliElement.innerHTML += `
            <img src="images/placeholder.jpg" data-src="${localStorage+poster_path}" alt="${title}" id="imagen">
            
                <div class="peli-info">
                        <h3>${title}</h3>
                        <p>
                        <input type="radio" onclick="guardarPeliculaPopu(${localStorage},1)" name="valoracion" value= "1">
                        <label for="radio1">❤</label>
                        </p>
    
                        
                        <button id="vermas" onclick="toggle(${id})">Ver mas</button>
                    
                </div>
                <div class="descripcion" id="${id}">
                    <div id="toggle" onclick="toggle(${id})"></div>
                    <h3>Descripcion</h3>
                    ${overview}
    
                
                </div>
            `

        main.appendChild(peliElement);


    });

}