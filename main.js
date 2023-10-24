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

const randomMsg = artist => {
    console.log(`Artist of the day is ${artist.name}`);
    randAlbumNum = Math.floor(Math.random() * artist.albums.length);
    randAlbum = artist.albums[randAlbumNum];
    console.log(`Featured Album is ${randAlbum.albumName}`);
    console.log(`Featured Song is ${randAlbum.randomSong}`);
}

const dprIan = artistFactory('DPR Ian',[
    ['Moodswings In This Order',['MITO','So Beautiful','Dope Lovers','No Blueberries','Nerves','Scaredy Cat','Welcome To The Show','No Silhouette']],
    ['Moodswing In To Order',['Seraph','1 Shot','Mood','Miss Understood','Avalon','Merry Go','Ribbon','Winterfell','Calico','Mr. Insanity','Ballroom Extravaganza','Sometimes I\'m']],
    ['Dear Insanity...',['Famous Last Words','Welcome To The Other Side',"Don't Go Insane",'Bad Cold','So I Danced','Peanut Butter & Tears', 'Violet Crazy']]]);

const system = artistFactory('System of a Down',[
    ['Toxicity',['Prison Song','Needles','Deer Dance','Jet Pilot','X','Chop Suey!','Bounce','Forest','ATWA','Science','Shimmy','Toxicity','Psycho','Aerials']],
    ['Steal This Album!',["Chic 'N' Stu",'Innervision','Bubbles','Boom!','Nügun','A.D.D(American Dream Denial)','Mr. Jack','I-E-A-I-A-I-O','36','Pictures','Highway Song','F*** The System','Ego Brain','Theatwaves','Roulette','Streamline']],
    ['Mezmerize',['Soldier Side - Intro','B.Y.O.B','Revenga','Cigaro','Radio/Video','This Cocaine Makes Me Feel Like I\'m On This Song','Violent Pornography','Question!','Sad Statue','Old School Hollywood','Lost In Hollywood']]]);    

const skrillex = artistFactory('Skrillex',[
    ['Bangarang',['Right In','Bangarang',"Breakn' A Sweat","The Devil's Den",'Right on Time','Kyoto','Summit']],
    ['More Monsters And Sprites',["First Of The Year (Equinox)","Ruffneck (Flex)","Ruffneck (FULL Flex)",'Scary Monsters And Nice Sprites (Dirtyphonics Remix)','Scary Monsters And Nice Sprites (Phonat Remix)','Scary Monsters And Nice Sprites (The Juggernaut Remix)','Scary Monsters And Nice Sprites (Kaskade Remix)']],
    ['Recess',['All Is Fair In Love And Brostep','Recess','Stranger','Try It Out','Coast Is Clear','Dirty Vibe','Ragga Bomb','Doompy','Fuck That','Ease My Mind','Fire Away']]]);

const toe = artistFactory('Toe',[
    ['The Future Is Now',['Run for Word','Tsukikake','Ordinary Days','The Future Is Now']],
    ['For Long Tomorrow',['Everything Is Here, It Can Be Said That Nothing Is Here, Too.','Vanishing Point And Whistle','After Image','Esoteric',"Say It Ain't So",'Two Moons',"Cant Hear Mosquitone Any More",'Last Night','You Go','Goodbye','You Go','Our Next Movement','Long Tomorrow']],
    ['The Book About My Idle Plot On A Vague Anxiety',['Hangyakusurufuukei','Kodokunohatsumei','Tremolo And Delay','Mukou Gishi Ga Miru Yume','All I Understand Is That I Don\'t Understand','C','Past And Language','Music For You','I Do Still Wrong','Metronome','Everything Means Nothing']]]);

const nujabes = artistFactory('Nujabes',[
    ['Metaphorical Music',['Blessing It (Remix)','Horn In The Middle','Lady Brown','Kumomi','Highs 2 Lows','Beat Laments The World','Letter From Yokosuka','Think Different','A Day By Atmosphere Supreme','Next View','Latitude (Remix)','F.I.L.O','Summer Gypsy','The Final View','Peaceland']],
    ['Modal Soul',['Feather','Ordinary Joe','Reflection Eternal','Luc(sic.) Pt3','Music Is Mine','Eclipse','The Sign','Thank You','World\'s End Rhapsody','Modal Soul','Flowers','Sea Of Cloud','Light On The Land','Horizon']],
    ['Spiritual State',['Spiritual State','Sky Is Tumbling','Gone Are The Days','Spiral','City Lights','Dawn On The Side','Yes','Rainyway Back Home','Far Fowls','Fellows','Waiting For The Clouds','Prayer','Island']]]);
    
