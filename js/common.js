// will create the cards for the songs on each page
function displaySongs(songs) {

    const container =
        document.getElementById('song-container');

    container.innerHTML = '';

    songs.forEach(song => {

        const card = document.createElement('div');

        card.classList.add('col');

        card.innerHTML = `

            <div class="card h-100">

                <img 
                    src="${song.image}" 
                    class="card-img-top" 
                    alt="${song.songName}"
                >

                <div class="card-body">

                    <h5>
                        <strong>Song Name:</strong>
                        ${song.songName}
                    </h5>

                    <h5>
                        <strong>Band Name:</strong>
                        ${song.bandName}
                    </h5>

                    <h5>
                        <strong>Release Date:</strong>
                        ${song.releaseDate}
                    </h5>

                    <h5>
                        <strong>Album Name:</strong>
                        ${song.albumName}
                    </h5>

                    <h5>
                        <strong>Run Time:</strong>
                        ${song.runtime}
                    </h5>

                    <button class="btn btn-primary">
                        ${song.fact}
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}
//console.log(displaySongs);

// this is for the filter might need to change it
const filter = document.getElementById("filter");

filter.addEventListener("change", () => {

    const selected = filter.value;

    if (selected === "all") {
        displaySongs(songs);
    } else {
        const filtered = songs.filter(song =>
            song.albumName === selected
        );

        displaySongs(filtered);
    }
});