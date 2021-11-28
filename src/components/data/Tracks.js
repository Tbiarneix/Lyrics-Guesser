const Tracks = [
    {
        singer: 'Beyoncé',
        track: 'Irreplaceable',
        lyric: "To the left, to the left, everything you own in the bow to the left, in the closet, that's my stuff, yes, if I bought it, please don't touch, and keep talking that mess that's fine, But could you walk and talk at the same time? And, it's my name that's on that Jag, So remove your bags, let me call you a cab, Standing in the front you're telling me how I'm such a fool, talking 'bout how I'll never find a man like you, you got me twisted"
    },    
    {
        singer: 'Ed Sheeran',
        track: 'Shape of you',
        lyric: "The club isn't the best place to find a lover, So the bar is where I go (mmmm), Me and my friends at the table doing shots, Drinking fast and then we talk slow (mmmm), And you come over and start up a conversation with just me, And trust me I'll give it a chance now (mmmm)Take my hand, stop, put Van The Man on the jukebox, And then we start to dance, And now I'm singing like, Girl, you know I want your love, Your love was handmade for somebody like me, Come on now, follow my lead"
    },    {
        singer: 'Red Hot Chili Peppers',
        track: "Can't stop",
        lyric: "Can't stop, addicted to the shindig, Chop Top, he says I'm gonna win big, Choose not a life of imitation, Distant cousin to the reservation, Defunct, the pistol that you pay for, This punk, the feelin' that you stay for, In time I want to be your best friend, East side love is living on the West End, Knocked out, but, boy, you better come to (Oh, oh-oh), Don't die, you know, the truth as some do (Oh-oh), Go write your message on the pavement (Oh-oh), Burn so bright, I wonder what the wave meant"
    },
    {
        singer: "Daft Punk",
        track: "Harder, better, faster, stronger",
        lyric: "Work it, make it, do it, makes us, Harder, better, faster, stronger, More than, hour, hour, never, Ever, after, work is over, Work it, make it, do it, makes us, Harder, better, faster, stronger, Work it harder, make it better, Do it faster, makes us stronger, More than ever, hour after, Hour, work is never over, Work it harder, make it better, Do it faster, makes us stronger, More than ever, hour after, Hour, work is never over, Work it harder, make it better, Do it faster, makes us stronger, More than ever, hour after, Hour, work is never over"
    }, 
    {
        singer: "Kelis",
        track: "Milkshake",
        lyric: "My milkshake brings all the boys to the yard, And they're like, It's better than yours, Damn right, It's better than yours, I can teach you, But I have to charge, I know you want it, The thing that makes me what the guys go crazy for. They lose their minds, The way I wind, I think it's time, La, la, la, la, la, Warm it up. La, la, la, la, la, The boys are waiting, My milkshake brings all the boys to the yard, And they're like, It's better than yours, Damn right, It's better than yours"
    },
    {
        singer: "Gala",
        track: "Freed from desire",
        lyric: "My love has got no money, He's got his strong beliefs, My love has got no power, He's got his strong beliefs, My love has got no fame, He's got his strong beliefs, My love has got no money, He's got his strong beliefs, Want more and more, People just want more and more, Freedom and love, What he's looking for, Want more and more, People just want more and more, Freedom and love, What he's looking for, Freed from desire, Mind and senses purified, Freed from desire, Mind and senses purified"
    },
    {
        singer: "Shakira",
        track: "Hips don't lie",
        lyric: "Ladies up in here tonight, No fighting, We got the refugees up in here, No fighting, no fighting, Shakira, Shakira, I never really knew that she could dance like this, She make a man wanna speak Spanish, Cómo se llama (sí), bonita (sí), mi casa (sí, Shakira Shakira), su casa, Oh baby when you talk like that, You make a woman go mad, So be wise (Si!) and keep on (Si!), Reading the signs of my body, (Uno, dos, tres, cuatro), I'm on tonight, You know my hips don't lie, And I'm starting to feel it's right, All the attraction, the tension, Don't you see baby? this is perfection"
    },
    {
        singer: "Lou Bega",
        track: "Mambo n° 5",
        lyric: "Ladies and gentlemen, This is Mambo No. 5! One, two, three, four, five, Everybody in the car, so come on let's ride, To the liquor store around the corner, The boys say they want some gin and juice, But I really don't wanna, Beer bust, like I had last week, I must stay deep, 'cause talk is cheap, I like Angela, Pamela, Sandra and Rita, And as I continue you know they're getting sweeter, So what can I do? I really beg you, my Lord, To me flirting is just like a sport, Anything fly, it's all good let me dump it, Please set in the trumpet, A little bit of Monica in my life"
    },
    {
        singer: "Britney Spears",
        track: "Hit me baby one more time",
        lyric: "Oh, baby, baby, Oh, baby, baby, Oh, baby, baby, How was I supposed to know, That something wasn't right here?, Oh, baby, baby, I shouldn't have let you go, And now you're out of sight, yeah, Show me how you want it to be, Tell me, baby, Cause I need to know now, oh, because, My loneliness, Is killing me and I, I must confess, I still believe, still believe, When I'm not with you I lose my mind, Give me a sign, Hit me, baby, one more time, oh baby baby, the reason i breathe is you, boy you got me blinded, oh pretty baby"
    },
    {
        singer: "Corona",
        track: "The rythm of the night",
        lyric: "This is the rhythm of the night, The night, Oh yeah, The rhythm of the night, This is the rhythm of my life, My life, Oh yeah, The rhythm of my life, You could put some joy upon my face, Oh, sunshine in an empty place, Take me to turn to and babe I'll make you stay, Oh, I can ease you of your pain, Feel you give me love again, Round and round we go, each time I hear you say, This is the rhythm of the night, The night, Oh yeah, The rhythm of the night, This is the rythm of the night, the night, oh yeah"
    },
    {
        singer: "Alicia Keys",
        track: "Fallin'",
        lyric: "I keep on falling in and outta love with you, Sometimes I love ya, sometimes you make me blue, Sometimes I feel good, at times I feel used, Loving you, darling, makes me so confused, I keep on falling in and out, Of love with you, I never loved someone, The way that I love you, Oh, oh, I never felt this way, How do you give me so much pleasure, And cause me so much pain? (Yeah, yeah), Just when I think I've taken more than would a fool, I start falling back in love with you, I keep on falling in and out, Of love with you, I never loved someone (Someone), The way that I love you (Way I)"
    },
    {
        singer: "Bob Marley",
        track: "I shot the Sheriff",
        lyric: "I shot the sheriff, but I did not shoot the deputy I shot the sheriff, but I did not shoot the deputy All around in my home town They're trying to track me down They say they want to bring me in guilty For the killing of a deputy For the life of a deputy, but I say I shot the sheriff, but I swear it was in self-defense I shot the sheriff, and they say it is a capital offense"
    },
    {
        singer: "Deep Purple",
        track: "Smoke on the Water",
        lyric: "We all came out to Montreux On the Lake Geneva shoreline To make records with a mobile We didn't have much time Frank Zappa and the Mothers Were at the best place around But some stupid with a flare gun Burned the place to the ground Smoke on the water A fire in the sky Smoke on the water"
    },
    {
        singer: "The Beatles",
        track: "Let it be",
        lyric: "When I find myself in times of trouble, Mother Mary comes to me Speaking words of wisdom, let it be And in my hour of darkness she is standing right in front of me Speaking words of wisdom, let it be Let it be, let it be, let it be, let it be Whisper words of wisdom, let it be And when the broken hearted people living in the world agree There will be an answer, let it be For though they may be parted, there is still a chance that they will see There will be an answer, let it be"
    },
    {
        singer: "Pink Floyd",
        track: "Another Brick In The Wall",
        lyric: "We don't need no education We don't need no thought control No dark sarcasm in the classroom Teachers leave them kids alone Hey! Teacher, leave them kids alone! All in all it's just another brick in the wall All in all you're just another brick in the wall We don't need no education We don't need no thought control No dark sarcasm in the classroom  Teachers leave them kids alone Hey! Teacher, leave us kids alone! All in all you're just another brick in the wall All in all you're just another brick in the wall "
    },
    {
        singer: "The Police",
        track: "Roxane",
        lyric: "Roxanne You don't have to put on the red light Those days are over You don't have to sell your body to the night Roxanne You don't have to wear that dress tonight Walk the streets for money You don't care if it's wrong or if it's right Roxanne You don't have to put on the red light Roxanne You don't have to put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light I loved you since I knew you"
    },
    {
        singer: "ABBA",
        track: "Gimme! Gimme! Gimme!",
        lyric: "Half past twelve And I'm watching the late show in my flat all alone How I hate to spend the evening on my own Autumn winds Blowing outside my window as I look around the room And it makes me so depressed to see the gloom There's not a soul out there No one to hear my prayer Gimme, gimme, gimme a man after midnight Won't somebody help me chase the shadows away Gimme, gimme, gimme a man after midnight Take me through the darkness to the break of the day"
    },
    {
        singer: "Depeche Mode",
        track: "Enjoy the silence",
        lyric: "Words like violence Break the silence Come crashing in Into my little world Painful to me Pierce right through me Can't you understand? Oh, my little girl All I ever wanted All I ever needed Is here in my arms Words are very unnecessary They can only do harm Vows are spoken To be broken Feelings are intense Words are trivial Pleasures remain So does the pain Words are meaningless And forgettable All I ever wanted All I ever needed Is here in my arms Words are very unnecessary They can only do harm "
    },
    {
        singer: "Phil Collins",
        track: "Another day in paradise",
        lyric: "She calls out to the man on the street Sir, can you help me? It's cold and I've nowhere to sleep Is there somewhere you can tell me? He walks on, doesn't look back He pretends he can't hear her Starts to whistle as he crosses the street Seems embarrassed to be there Oh, think twice, 'cause it's another day for you and me in paradise Oh, think twice, 'cause it's another day for you You and me in paradise Think about it"
    },
    {
        singer: "MC HAMMER",
        track: "U Can't Touch This",
        lyric: "You can't touch this You can't touch this You can't touch this You can't touch this My, my, my, my You can't touch this Music hits me so hard Makes me say Oh, my Lord Thank you for blessing me With a mind to rhyme and two hyped feet It feels good when you know you're down A super dope homeboy from the Oaktown And I'm known as such And this is a beat, uh, you can't touch I told you, homeboy You can't touch this Yeah, that's how we livin', and ya know You can't touch this"
    },
    {
        singer: "Shaggy",
        track: "Hey sexy lady",
        lyric: "Hey sexy lady, I like your flow Your body's burnin', I lost control Your booty on me, ceiling to floor Only you can make me scream and beg for more Everybody's callin', ballin', hot me crawlin' up the wallin' and- My size ain't small, less tall and catch a glimpse of clothes be fallin' Her neighbor's callin', ballin', all this noise is so appallin' They must believe we're brawlin', head boards bang 'til early this mornin' Hey sexy lady, I like your flow Your body's burnin', I lost control Your booty on me, ceiling to floor Only you can make me scream and beg for more"
    },
    {
        singer: "Justin Timberlake",
        track: "Cry me a river",
        lyric: "You were my sun, you were my earth But you didn't know all the ways I loved you, no So you took a chance, made other plans But I bet you didn't think that they would come crashing down, no You don't have to say, what you did I already know, I found out from him Now there's just no chance With you and me There'll never be Don't it make you sad about it? You told me you love me Why did you leave me all alone Now you tell me you need me When you call me on the phone Girl, I refuse You must have me confused with some other guy The bridges were burned Now it's your turn, to cry Cry me a river Cry me a river Cry me a river Cry me a river"
    },
    {
        singer: "Rihanna",
        track: "Rude Boy",
        lyric: "Come here rude boy, boy Can you get it up? Come here rude boy, boy Is you big enough? Take it, take it yeah Baby, baby yeah Take it, take it yeah Love me yeah love me Come here rude boy, boy Can you get it up? Come here rude boy, boy Is you big enough? Take it, take it yeah Baby, baby yeah Take it, take it yeah Love me yeah love me Tonight, I'ma let you be the captain Tonight, I'ma let you do your thing, yeah Tonight, I'ma let you be a rider Giddy up, giddy up, giddy up, babe"
    },
    {
        singer: "Madcon",
        track: "Beggin",
        lyric: "Oh Put your loving hand out, baby I'm beggin' Beggin', beggin' you Put your loving hand out, baby Beggin', beggin' you Put your loving hand out, darling Riding high, when I was king Played it hard and fast, 'cause I had everything Walked away, wonderin' then But easy come and easy go And it would end So why every time I lead you let me go? Every time I reach, you get me low Every time I seek, you let me know But I planted that seed, just let me grow I'm on my knees while I'm beggin' 'Cause I don't want to lose you I got my arms all spread I hope that my heart gets fed Matter of fact, girl, I'm beggin' beggin', beggin'"
    },
    {
        singer: "Katy Perry",
        track: "I Kissed a girl",
        lyric: "This was never the way I planned Not my intention I got so brave, drink in hand Lost my discretion It's not what I'm used to Just wanna try you on I'm curious for you Caught my attention I kissed a girl and I liked it The taste of her cherry chap stick I kissed a girl just to try it I hope my boyfriend don't mind it It felt so wrong It felt so right Don't mean I'm in love tonight I kissed a girl and I liked it I liked it"
    },
    {
        singer: "M.I.A.",
        track: "Paper Plane",
        lyric: "I fly like paper, get high like planes If you catch me at the border I got visas in my name If you come around here, I make 'em all day I get one done in a second if you wait I fly like paper, get high like planes If you catch me at the border I got visas in my name If you come around here, I make 'em all day I get one done in a second if you wait Sometimes I think sitting on trains Every stop I get to I'm clocking that game Everyone's a winner, we're making our fame Bona fide hustler making my name Sometimes I think sitting on trains Every stop I get to I'm clocking that game Everyone's a winner, we're making our fame Bona fide hustler making my name"
    },
    {
        singer: "Pony pony run run",
        track: "Hey you",
        lyric: "I take my time today It's not an easy game Many sights to be seen if you say so It's no too easy, baby Crossing lines Don't let me feel this way Rage in my eyes So, so say Take my time Let me find a way To take my time today Wish i was Young enough Wish you were Made just for me Wish i was Young enough I wish you were Made just Hey you No you don't have to go Oh-oh No you don't have to do so Hey you No you don't have to go Oh-oh No you don't have to do so Hey you No you don't have to go Oh-oh No you don't have to do so Hey you No you don't have to go Oh-oh"
    },
    {
        singer: "Adele",
        track: "Skyfall",
        lyric: "This is the end Hold your breath and count to ten Feel the Earth move and then Hear my heart burst again For this is the end I've drowned and dreamt this moment So overdue, I owe them Swept away, I'm stolen Let the sky fall When it crumbles We will stand tall Face it all together Let the sky fall When it crumbles We will stand tall Face it all together At Skyfall At Skyfall Skyfall is where we start A thousand miles and poles apart Where worlds collide and days are dark You may have my number, you can take my name But you'll never have my heart"
    },
    {
        singer: "Aloe Black",
        track: "I Need a dollar",
        lyric: "I need a dollar, dollar a dollar is what I need Hey hey Well I need a dollar, dollar a dollar is what I need Hey hey And I said I need dollar dollar, a dollar is what I need And if I share with you my story would you share your dollar with me Bad times are coming and I reap what I don't sow Hey hey Well let me tell you something all that glitters ain't gold Hey hey It's been a long old trouble long old troublesome road And I'm looking for somebody come and help me carry this load"
    },
    {
        singer: "Frero Delavega",
        track: "Le Chant des Sirènes",
        lyric: "Enfants des parcs, gamins des plages Le vent menace les châteaux de sable façonnés de mes doigts Le temps n'épargne personne hélas Les années passent, l'écho s'évade sur la Dune du Pyla Au gré des saisons, des photomatons Je m'abandonne à ces lueurs d'autrefois Au gré des saisons, des décisions, je m'abandonne Quand les souvenirs s'en mêlent, les larmes me viennent Et le chant des sirènes me replonge en hiver Oh mélancolie cruelle, harmonie fluette, euphorie solitaire"
    },
    {
        singer: "Imagine Dragons",
        track: "Radioactive",
        lyric: "I'm waking up to ash and dust I wipe my brow and I sweat my rust I'm breathing in the chemicals I'm breaking in, shaping up, then checking out on the prison bus This is it, the apocalypse Whoa I'm waking up, I feel it in my bones Enough to make my systems blow Welcome to the new age, to the new age Welcome to the new age, to the new age Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive"
    },
]

export default Tracks;