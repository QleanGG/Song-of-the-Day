/*This is going to be a project suggesting the artist of the day, 
Featured album and featured song

This can be made using an objet
inside of it having the name of the artists and an array of albums 
inside of it having an array of songs
*/

// creating album Factory function
// albumArr should include in every index an array where the first index is the name of the album and second index as an array of the songlist
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
/*
receiving album input before the factory setting will be an array with first index as the name (string) and song list as array for 2nd index
*/

const artistFactory = (name, albumArr ) => {
    return {
        name: name,
        albums: albumFactory(albumArr),
    };
}

//Function to announce the random artist, random album and random song
const randomMsg = artist => {
    console.log(`Artist of the day is "${artist.name}"`);
    randAlbumNum = Math.floor(Math.random() * artist.albums.length);
    randAlbum = artist.albums[randAlbumNum];
    console.log(`Featured Album is "${randAlbum.albumName}"`);
    console.log(`Featured Song is "${randAlbum.randomSong}"`);
}

//Function that take an array of artist objects and randomly picks an artist
const allArtistsRandomMessage = artistsArr => randomMsg(artistsArr[Math.floor(Math.random() * artistsArr.length)]);

//adding artists

const art1 = artistFactory('DPR Ian',[
    ['Moodswings In This Order',['MITO','So Beautiful','Dope Lovers','No Blueberries','Nerves','Scaredy Cat','Welcome To The Show','No Silhouette']],
    ['Moodswing In To Order',['Seraph','1 Shot','Mood','Miss Understood','Avalon','Merry Go','Ribbon','Winterfall','Calico','Mr. Insanity','Ballroom Extravaganza','Sometimes I\'m']],
    ['Dear Insanity...',['Famous Last Words','Welcome To The Other Side',"Don't Go Insane",'Bad Cold','So I Danced','Peanut Butter & Tears', 'Violet Crazy']]]);

const art2 = artistFactory('System of a Down',[
    ['Toxicity',['Prison Song','Needles','Deer Dance','Jet Pilot','X','Chop Suey!','Bounce','Forest','ATWA','Science','Shimmy','Toxicity','Psycho','Aerials']],
    ['Steal This Album!',["Chic 'N' Stu",'Innervision','Bubbles','Boom!','Nügun','A.D.D(American Dream Denial)','Mr. Jack','I-E-A-I-A-I-O','36','Pictures','Highway Song','F*** The System','Ego Brain','Theatwaves','Roulette','Streamline']],
    ['Mezmerize',['Soldier Side - Intro','B.Y.O.B','Revenga','Cigaro','Radio/Video','This Cocaine Makes Me Feel Like I\'m On This Song','Violent Pornography','Question!','Sad Statue','Old School Hollywood','Lost In Hollywood']]]);    

const art3 = artistFactory('Skrillex',[
    ['Bangarang',['Right In','Bangarang',"Breakn' A Sweat","The Devil's Den",'Right on Time','Kyoto','Summit']],
    ['More Monsters And Sprites',["First Of The Year(Equinox)","Ruffneck(Flex)","Ruffneck(FULL Flex)",'Scary Monsters And Nice Sprites (Dirtyphonics Remix)','Scary Monsters And Nice Sprites (Phonat Remix)','Scary Monsters And Nice Sprites (The Juggernaut Remix)','Scary Monsters And Nice Sprites (Kaskade Remix)']],
    ['Recess',['All Is Fair In Love And Brostep','Recess','Stranger','Try It Out','Coast Is Clear','Dirty Vibe','Ragga Bomb','Doompy','Fuck That','Ease My Mind','Fire Away']]]);

const art4 = artistFactory('Toe',[
    ['The Future Is Now',['Run for Word','Tsukikake','Ordinary Days','The Future Is Now']],
    ['For Long Tomorrow',['Everything Is Here, It Can Be Said That Nothing Is Here, Too.','Vanishing Point And Whistle','After Image','Esoteric',"Say It Ain't So",'Two Moons',"Cant Hear Mosquitone Any More",'Last Night','You Go','Goodbye','You Go','Our Next Movement','Long Tomorrow']],
    ['The Book About My Idle Plot On A Vague Anxiety',['Hangyakusurufuukei','Kodokunohatsumei','Tremolo And Delay','Mukou Gishi Ga Miru Yume','All I Understand Is That I Don\'t Understand','C','Past And Language','Music For You','I Do Still Wrong','Metronome','Everything Means Nothing']]]);

const art5 = artistFactory('Nujabes',[
    ['Metaphorical Music',['Blessing It (Remix)','Horn In The Middle','Lady Brown','Kumomi','Highs 2 Lows','Beat Laments The World','Letter From Yokosuka','Think Different','A Day By Atmosphere Supreme','Next View','Latitude (Remix)','F.I.L.O','Summer Gypsy','The Final View','Peaceland']],
    ['Modal Soul',['Feather','Ordinary Joe','Reflection Eternal','Luc(sic.) Pt3','Music Is Mine','Eclipse','The Sign','Thank You','World\'s End Rhapsody','Modal Soul','Flowers','Sea Of Cloud','Light On The Land','Horizon']],
    ['Spiritual State',['Spiritual State','Sky Is Tumbling','Gone Are The Days','Spiral','City Lights','Dawn On The Side','Yes','Rainyway Back Home','Far Fowls','Fellows','Waiting For The Clouds','Prayer','Island']]]);
    
const art6 = artistFactory('Red Hot Chili Peppers',[
    ['Blood Sugar Sex Magik',['The Power Of Equality','If You Have To Ask','Breaking The Girl','Funky Monks','Suck My Kiss','I Could Have Lied','Mellowship Slinky In B Major','The Righteous & The Wicked','Give It Away','Blood Sugar Sex Magik','Under The Bridge','Naked In The Rain','Apache Rose Peacock','The Greeting Song','My Lovely Man','Sir Psycho Sexy','They\'re Red Hot']],
    ['Californication',['Around The World','Parallel Universe','Scar Tissue','Otherside','Get On Top','Californication','Easily','Porcelain','Emit Remmus','I Like Dirt','This Velvet Glove','Savior','Purple Stain','Right On Time','Road Trippin\'']],
    ['By The Way',['By The Way','Universally Speaking','This Is The Place','Dosed','Don\'t Forget Me','The Zepthyr Song','Can\'t Stop','I Could Die For You','Midnight','Throw Away Your Television','Cabron','Tear','On Mercury','Minor Thing','Warm Tape','Venice Queen']]]);

const art7 = artistFactory('Metallica',[
    ['Ride The Lightining',['Fight Fire With Fire','Ride The Lightning','For Whom The Bell Tolls','Fade To Black','Trapped Under Ice','Escape','Creeping Death','The Call Of Ktulu']],
    ['Master Of Puppets',['Battery','Master Of Puppets','The Thing That Should Not Be','Welcome Home(Sanitarium)','Disposable Heroes','Leper Messiah','Orion','Damage, Inc.']],
    ['Metallica (Black Album)',['Enter Sandman','Sad But True',' Hoiler Than Thou','The Unforgiven','Wherever I May Roam','Do\'nt Tread One Me','Through The Never','Nothing Else Matters','Of Wolf And Man','The God That Failed','My Friend Of Misery','The Struggle Within']]]);

const art8 = artistFactory('Megadeth',[
    ['Peace Sells... But Who\'s Buying?',['Wake Up Dead','The Conjuring','Peace Sells','Devils Island','Good Mourning / Black Friday','Bad Omen','I Ain\'T Superstitous','My Last Words']],
    ['Rust In Peace',['Holy Wars...The Punishment Due','Hangar 18','Take No Prisoners','Five Magics','Poison Was The Cure','Lucretia','Tornado Of Souls','Dawn Patrol','Rust In Peace...Polaris']],
    ['Countdown To Extinction',["Skin O' My Teeth",'Symphony Of Destruction','Architecture Of Aggression','Foreclosure Of A Dream','Sweating Bullets','This Was My Life','Countdown To Extinction','High Speed Dirt','Psychotron','Captive Honour','Ashes In Your Mouth']]]);

const art9 = artistFactory('Bulletproof Tiger',[
    ['Stab the New Cherry',['Just One More Night, Baby?','Momentum Boooooooooootssss','Sometimes I Feel So Sick At The State Of The World I Can\'t Even Finish My Second Apple Pie','We Like Girls Who Have Dicks And Look Like Men And Also Are Men','Outdoor Muscle, Gay Sex Revenge']],
    ['You Wanna Kiss About it?',['Franko Spanlo\'s Greatest Hit','Everything Popular is Wrong','An Awkward Moment With a Grilled Cheese Sandwich','Our Band Name Sucks','Garth "The Belt" Brooks','Paper, Socks, Raper','Christopher "Walken" Reeve','Menter Mandman']]]);

const art10 = artistFactory('No Knife',[
    ['Drunk On The Moon',['Be Mini','Ginger Vitus','Habits','Punch \'N\' Judy','At The Heart Of The Terminal','Kiss Your Killer','Ephedrine','Small Of My Back','...If I Could Float...','Titanic','Daniels']],
    ['Fire In The City Of Automatons',['Academy Flight Song','Minus 1','Secret Handshake','Heavy Weather','K-214','The Spy','Charming','Angel Bomb','Short Term Memory','Under The Moon','Mission Control','If It Moves Kiss It']],
    ['Riot For Romance!',['Riot For Romance!','Permanent For Now','Swinging Lovers','Parting Shot','Feathers And Furs','The Red Bedroom','Brush Off','May I Call You Doll?','Flechette','This Moonlife']]]);

// creating an array of artists    
const artists = [art1,art2,art3,art4,art5,art6,art7,art8,art9,art10];

// implamenting the run code
allArtistsRandomMessage(artists);