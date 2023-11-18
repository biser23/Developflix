import peliculas from './peliculas.js'
console.log(peliculas)

const mostrarPeliculaPorGenero = (generoId, contenedorId) => {
  const contenedor = document.getElementById(contenedorId)
  const peliculaGenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId))

  peliculaGenero.forEach(pelicula => {
    let templatePelis =`
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w200/${pelicula.backdrop_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>
    `
    contenedor.innerHTML += templatePelis
  })

}

mostrarPeliculaPorGenero(28, "genero-28")
mostrarPeliculaPorGenero(53, "genero-53")
mostrarPeliculaPorGenero(12, "genero-12")
