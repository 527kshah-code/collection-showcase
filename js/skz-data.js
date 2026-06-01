const songs = [
    {
        songName: "MEGAVERSE",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:05",
        image: "imgs/1.png",
        fact: "Fans love the fast rap flow changes and multiverse concept."
    },
    {
        songName: "LALALALA",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:02",
        image: "imgs/1.png",
        fact: "The song mixes rock sounds with Stray Kids' signature energy."
    },
    {
        songName: "BLIND SPOT",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:20",
        image: "imgs/1.png",
        fact: "This track talks about overcoming fears and self-doubt."
    },
    {
        songName: "COMFLEX",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "2:52",
        image: "imgs/1.png",
        fact: "The title combines 'complex' and 'flex' to celebrate individuality."
    },
    {
        songName: "Cover Me",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:11",
        image: "imgs/1.png",
        fact: "A softer emotional track that highlights the vocal line."
    },
    {
        songName: "Leave",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:39",
        image: "imgs/1.png",
        fact: "This song focuses on heartbreak and letting someone go."
    },
    {
        songName: "Social Path (feat. LiSA)(Korean Ver.)",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:17",
        image: "imgs/1.png",
        fact: "It features Japanese singer LiSA and was released in both Korean and Japanese versions."
    },
    {
        songName: "LALALALA (Rock Ver.)",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:07",
        image: "imgs/1.png",
        fact: "The song mixes rock sounds with Stray Kids' signature energy."
    },
    {
        songName: "The Tortoise and the Hare",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:44",
        image: "imgs/2.png",
        fact: "Was written and released as a joke because Han wrote his part in 15 minutes while drunk."
    },
    {
        songName: "Back Door",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:09",
        image: "imgs/2.png",
        fact: "Back Door became one of Stray Kids' most iconic title tracks."
    },
    {
        songName: "B Me",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:25",
        image: "imgs/2.png",
        fact: "This song showcases emotional vocals and reflective lyrics."
    },
    {
        songName: "Any",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:49",
        image: "imgs/2.png",
        fact: "This song explores themes of uncertainty and self-discovery."
    },
    {
        songName: "Ex",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:37",
        image: "imgs/2.png",
        fact: "This song delves into the complexities of past relationships and the pain of moving on."
    },
    {
        songName: "We Go (Bang Chan, Changbin, Han)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:37",
        image: "imgs/2.png",
        fact: "This unit track highlights the members’ unique chemistry."
    },
    {
        songName: "WOW (Lee Know, Felix, Hyunjin)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:13",
        image: "imgs/2.png",
        fact: "This song is known for its catchy hook and dynamic performance."
    },
    {
        songName: "My Universe (Seungmin, I.N)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:23",
        image: "imgs/2.png",
        fact: "This unit track highlights the members’ unique chemistry."
    },
    {
        songName: "Easy",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:03",
        image: "imgs/2.png",
        fact: "The choreography is known for looking effortless but being difficult."
    },
    {
        songName: "Pacemaker",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:10",
        image: "imgs/2.png",
        fact: "Is a comforting, supportive anthem that compares life to a marathon."
    },
    {
        songName: "Airplane",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:34",
        image: "imgs/2.png",
        fact: "This song is known for its dreamy atmosphere and emotional depth."
    },
    {
        songName: "Another Day",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:46",
        image: "imgs/2.png",
        fact: "This song reflects on the passage of time and the inevitability of change."
    },
    {
        songName: "Phobia",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:32",
        image: "imgs/2.png",
        fact: "This song delves into the complexities of past relationships and the pain of moving on."
    },
    {
        songName: "Blueprint",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "4:11",
        image: "imgs/2.png",
        fact: "Blueprint has a bright summer vibe and motivational lyrics."
    },
    {
        songName: "TA",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:28",
        image: "imgs/2.png",
        fact: "Known for its energetic beat and powerful rap sections."
    },
    {
        songName: "Heaven",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:19",
        image: "imgs/2.png",
        fact: "This song is known for its uplifting message and catchy melody."
    },
    {
        songName: "Go LIVE",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "1:50",
        image: "imgs/3.png",
        fact: "This song is known for its energetic beat and powerful rap sections."
    },
    {
        songName: "God's Menu",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "2:47",
        image: "imgs/3.png",
        fact: "The cooking concept and 'du du du' line made this song go viral."
    },
    {
        songName: "TOP ('Tower of God' OP)",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "1:50",
        image: "imgs/3.png",
        fact: "This song is the opening theme for the anime 'Tower of God'."
    },
    {
        songName: "SLUMP ('Tower of God' ED)",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "2:14",
        image: "imgs/3.png",
        fact: "This song is the ending theme for the anime 'Tower of God'."
    },
    {
        songName: "Mixtape: Gone Days",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "3:14",
        image: "imgs/3.png",
        fact: "This mixtape features a collection of unreleased tracks and remixes."
    },
    {
        songName: "Mixtape: On Track",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "3:28",
        image: "imgs/3.png",
        fact: "This mixtape showcases the group's versatility and creative range."
    },
    {
        songName: "CHEESE",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:02",
        image: "imgs/4.png",
        fact: "The song playfully responds to criticism from haters."
    },
    {
        songName: "Thunderous",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:03",
        image: "imgs/4.png",
        fact: "The song blends traditional Korean sounds with hip-hop."
    },
    {
        songName: "DOMINO",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:18",
        image: "imgs/4.png",
        fact: "The lyrics compare success spreading like falling dominoes."
    },
    {
        songName: "SSICK",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:10",
        image: "imgs/4.png",
        fact: "The song is about feeling overwhelmed by life's challenges."
    },
    {
        songName: "The View",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:21",
        image: "imgs/4.png",
        fact: "The song offers a unique perspective on life's experiences."
    },
    {
        songName: "Sorry, I Love You",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "2:57",
        image: "imgs/4.png",
        fact: "The song is about expressing love and apologizing for mistakes."
    },
    {
        songName: "Silent Cry",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:29",
        image: "imgs/4.png",
        fact: "Despite the upbeat instrumental, the lyrics are emotional."
    },
    {
        songName: "Secret Secret",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:29",
        image: "imgs/4.png",
        fact: "The song is about keeping secrets and the weight of hidden truths."
    },
    {
        songName: "Star Lost",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:35",
        image: "imgs/4.png",
        fact: "The song is about losing something precious and the pain that comes with it."
    },
    {
        songName: "Red Lights (Bang Chan, Hyunjin)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:09",
        image: "imgs/4.png",
        fact: "This unit song became famous for its dark concept and choreography."
    },
    {
        songName: "Surfin' (Lee Know, Changbin, Felix)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:11",
        image: "imgs/4.png",
        fact: "The song is about the excitement of riding the waves."
    },
    {
        songName: "Gone Away (Han, Seungmin, I.N)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "4:01",
        image: "imgs/4.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "WOLFGANG",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:10",
        image: "imgs/4.png",
        fact: "The wolf howling in the chorus became a fan favorite detail."
    },
    {
        songName: "Mixtape: OH",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:32",
        image: "imgs/4.png",
        fact: "The song is a mixtape featuring various collaborations."
    },
    {
        songName: "Do It",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:39",
        image: "imgs/5.png",
        fact: "The song is about taking action and making things happen."
    },
    {
        songName: "DIVINE",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "3:07",
        image: "imgs/5.png",
        fact: "The song is about divine intervention and spiritual guidance."
    },
    {
        songName: "Holiday",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "3:07",
        image: "imgs/5.png",
        fact: "The song is about the joy and excitement of the holiday season."
    },
    {
        songName: "Photobook",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:53",
        image: "imgs/5.png",
        fact: "This song showcases emotional vocals and reflective lyrics."
    },
    {
        songName: "Do It (Festival Ver.)",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:27",
        image: "imgs/5.png",
        fact: "The festival version features a more energetic beat."
    },
    {
        songName: "FAM (Korean Ver.)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:33",
        image: "imgs/6.png",
        fact: "The Korean version features a more emotional delivery."
    },
    {
        songName: "Connected (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:51",
        image: "imgs/6.png",
        fact: "The song is about the connection between people."
    },
    {
        songName: "Limbo (Lee Know)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:17",
        image: "imgs/6.png",
        fact: "The song is about being caught between two worlds."
    },
    {
        songName: "DOODLE (Changbin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:04",
        image: "imgs/6.png",
        fact: "The song is about the excitement of riding the waves."
    },
    {
        songName: "Love Untold (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:30",
        image: "imgs/6.png",
        fact: "The song is about unspoken feelings and hidden emotions."
    },
    {
        songName: "RUN (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:58",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "Deep End (Felix)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:28",
        image: "imgs/6.png",
        fact: "The song is about the depths of emotion and the journey through them."
    },
    {
        songName: "Tears and Raindrops (Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:49",
        image: "imgs/6.png",
        fact: "The song is about the emotional impact of loss and the healing process."
    },
    {
        songName: "Hug Me (I.N)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:00",
        image: "imgs/6.png",
        fact: "The song is about the comfort of having someone you trust close to you."
    },
    {
        songName: "#LoveSTAY",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:17",
        image: "imgs/6.png",
        fact: "The song is about the power of love and staying connected."
    },
    {
        songName: "ZONE(Bang Chan, Changbin, Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:32",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "Close (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:46",
        image: "imgs/6.png",
        fact: "The song is about the importance of close relationships."
    },
    {
        songName: "Streetlight(Changbin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:09",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "i hate to admit (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "The song is about the difficulty of admitting one's flaws and mistakes."
    },
    {
        songName: "I GOT IT (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being successful and accomplished."
    },
    {
        songName: "miss you (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:08",
        image: "imgs/6.png",
        fact: "The song is about missing someone and the pain that comes with it."
    },
    {
        songName: "Maknae On Top (I.N)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:33",
        image: "imgs/6.png",
        fact: "The song is about the experience of being the youngest member of a group."
    },
    {
        songName: "Alien (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "The song is about feeling out of place or different from others."
    },
    {
        songName: "Because (Changbin, Felix)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:18",
        image: "imgs/6.png",
        fact: "The song is about the reasons behind certain actions or decisions."
    },
    {
        songName: "Piece of a Puzzle (Changbin, Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:53",
        image: "imgs/6.png",
        fact: "The song is about the pieces of a puzzle that make up one's identity."
    },
    {
        songName: "Wish you back (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:18",
        image: "imgs/6.png",
        fact: "The song is about wishing someone back and the pain of separation."
    },
    {
        songName: "HaPpy (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:29",
        image: "imgs/6.png",
        fact: "The song is about the joy and excitement of the holiday season."
    },
    {
        songName: "Up all Night (Bang Chan, Changbin, Felix, Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:21",
        image: "imgs/6.png",
        fact: "The song is about the experience of staying up all night and the energy that comes with it."
    },
    {
        songName: "Drive (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:44",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being driven and motivated."
    },
    {
        songName: "ice.cream (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "Mountains",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:07",
        image: "imgs/7.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "Chk Chk Boom",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:28",
        image: "imgs/7.png",
        fact: "The song features Latin-inspired rhythms and festival energy."
    },
    {
        songName: "JJam",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:05",
        image: "imgs/7.png",
        fact: "The song is about the feeling of being caught between two worlds."
    },
    {
        songName: "I Like It",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:28",
        image: "imgs/7.png",
        fact: "The song is about the excitement of riding the waves."
    },
    {
        songName: "Runners",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:16",
        image: "imgs/7.png",
        fact: "The song is about the feeling of being pursued or chased."
    },
    {
        songName: "twilight",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:12",
        image: "imgs/7.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "Stray Kids",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:09",
        image: "imgs/7.png",
        fact: "It is an autobiographical anthem about resilience, breaking the mold, and unwavering loyalty to their team."
    },
    {
        songName: "Chk Chk Boom (Festival Ver.)",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:33",
        image: "imgs/7.png",
        fact: "The song features Latin-inspired rhythms and festival energy."
    },
    {
        songName: "VENOM",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:14",
        image: "imgs/8.png",
        fact: "The song is about the darker aspects of human nature."
    },
    {
        songName: "MANIAC",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:02",
        image: "imgs/8.png",
        fact: "MANIAC explores the idea that everyone has a hidden wild side."
    },
    {
        songName: "Charmer",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:08",
        image: "imgs/8.png",
        fact: "The instrumental includes spider-web inspired sound effects."
    },
    {
        songName: "FREEZE",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "2:58",
        image: "imgs/8.png",
        fact: "The song features a unique blend of electronic and orchestral elements."
    },
    {
        songName: "Lonely St.",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "2:44",
        image: "imgs/8.png",
        fact: "The song explores themes of isolation and longing."
    },
    {
        songName: "Waiting For Us (Bang Chan, Lee Know, Seungmin, I.N)",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:39",
        image: "imgs/8.png",
        fact: "This vocal unit song focuses on comfort and reassurance."
    },
    {
        songName: "Muddy Water (Changbin, Hyunjin, Han, Felix)",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:17",
        image: "imgs/8.png",
        fact: "This unit track is inspired by old-school hip-hop."
    },
    {
        songName: "Walking On Water",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:28",
        image: "imgs/9.png",
        fact: "The song is about finding strength and hope during difficult times."
    },
    {
        songName: "Bounce Back",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "3:03",
        image: "imgs/9.png",
        fact: "The song is about bouncing back from setbacks and staying resilient."
    },
    {
        songName: "U (feat. TABLO)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:43",
        image: "imgs/9.png",
        fact: "The song is about the feeling of being supported and uplifted by someone you care about."
    },
    {
        songName: "Walking On Water (Hip Ver.)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:55",
        image: "imgs/9.png",
        fact: "The song is about the feeling of being supported and uplifted by someone you care about."
    },
    {
        songName: "Railway (Bang Chan)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:53",
        image: "imgs/9.png",
        fact: "The song is about the feeling of being supported and uplifted by someone you care about."
    },
    {
        songName: "Unfair (Felix)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:48",
        image: "imgs/9.png",
        fact: "The song is about the feeling of being treated unfairly."
    },
    {
        songName: "HALLUCINATION (I.N)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:43",
        image: "imgs/9.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "Scars (Korean Ver.)",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:19",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being hurt and the process of healing."
    },
    {
        songName: "Awaken",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:13",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being awakened to a new reality."
    },
    {
        songName: "ROCK",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:13",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being driven and motivated."
    },
    {
        songName: "3rd Eye",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:03",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being able to see things others cannot."
    },
    {
        songName: "Placebo",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:54",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being caught in a cycle of dependency."
    },
    {
        songName: "Insomnia",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:26",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being unable to sleep and the thoughts that keep you awake."
    },
    {
        songName: "Behind the Light",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:30",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being hidden or misunderstood."
    },
    {
        songName: "My Side",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:36",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being on your own and standing up for yourself."
    },
    {
        songName: "N/S",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:44",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being caught between two worlds."
    },
    {
        songName: "0325",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:38",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being lost and searching for direction."
    },
    {
        songName: "For You",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:09",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being supported and uplifted by someone you care about."
    },
    {
        songName: "Maze of Memories",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "2:55",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Broken Compass",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:41",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being lost and unsure of which direction to take."
    },
    {
        songName: "Hoodie Season",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:54",
        image: "imgs/10.png",
        fact: "The song is about the feeling of being part of a community and the comfort it provides."
    },
    {
        songName: "Hall of Fame",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "Uses Neil Armstrong's famous quote 'One small step for man, one giant leap for mankind' using his voice in the lyrics."
    },
    {
        songName: "S-Class",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:15",
        image: "imgs/11.png",
        fact: "The song switches genres multiple times throughout the track."
    },
    {
        songName: "ITEM",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:11",
        image: "imgs/11.png",
        fact: "The lyrics compare confidence to collecting powerful game items."
    },
    {
        songName: "Super Bowl",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:03",
        image: "imgs/11.png",
        fact: "The song was originally written with English lyrics first."
    },
    {
        songName: "TOPLINE (feat. Tiger JK)",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:23",
        image: "imgs/11.png",
        fact: "Legendary Korean rapper Tiger JK features on this track."
    },
    {
        songName: "DCL",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:06",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "GET LIT",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being energized and excited."
    },
    {
        songName: "Collision",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:37",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being in conflict with oneself."
    },
    {
        songName: "FNF",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being in conflict with oneself."
    },
    {
        songName: "Youthful",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:29",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being young and full of energy."
    },
    {
        songName: "THE SOUND (Korean Ver.)",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:58",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Mixtape: Time Out",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:55",
        image: "imgs/11.png",
        fact: "The song is about the feeling of being trapped in a cycle of negative thoughts."
    },
    {
        songName: "Entrance",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "1:38",
        image: "imgs/12.png",
        fact: "The song is about the feeling of being on your own and standing up for yourself."
    },
    {
        songName: "Miroh",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:27",
        image: "imgs/12.png",
        fact: "The song helped Stray Kids earn their first music show win."
    },
    {
        songName: "Victory Song",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:16",
        image: "imgs/12.png",
        fact: "The song is about the feeling of achieving a goal and the satisfaction that comes with it."
    },
    {
        songName: "Maze of Memories",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "2:55",
        image: "imgs/12.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Boxer",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:20",
        image: "imgs/12.png",
        fact: "The song is about the feeling of being in a physical or emotional fight."
    },
    {
        songName: "Chronosaurus",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:18",
        image: "imgs/12.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "19",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:25",
        image: "imgs/12.png",
        fact: "The song is about the feeling of being young and full of energy."
    },
    {
        songName: "Case 143",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:11",
        image: "imgs/13.png",
        fact: "The number 143 is often used to mean 'I love you.'"
    },
    {
        songName: "CHILL",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:15",
        image: "imgs/13.png",
        fact: "The song has a chill, laid-back vibe."
    },
    {
        songName: "Give Me your TMI",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:18",
        image: "imgs/13.png",
        fact: "The song is about sharing personal information and building connections."
    },
    {
        songName: "SUPER BOARD",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:05",
        image: "imgs/13.png",
        fact: "Known for its energetic beat and powerful rap sections."
    },
    {
        songName: "3RACHA (Bang Chan, Changbin, Han)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:28",
        image: "imgs/13.png",
        fact: "The song is performed by the group's in-house production team, 3RACHA."
    },
    {
        songName: "TASTE (Lee Know, Hyunjin, Felix)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:36",
        image: "imgs/13.png",
        fact: "Known for its energetic beat and powerful rap sections."
    },
    {
        songName: "Can't Stop (Seungmin, I.N)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:29",
        image: "imgs/13.png",
        fact: "The song is about the feeling of being unable to stop oneself from doing something."
    },
    {
        songName: "CIRCUS (Korean Ver.)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:14",
        image: "imgs/13.png",
        fact: "The song includes carnival-inspired sounds and performances."
    },
    {
        songName: "BLEEP",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:47",
        image: "imgs/14.png",
        fact: "Is based on a metaphor for silencing criticism and negative interference."
    },
    {
        songName: "CEREMONY",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:44",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being part of a community and the comfort it provides a triumphant anthem celebrating the group's massive success and perseverance."
    },
    {
        songName: "CREED",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:41",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being part of a community and the comfort it provides a triumphant anthem celebrating the group's massive success and perseverance."
    },
    {
        songName: "MESS",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "3:29",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
     {
        songName: "In My Head",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:56",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
     {
        songName: "Half Time",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:50",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being in a transitional phase and the uncertainty that comes with it."
    },
     {
        songName: "Phoenix",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "3:02",
        image: "imgs/14.png",
        fact: "The song is about the feeling of rebirth and starting over."
    },
     {
        songName: "Ghost",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:33",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being haunted by past experiences."
    }, {
        songName: "0801",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "3:24",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
     {
        songName: "Ceremony (Festival Ver.)",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:52",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being part of a community and the comfort it provides."
    }, {
        songName: "Ceremony (English Ver.)",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:44",
        image: "imgs/14.png",
        fact: "The song is about the feeling of being part of a community and the comfort it provides."
    },
    {
        songName: "GIANT (Korean Ver.)",
        releaseDate: "March 21, 2025",
        albumName: "Mixtape: dominATE",
        runtime: "2:53",
        image: "imgs/15.png",
        fact: "The song emphasizes confidence and overcoming obstacles."
    },
    {
        songName: "Burnin' Tires (Changbin, I.N)",
        releaseDate: "March 21, 2025",
        albumName: "Mixtape: dominATE",
        runtime: "2:53",
        image: "imgs/15.png",
        fact: "The song is about the feeling of being driven by ambition and the desire to succeed."
    },
    {
        songName: "Truman (Han, Felix)",
        releaseDate: "March 21, 2025",
        albumName: "Mixtape: dominATE",
        runtime: "3:15",
        image: "imgs/15.png",
        fact: "The song is about the feeling of being trapped in a cycle of negative thoughts."
    },
    {
        songName: "ESCAPE (Bang Chan, Hyunjin)",
        releaseDate: "March 21, 2025",
        albumName: "Mixtape: dominATE",
        runtime: "3:11",
        image: "imgs/15.png",
        fact: "The song is about the feeling of being unable to stop oneself from doing something."
    },
    {
        songName: "CINEMA (Lee Know, Seungmin)",
        releaseDate: "March 21, 2025",
        albumName: "Mixtape: dominATE",
        runtime: "3:41",
        image: "imgs/15.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Lose My Breath (Stray Kids Ver.)",
        releaseDate: "May 13, 2024",
        albumName: "Lose My Breath",
        runtime: "2:46",
        image: "imgs/16.png",
        fact: "Charlie Puth collaborated with Stray Kids on the original version."
    },
    {
        songName: "Lose My Breath (feat. Charlie Puth)",
        releaseDate: "May 13, 2024",
        albumName: "Lose My Breath",
        runtime: "3:17",
        image: "imgs/16.png",
        fact: "Charlie Puth collaborated with Stray Kids on the original version."
    },
    {
        songName: "YOU.",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "1:18",
        image: "imgs/17.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "I am YOU",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:24",
        image: "imgs/17.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "My Side",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:36",
        image: "imgs/17.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Hero's Soup",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:32",
        image: "imgs/17.png",
        fact: "Is a touching, bittersweet tribute to the struggles and silent sacrifices of working-class fathers."
    },
    {
        songName: "Get Cool",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:14",
        image: "imgs/17.png",
        fact: "Is about finding happiness in small, coincidental moments."
    },
    {
        songName: "N/S",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:44",
        image: "imgs/17.png",
        fact: "Is a reflection on the passage of time and the changes it brings."
    },
    {
        songName: "0325",
        releaseDate: "October 22, 2018",
        albumName: "I am you",
        runtime: "3:38",
        image: "imgs/17.png",
        fact: " a sentimental anthem about their start line, their ambitious dreams, and their journey as a group alongside their fandom, STAY."
    },
    {
        songName: "Hollow",
        releaseDate: "June 18, 2025",
        albumName: "Hollow",
        runtime: "3:29",
        image: "imgs/18.png",
        fact: "The song explores the emotional toll of fame, ambition, and the feeling of emptiness that comes with relentless success."
    },
    {
        songName: "Parade",
        releaseDate: "June 18, 2025",
        albumName: "Hollow",
        runtime: "3:06",
        image: "imgs/18.png",
        fact: "The song is about the feeling of being in a transitional phase and the uncertainty that comes with it."
    },
    {
        songName: "Never Alone",
        releaseDate: "June 18, 2025",
        albumName: "Hollow",
        runtime: "2:57",
        image: "imgs/18.png",
        fact: "The song is about the feeling of being alone and the struggle to find connection."
    },
    {
        songName: "just a little",
        releaseDate: "June 18, 2025",
        albumName: "Hollow",
        runtime: "4:06",
        image: "imgs/18.png",
        fact: "The song is about the feeling of being overwhelmed by the pressures of life."
    },
    {
        songName: "Fate",
        releaseDate: "June 18, 2025",
        albumName: "Hollow",
        runtime: "3:00",
        image: "imgs/18.png",
        fact: "The song is about the feeling of being destined for a particular outcome."
    },
    {
        songName: "GIANT",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "2:54",
        image: "imgs/19.png",
        fact: "The song emphasizes confidence and overcoming obstacles."
    },
    {
        songName: "Chk Ckh Boom - Japanese Ver.-",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "2:29",
        image: "imgs/19.png",
        fact: "The Japanese version features a more upbeat tempo."
    },
    {
        songName: "NIGHT",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "2:55",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Falling Up",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:12",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "WHY?",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:49",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Saiyan",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:39",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "You gave me love, so why",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:15",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Chrismas Love",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:06",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "NIGHT - English Ver.-",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "2:54",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Falling Up - English Ver.-",
        releaseDate: "November 13, 2024",
        albumName: "Giant",
        runtime: "3:10",
        image: "imgs/19.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "All My Life (Burna Boy Remix)",
        releaseDate: "October 13, 2023",
        albumName: "All my life",
        runtime: "4:24",
        image: "imgs/20.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "All My Life (Stray Kids Remix)",
        releaseDate: "October 13, 2023",
        albumName: "All my life",
        runtime: "3:37",
        image: "imgs/20.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "All My Life (feat. J Cole)",
        releaseDate: "October 13, 2023",
        albumName: "All my life",
        runtime: "3:43",
        image: "imgs/20.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Social Path (feat. LiSA)",
        releaseDate: "September 6, 2023",
        albumName: "Social Path",
        runtime: "3:18",
        image: "imgs/21.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Super Bowl - Japanese Ver.-",
        releaseDate: "September 6, 2023",
        albumName: "Social Path",
        runtime: "3:05",
        image: "imgs/21.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Butterflies",
        releaseDate: "September 6, 2023",
        albumName: "Social Path",
        runtime: "3:10",
        image: "imgs/21.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Social Path (Instrumental)",
        releaseDate: "September 6, 2023",
        albumName: "Social Path",
        runtime: "3:18",
        image: "imgs/21.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Butterflies (Instrumental)",
        releaseDate: "September 6, 2023",
        albumName: "Social Path",
        runtime: "3:09",
        image: "imgs/21.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "THE SOUND",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:00",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Battle Ground",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:33",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Lost Me",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:09",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "DLMLU",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:14",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Novel",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:08",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Case 143 - Japanese Ver.-",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:13",
        image: "imgs/22.png",
        fact: "The number 143 is often used to mean 'I love you.'"
    },
    {
        songName: "CHILL - Japanese Ver.-",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:18",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Scars",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:19",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Sorikun - Japanese Ver.-",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:04",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "There",
        releaseDate: "February 22, 2023",
        albumName: "The Sound",
        runtime: "3:35",
        image: "imgs/22.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "CIRCUS",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "3:14",
        image: "imgs/23.png",
        fact: "The song includes carnival-inspired sounds and performances."
    },
    {
        songName: "Fairytale",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "2:52",
        image: "imgs/23.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Venom - Japanese Ver.-",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "3:15",
        image: "imgs/23.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "MANIAC - Japanese Ver.-",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "3:04",
        image: "imgs/23.png",
        fact: "MANIAC explores the idea that everyone has a hidden wild side."
    },
    {
        songName: "Silent Cry - Japanese Ver.-",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "3:31",
        image: "imgs/23.png",
        fact: "The song is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Your Eyes",
        releaseDate: "June 22, 2022",
        albumName: "Circus",
        runtime: "3:16",
        image: "imgs/23.png",
        fact: "The music video was filmed from a first-person perspective."
    },
    {
        songName: "Christmas Evel",
        releaseDate: "November 29, 2021",
        albumName: "Christmas Evel",
        runtime: "2:58",
        image: "imgs/24.png",
        fact: "The title is a wordplay between 'evil' and 'Christmas Eve.'"
    },
    {
        songName: "24 to 25",
        releaseDate: "November 29, 2021",
        albumName: "Christmas Evel",
        runtime: "3:36",
        image: "imgs/24.png",
        fact: "Is about wanting to spend the magical hours between Christmas Eve (December 24th) and Christmas Day (December 25th) with a loved one."
    },
    {
        songName: "Winter Falls",
        releaseDate: "November 29, 2021",
        albumName: "Christmas Evel",
        runtime: "3:55",
        image: "imgs/24.png",
        fact: "Explores the struggle to let go of a past relationship."
    },
    {
        songName: "DOMINO (English Ver.)",
        releaseDate: "November 29, 2021",
        albumName: "Christmas Evel",
        runtime: "3:18",
        image: "imgs/24.png",
        fact: "The lyrics compare success spreading like falling dominoes."
    },
    {
        songName: "ALL IN",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:07",
        image: "imgs/25.png",
        fact: "Is all about going 'all in' on your ambitions."
    },
    {
        songName: "FAM",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:35",
        image: "imgs/25.png",
        fact: "Is a fun, wholesome 'self-introduction' track."
    },
    {
        songName: "One Day",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:13",
        image: "imgs/25.png",
        fact: "Is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "God's Menu - Japanese Ver.-",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "2:50",
        image: "imgs/25.png",
        fact: "This is the Japanese version of the original Korean release."
    },
    {
        songName: "Back Door - Japanese Ver.-",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:11",
        image: "imgs/25.png",
        fact: "This is the Japanese version of the original Korean release."
    },
    {
        songName: "TOP - Japanese Ver.-",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:08",
        image: "imgs/25.png",
        fact: "This is the Japanese version of the original Korean release."
    },
    {
        songName: "SLUMP - Japanese Ver.-",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "2:16",
        image: "imgs/25.png",
        fact: "This is the Japanese version of the original Korean release."
    },
    {
        songName: "ALL IN",
        releaseDate: "October 27, 2020",
        albumName: "All In",
        runtime: "3:07",
        image: "imgs/25.png",
        fact: "Is all about going 'all in' on your ambitions."
    },
    {
        songName: "Hellevator",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:59",
        image: "imgs/26.png",
        fact: "This was one of Stray Kids' earliest pre-debut songs."
    },
    {
        songName: "BEWARE",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:10",
        image: "imgs/26.png",
        fact: "Is a teenage rebellion anthem. It explores the emotional intensity, identity struggles, and frequent mood swings that come with growing up."
    },
    {
        songName: "Spread My Wings",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:22",
        image: "imgs/26.png",
        fact: "The song explores the psychological conflict of teenagers who want to appear mature to others, while secretly feeling afraid of growing up and facing the responsibilities of adulthood."
    },
    {
        songName: "YAYAYA",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:22",
        image: "imgs/26.png",
        fact: "Chasing a successful future in a reality filled with anxiety and ambition."
    },
    {
        songName: "District 9",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:59",
        image: "imgs/26.png",
        fact: "Youthful defiance, self-discovery, and breaking out of societal molds."
    },
    {
        songName: "Hellevator",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:33",
        image: "imgs/26.png",
        fact: "Is a metaphor for the agonizing, difficult journey (the 'hell') it takes to achieve success and reach one's dream."
    },
    {
        songName: "Mirror",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:42",
        image: "imgs/26.png",
        fact: "Explores themes of identity confusion, self-discovery, and the struggle to recognize your true self."
    },
    {
        songName: "Grow Up",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:33",
        image: "imgs/26.png",
        fact: "Is about the process of maturing and accepting responsibility."
    },
    {
        songName: "My Pace",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:10",
        image: "imgs/26.png",
        fact: "Is about finding your own rhythm and not being pressured to keep up with others."
    },
    {
        songName: "Voices",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:22",
        image: "imgs/26.png",
        fact: "The lyrics focus on anxiety and negative thoughts."
    },
    {
        songName: "Question",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:04",
        image: "imgs/26.png",
        fact: "Is about questioning one's place in the world and the uncertainty of the future."
    },
    {
        songName: "M.I.A.",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:31",
        image: "imgs/26.png",
        fact: "Is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Awkward Silence",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:15",
        image: "imgs/26.png",
        fact: "Explores the discomfort and tension that can arise in social situations."
    },
    {
        songName: "I am YOU",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:26",
        image: "imgs/26.png",
        fact: "Is about the feeling of being lost in memories and the struggle to find one's way."
    },
    {
        songName: "Get Cool",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:16",
        image: "imgs/26.png",
        fact: "The music video has a fun school-themed concept."
    },
    {
        songName: "MIROH",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:28",
        image: "imgs/26.png",
        fact: "The song helped Stray Kids earn their first music show win."
    },
    {
        songName: "Victory Song",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:18",
        image: "imgs/26.png",
        fact: " Is a bold anthem of absolute confidence, grit, and resilience."
    },
    {
        songName: "Boxer",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:22",
        image: "imgs/26.png",
        fact: ". Is a metaphor for overcoming life's hurdles, encouraging listeners to fight for their dreams, push through hardships, and never back down when faced with challenges."
    },
    {
        songName: "Hellevator",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:59",
        image: "imgs/26.png",
        fact: "This was one of Stray Kids' earliest pre-debut songs."
    },
    {
        songName: "Chronosaurus",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:20",
        image: "imgs/26.png",
        fact: "The song is about the feeling of being overwhelmed and the need for comfort."
    },
    {
        songName: "19",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:26",
        image: "imgs/26.png",
        fact: "The song is about the feeling of being young and full of energy."
    },
    {
        songName: "Side Effects",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:15",
        image: "imgs/26.png",
        fact: "This experimental track uses psytrance-inspired production."
    },
    {
        songName: "TMT",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:29",
        image: "imgs/26.png",
        fact: "Explores the anxiety and self-doubt that comes with overthinking, expectations, and pursuing difficult dreams."
    },
    {
        songName: "Double Knot",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:11",
        image: "imgs/26.png",
        fact: "Is about the complexity of relationships and the challenges of communication."
    },
    {
        songName: "Levanter",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:17",
        image: "imgs/26.png",
        fact: "Levanter is about freedom and finding your true self."
    },
    {
        songName: "Astronaut",
        releaseDate: "March 18, 2020",
        albumName: "Skz2020",
        runtime: "3:00",
        image: "imgs/26.png",
        fact: "Astronaut is about the feeling of being isolated and the desire to connect with others."
    },
]