let result = document.getElementById('result');

function songsAre() {
        const searchBox = document.getElementById('searchBox').value;
        const url = `https://api.lyrics.ovh/suggest/${searchBox}`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                for (let i = 0; i < 10; i++) { 
                    var title = data.data[i].title;
                    var artist = data.data[i].artist.name;

                    result.innerHTML += `<div id ="show-lyrics"class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${title}</h3>
                    <p class="author lead">Album by <span>${artist}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick ="allLyrics('${artist}','${title}')" class="btn btn-success">Get Lyrics</button>
                </div>`

                }
            })
    
}
// 

function allLyrics(artist, title) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('show-lyrics').innerText = data.lyrics;
            result.innerText = " ";
        });
}