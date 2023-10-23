/*This is going to be a project suggesting the artist of the day, 
Featured album and featured song

This can be made using an objet (the name of the artist) 
inside of it having an array of albums 
inside of it having an array of song
*/

// creating album Factory function
// albumArr should include in every index an array where the first index is the name and second index as array of songlist
const albumFactory = (albumArr) => {
    const albumOrder = []
    for (i = 0; i < albumArr.length; i++){
        albumOrder.push({
            _albumName: albumArr[i][0],
            _songList: albumArr[i][1],
            get albumName() {
                return this._albumName;
            },
            get randomSong() {
                // const songCount = this._songList
                return this._songList[Math.floor(Math.random() * this._songList.length)];
            },
        })
    }
    return albumOrder;
}


// creating artist Factory function

const artistFactory = (name, albumArr ) => {
    return {
        name: name,
        albums: albumFactory(albumArr),
    };
}

/*
DPR Ian
['moodswings in this order', 'moodswings in to order', 'dear insanity...']
loop in loop
album will be an array with first index as the name (string) and song list as array for 2nd index
*/

const dprIan = artistFactory('DPR Ian',[
    ['Moodswings In This Order',['MITO','So Beautiful','Dope Lovers','No Blueberries','Nerves','Scaredy Cat','Welcome To The Show','No Silhouette']],
    ['Moodswing In To Order',['Seraph','1 Shot','Mood','Miss Understood','Avalon','Merry Go','Ribbon','Winterfell','Calico','Mr. Insanity','Ballroom Extravaganza','Sometimes I\'m']],
    ['Dear Insanity...',['Famous Last Words','Welcome To The Other Side',"Don't Go Insane",'Bad Cold','So I Danced','Peanut Butter & Tears', 'Violet Crazy']]]);
// console.log (dprIan.artist);
// console.log (dprIan.albums[2].albumName);
// console.log (dprIan.albums[2].randomSong);
// hello
const randomMsg = artist => {
    console.log(`Artist of the day is ${artist.name}`);
    randAlbumNum = Math.floor(Math.random() * artist.albums.length);
    randAlbum = artist.albums[randAlbumNum];
    console.log(`Featured Album is ${randAlbum.albumName}`);
    console.log(`Featured Song is ${randAlbum.randomSong}`);
}

randomMsg(dprIan);