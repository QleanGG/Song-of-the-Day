/*This is going to be a project suggesting the artist of the day, 
Featured album and featured song

This can be made using an objet
inside of it having the name of the artists and an array of albums 
inside of it having an array of songs
*/

import artists from "./modules/artists.js";

const YOUTUBE_API_KEY = 'AIzaSyAU8L3Ul7gYe3UIByqf5Nbi4XLQQVcpTHk'; // Replace with your YouTube API key

const searchYouTube = async (artistName, songName) => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(`${artistName} ${songName}`)}&type=video&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            console.log(`Watch on YouTube: ${videoUrl}`);
            const videoContainer = document.getElementById('youtube-video');
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            console.error('No search results found on YouTube.');
        }
    } catch (error) {
        console.error('Error fetching data from YouTube API:', error);
    }
};



//Function to announce the random artist, random album and random song

function randomArtist() {
    const artistKeys = Object.keys(artists);
    const randomArtistKey = artistKeys[Math.floor(Math.random()* artistKeys.length)];
    return artists[randomArtistKey];
    
}

const randomMsg = async artist => {
    console.log(`Artist of the day is "${artist.name}"`);
    const randAlbumNum = Math.floor(Math.random() * artist.albums.length);
    const randAlbum = artist.albums[randAlbumNum];
    const randomSong = randAlbum.randomSong();
    console.log(`Featured Album is "${randAlbum.albumName}"`);
    console.log(`Featured Song is "${randomSong}"`);

    await searchYouTube(artist.name, randomSong);


    // putting it on the html
    const artistContainer = document.getElementById('random-artist');
    artistContainer.innerHTML = `
    <h2>Artist of the day is:"${artist.name}"</span><br>
    <h3>Album of the day is:"${randAlbum.albumName}"</h3><br>
    <img src = "./${randAlbum.image}" width=400px height=400px><br>
    <p>Featured Song is:"${randomSong}"</p>`;
}

//Function that take an array of artist objects and randomly picks an artist
// const allArtistsRandomMessage = artistsArr => randomMsg(artistsArr[Math.floor(Math.random() * artistsArr.length)]);


// const allArtists = Object.values(artists);


randomMsg(randomArtist())