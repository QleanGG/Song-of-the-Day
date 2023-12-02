/*This is going to be a project suggesting the artist of the day, 
Featured album and featured song

This can be made using an objet
inside of it having the name of the artists and an array of albums 
inside of it having an array of songs
*/

import artists from "./modules/artists.js";

//Function to announce the random artist, random album and random song

function randomArtist() {
    const artistKeys = Object.keys(artists);
    const randomArtistKey = artistKeys[Math.floor(Math.random()* artistKeys.length)];
    return artists[randomArtistKey];
    
}

const randomMsg = artist => {
    console.log(`Artist of the day is "${artist.name}"`);
    const randAlbumNum = Math.floor(Math.random() * artist.albums.length);
    const randAlbum = artist.albums[randAlbumNum];
    console.log(`Featured Album is "${randAlbum.albumName}"`);
    console.log(`Featured Song is "${randAlbum.randomSong()}"`);

    // putting it on the html
    const artistContainer = document.getElementById('random-artist');
    artistContainer.innerHTML = `
    <h2>Artist of the day is:"${artist.name}"</span><br>
    <h3>Album of the day is:"${randAlbum.albumName}"</h3><br>
    <img src = "./${randAlbum.image}" width=400px height=400px><br>
    <p>Featured Song is:"${randAlbum.randomSong()}"</p>`;
}

//Function that take an array of artist objects and randomly picks an artist
const allArtistsRandomMessage = artistsArr => randomMsg(artistsArr[Math.floor(Math.random() * artistsArr.length)]);


const allArtists = Object.values(artists);


randomMsg(randomArtist())