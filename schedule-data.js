(()=>{
const out=[];
const add=(day,stage,genre,rows)=>rows.forEach((row,i)=>{if(!row[1])return;out.push({id:`s${out.length+1}`,day,start:row[0],end:(rows[i+1]||[])[0]||'',artist:row[1],stage,genre,type:row[2]||'Set'})});
const O='Ozora Stage',P='Pumpui',D='The Dome',G='Dragon Nest / Cooking Groove',V='Visium Garden';

add(2,O,'Psytrance',[
 ['20:00','Opening Ceremony','Ceremony'],['20:30','Hilight Tribe','Live'],['22:00','Humanoids'],['23:30','Koxbox'],['00:00',null]
]);
add(3,O,'Psytrance',[
 ['01:00','Ajja'],['02:30','Fantazma'],['04:00','Boogie Knight'],['05:30','Phobos'],['07:00','Trubble'],['08:30','Noface'],['10:00','Delysid'],['11:30','Spinal Fusion'],['13:00','Starlab'],['14:30','Kalki'],['16:00','Ace Ventura'],['17:30',null],['20:30','Strontium Dogs'],['22:00','Para Halu'],['23:30','Vox Fabri'],['00:00',null]
]);
add(4,O,'Psytrance',[
 ['01:00','Irgum Burgum'],['02:30','Cyber Aghori'],['04:00','Shreder'],['05:30','Gino Sonica'],['07:00','Braincell'],['08:30','Kynethik'],['10:00','Tsubi'],['11:30','Gorovich'],['13:00','Perfect Sphere'],['14:30','Freedom Fighters'],['16:00','Merkaba'],['17:30',null],['20:30','Novelty Engine'],['22:00','Altruism'],['23:30','Avalon'],['00:00',null]
]);
add(5,O,'Psytrance',[
 ['01:00','GMS & Dickster'],['02:30','Tristan'],['04:00','8ternal Beings'],['05:30','Undefined Behavior'],['07:00',null],['16:30','Gong Zen'],['18:00','Simon Borg Olivier Meditation','Meditation'],['19:30','Star Sounds Orchestra','Live'],['21:00','Astral Projection'],['22:30','Neo Shaman'],['00:00',null]
]);
add(6,O,'Psytrance',[
 ['00:00','Tündérke'],['01:30','Rawar'],['03:00','Psynonima'],['04:30','Dirty Saffi'],['06:00','Taku'],['07:30','Hruscsov'],['09:00','Tsuyoshi Suzuki'],['10:30','Modus'],['12:00','Skizologic'],['13:30','Blue Planet Corporation'],['15:00','Etnica'],['16:30',null],['20:30','Shpongle','Live'],['22:00','Grant Darshan'],['23:30','Eat Static','Live'],['00:00',null]
]);
add(7,O,'Psytrance',[
 ['01:00','Giuseppe'],['02:30','Farebi Jalebi'],['04:00','Weirdos'],['05:30','Codex Spiralis'],['07:00','Ondrej Psyla'],['08:30','Martian Arts'],['10:00','Danger and Beyond'],['11:30','Asgard'],['13:00','Talpa'],['14:30','Astrix'],['16:00',null],['19:30','Raja Ram & Lucas'],['21:00','Aardvarkk'],['22:30','Jimi Green'],['00:00',null]
]);
add(8,O,'Psytrance',[
 ['00:00','Ninesense'],['01:30','Act One'],['03:00','Shenanigan'],['04:30','Originz & Rajax'],['06:30','Justin Chaos'],['08:00','He She It'],['09:30','Tron'],['11:00','Amigdala'],['12:30','Egorythmia'],['14:00','Atmos'],['15:30','Headroom'],['17:00','Grouch'],['18:30',null]
]);

add(0,P,'Techno',[
 ['16:00','Switch Nollie & Tsu'],['19:00','Siblicity'],['20:30','Zagi'],['22:00','DJ Reload'],['23:30','Mankind'],['00:00',null]
]);
add(1,P,'Techno',[
 ['01:00','Subotage'],['02:30','DTNB.'],['04:00','Korruptcop'],['05:30','Nova Gravity'],['07:00','Tattoo'],['08:30','Sundi Jr & Paradoiddle'],['10:00','Sundi'],['11:30','Sabee'],['13:00','Robot Bennett'],['14:30','Titusz'],['16:00','Faktor X'],['17:30','Tetrameth'],['19:00','Shadow FX'],['20:30','Detune'],['22:00','Emiri'],['23:30','Pusher'],['00:00',null]
]);
add(2,P,'Techno',[
 ['01:00','Ikoza & Alphakey'],['03:00','Symbionts'],['04:30','Acid Echoes'],['06:00','Rook'],['07:30','Ramizes'],['09:00','Metaverse'],['10:30','Benho & Psymon'],['12:30','Oleg'],['14:00','Captain Hook'],['16:00',null],['22:00','Gaudi'],['00:00',null]
]);
add(3,P,'Techno',[
 ['00:00','Heavy Hertz'],['01:30','Regan'],['03:00','Tongue & Groove'],['04:30','Nanoplex'],['06:00',null],['11:00','Mist'],['13:00','Alma Deya'],['14:30','Airydisc'],['16:00','Bioterranean'],['17:30','Porat'],['19:00','Out of Orbit'],['21:00','Abstrakt'],['22:30','Prometheus'],['00:00',null]
]);
add(4,P,'Techno',[
 ['00:00','Hallucinogen'],['01:30','DJ Solitare'],['03:00','Anoebis'],['04:30','Roy Sason'],['06:00',null],['11:00','Gerö'],['13:00','Zsom'],['14:30','Axeev'],['16:00','Klipsun'],['17:30','Sensient'],['19:30','Captain Pastek'],['21:00','Triforce'],['22:30','Katamii'],['00:00',null]
]);
add(5,P,'Techno',[
 ['00:00','Efedemin'],['01:30','Ignez'],['03:00','Wavecheck'],['04:30','Detective Kelly'],['06:00',null],['21:00','Ewake'],['22:30','Jossie Telch'],['00:00',null]
]);
add(6,P,'Techno',[
 ['00:00','Yuli Fershtat'],['01:30','Jediah'],['03:00','One Million Toys'],['04:30','Miles From Mars'],['06:00',null],['11:00','Bodoo'],['12:30','Antique'],['14:00','Britta Arnold'],['15:30','In Between'],['17:00','Moonclipse'],['18:30','Enrico Sangiuliano'],['20:00','John 00 Fleming'],['21:30','Tom_Ato'],['23:00','Ekkel'],['00:00',null]
]);
add(7,P,'Techno',[
 ['00:00','Sindh'],['02:30','Kalumet'],['04:30','Slym & Szoliver'],['06:00',null],['10:00','Deerfeeder'],['13:00','Szamy'],['14:30','Muteless'],['16:00','Aka Nina'],['18:00','Breger'],['20:00','Roland Handrick'],['21:30','Mode & Valens'],['23:30','Ness'],['00:00',null]
]);
add(8,P,'Techno',[
 ['01:30','Isu'],['03:00','Dork'],['04:30','Lensky'],['06:00',null],['11:00','Adx'],['12:30','Garpo & Ferenc Szanati'],['14:00','Nora Matis'],['15:30','Andras Bader'],['17:00','Infragandhi'],['18:30','Bernathy'],['20:00','Atia'],['22:00','Nevo'],['23:30','Arhetip'],['00:00',null]
]);
add(9,P,'Techno',[
 ['01:00','Neutron'],['02:30','Hatta'],['04:00','Eltawave & Yury'],['06:00',null]
]);

add(2,D,'Ambient / Dub',[
 ['21:00','Opening','Ceremony'],['21:30','Solar Fields','Live'],['23:30','Entheogenic','Live'],['00:00',null]
]);
add(3,D,'Ambient / Dub',[
 ['01:30','Vibrasphere'],['03:00','Yoy Project'],['04:30','Saalyx'],['06:00','Mysticism'],['08:00',null],['12:00','Eat Static'],['14:00','Greg Hunter'],['16:00','Nick Interchill'],['18:00','Aux25'],['19:30','Coloboma & Filip Varial'],['21:00','Zakhorov'],['22:30','DJ Josko'],['00:00',null]
]);
add(4,D,'Ambient / Dub',[
 ['00:30','Ok Eg'],['02:00','Sunju Hargun'],['04:00','Beta'],['06:00','Erro'],['08:00',null],['12:00','Vlastur'],['14:00','S&A in Dub'],['16:00','Crazy Baldhead'],['17:30','Sudden Reverb'],['19:00','Misled Convoy'],['20:30','Tor.Ma in Dub'],['22:00','Giuseppe in Dub'],['23:30','Gabrielle Mar'],['00:00',null]
]);
add(5,D,'Ambient / Dub',[
 ['01:30','Benji Vaughan'],['03:00','Aliji'],['04:30','Aurafood'],['06:30','Dymons'],['08:00',null],['20:30','Banyek'],['21:30','Om Unit'],['22:30','Anatolian Weapons'],['00:00',null]
]);
add(6,D,'Ambient / Dub',[
 ['00:30','Jane Fitz'],['03:30','Crimson'],['06:00','Acideal'],['08:00',null],['12:00','Mirror System'],['14:00','Savaborsa & Richieterrra'],['15:30','Chillum Trio'],['17:00','Zen Baboon'],['19:00','Meo Culpa'],['21:00','Rumpistol'],['22:30','Eclecktic'],['00:00',null]
]);
add(7,D,'Ambient / Dub',[
 ['00:00','Herrhausen & Treindl'],['01:30','Griffin Cloud'],['03:00','Merlyn Silva'],['04:30','Alexander Descroix'],['06:00','Stereomantra'],['08:00',null],['12:00','Kalya Scintilla'],['14:00','Entangled Mind'],['15:30','Geoglyph'],['17:00','Encounters'],['18:30','Lo.Renzo'],['20:00','Bayawaka'],['22:00','Tribone'],['23:30','Mantismash'],['00:00',null]
]);
add(8,D,'Ambient / Dub',[
 ['01:00','The Flying Mars'],['02:30','Cosmic Trigger'],['04:30','Gumi'],['06:00','Cord'],['08:00',null],['12:00','Grouch in Dub'],['13:30','Ajja & Tanina'],['15:30','Nautis'],['17:00','Dubapest Hifi'],['18:30','Lucas in Dub'],['20:30','Globular'],['22:30',null]
]);

add(2,G,'World / Live',[
 ['10:00','Patajana & Karlo Kurbel'],['11:30','Arökem'],['13:00','Frederika'],['14:30','Sebastian Venu'],['16:00',null],['22:00','Brooklyn Gypsies'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(3,G,'World / Live',[
 ['00:30','Operentzia'],['02:30','Populous'],['04:00',null],['10:00','Tom Bini'],['12:00','Earthly Measures'],['13:30','Bellegance & Fraser'],['15:30','Ko Shin Moon'],['17:30','Nana Benz du Togo'],['19:30','Chicha Libre'],['22:00','BCUC'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(4,G,'World / Live',[
 ['00:30','Smag På Dig Selv'],['02:30','Fidju Kitxora'],['04:00',null],['11:00','Sonido Tupinamba'],['12:20','Sibu Manaï'],['14:00','Panache & Grabuge'],['15:30','Giolibri'],['17:30','Marysia Osu & Kibir La Amlak'],['19:30','Noura Mint Seymali'],['22:00','Younger Brother'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(5,G,'World / Live',[
 ['00:30','Ott'],['02:30','Phil Hartnoll (Orbital)'],['04:00',null],['11:00','Djembejam! Drum & Dance Circle','Workshop'],['12:30',null],['22:00','Wild Marmalade'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(6,G,'World / Live',[
 ['00:30','My Baby'],['02:30','Felix Laband'],['04:00',null],['11:00','Mavvi & Antonia'],['12:30','Biomigrant'],['14:00','Sorian'],['15:30','Anicca'],['17:30','Spoink'],['19:30','Colorstar'],['22:00','Gaudi + Don Letts + Earl 16'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(7,G,'World / Live',[
 ['00:30','Dubsahara Meets Vlastur'],['02:30','Pistamashina'],['04:00',null],['11:00','Bass Kovac'],['12:30','MΣO Culpa & Zakhorov'],['14:00','Taiga'],['15:30','Tebra'],['17:30','Kalikamo'],['19:30','Red Snapper'],['22:00','Collignon'],['23:30','Fire Show','Performance'],['00:00',null]
]);
add(8,G,'World / Live',[
 ['00:30','Konono N°1'],['02:30','Broken Breger'],['04:00',null],['17:00','Enki'],['19:30','Heimiya'],['22:00','Mitsoura'],['00:00','All Stars Fire Show','Performance'],['00:30',null]
]);

add(3,V,'Chill / Performance',[
 ['09:00','Tsu'],['11:00','Professor Chill'],['12:30','Titusz'],['15:00','Swanasa'],['16:30','Sunju Hargun'],['18:30','Kebab Symphonie / Danael'],['20:30','Circus Cabaret','Performance'],['23:00','Amenti Theater Company','Performance'],['00:30','Cinema','Cinema'],['02:00',null]
]);
add(4,V,'Chill / Performance',[
 ['09:00','Switch Nollie'],['11:00','Baumb'],['14:00','Smooglers'],['15:30','Aiwa'],['17:00','Atia in Peace'],['18:30','Simon'],['20:30','Hodworks & Artmenok - Idol','Performance'],['23:00','Circus Cabaret','Performance'],['00:30','Cinema','Cinema'],['02:00',null]
]);
add(5,V,'Chill / Performance',[
 ['09:00','Nick Interchill'],['11:00','Blue Sun pres. Hanussen & Kozmod'],['14:30','Marysia Osu'],['16:00','Eclecktic'],['17:00','Rumpistol'],['18:30','Wonky Swing Trio'],['20:30','Circus Cabaret','Performance'],['23:00','Dance and Theatre Impro Jam','Performance'],['00:30','Cinema','Cinema'],['02:00',null]
]);
add(6,V,'Chill / Performance',[
 ['09:00','Gabriel Le Mar'],['11:00','Lazy Calm Raga'],['14:30','Fluidum x Peaq x Fanni Zahar'],['16:30','Anatolian Weapons'],['18:30','Andras Toth'],['20:30','Veronika Szabó - Kingdom','Performance'],['23:00','Hét Hat Club feat. Freak Fusion','Performance'],['00:30','Cinema','Cinema'],['02:00',null]
]);
add(7,V,'Chill / Performance',[
 ['09:00','Pause.Dxa'],['10:30','Bodoo'],['13:30','Platon Karateev Duo'],['15:00','Nathalia'],['17:30','Ssiege'],['18:30','Modern Biology'],['20:30','Circus Cabaret','Performance'],['23:00','Dance and Theatre Impro Jam','Performance'],['00:30','Cinema','Cinema'],['02:00',null]
]);
add(8,V,'Chill / Performance',[
 ['09:00','Alagi & Papa'],['11:30','Ouoa'],['13:00','Kukan Dub Ambient'],['14:30','Zen Baboon'],['16:00',null]
]);

window.OZORA_SCHEDULE=out;
window.OZORA_DATES=['2026-07-25','2026-07-26','2026-07-27','2026-07-28','2026-07-29','2026-07-30','2026-07-31','2026-08-01','2026-08-02','2026-08-03'];
})();
