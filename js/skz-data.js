const songs = [
    {
        songName: "MEGAVERSE",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:05",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "LALALALA",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:02",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "BLIND SPOT",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:20",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "COMFLEX",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "2:52",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "Cover Me",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:11",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "Leave",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:39",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "Social Path (feat. LiSA)(Korean Ver.)",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:17",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "LALALALA (Rock Ver.)",
        releaseDate: "November 10, 2023",
        albumName: "Rock-Star",
        runtime: "3:07",
        image: "imgs/1.png",
        fact: "..."
    },
    {
        songName: "The Tortoise and the Hare",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:44",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Back Door",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:09",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "B Me",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:25",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Any",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:49",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Ex",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:37",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "We Go (Bang Chan, Changbin, Han)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:37",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "WOW (Lee Know, Felix, Hyunjin)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:13",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "My Universe (Seungmin, I.N)",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:23",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Easy",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:03",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Pacemaker",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:10",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Airplane",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:34",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Another Day",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "2:46",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Phobia",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:32",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Blueprint",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "4:11",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "TA",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:28",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Heaven",
        releaseDate: "September 14, 2020",
        albumName: "In Life",
        runtime: "3:19",
        image: "imgs/2.png",
        fact: "..."
    },
    {
        songName: "Go LIVE",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "1:50",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "God's Menu",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "2:47",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "TOP ('Tower of God' OP)",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "1:50",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "SLUMP ('Tower of God' ED)",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "2:14",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "Mixtape: Gone Days",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "3:14",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "Mixtape: On Track",
        releaseDate: "June 17, 2020",
        albumName: "Go Live",
        runtime: "3:28",
        image: "imgs/3.png",
        fact: "..."
    },
    {
        songName: "CHEESE",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:02",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Thunderous",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:03",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "DOMINO",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:18",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "SSICK",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:10",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "The View",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:21",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Sorry, I Love You",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "2:57",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Silent Cry",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:29",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Secret Secret",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:29",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Star Lost",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:35",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Red Lights (Bang Chan, Hyunjin)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:09",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Surfin' (Lee Know, Changbin, Felix)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:11",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Gone Away (Han, Seungmin, I.N)",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "4:01",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "WOLFGANG",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:10",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Mixtape: OH",
        releaseDate: "August 23, 2021",
        albumName: "No Easy",
        runtime: "3:32",
        image: "imgs/4.png",
        fact: "..."
    },
    {
        songName: "Do It",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:39",
        image: "imgs/5.png",
        fact: "..."
    },
    {
        songName: "DIVINE",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "3:07",
        image: "imgs/5.png",
        fact: "..."
    },
    {
        songName: "Holiday",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "3:07",
        image: "imgs/5.png",
        fact: "..."
    },
    {
        songName: "Photobook",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:53",
        image: "imgs/5.png",
        fact: "..."
    },
    {
        songName: "Do It (Festival Ver.)",
        releaseDate: "November 21, 2025",
        albumName: "Do It",
        runtime: "2:27",
        image: "imgs/5.png",
        fact: "..."
    },
    {
        songName: "FAM (Korean Ver.)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:33",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Connected (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:51",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Limbo (Lee Know)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:17",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "DOODLE (Changbin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:04",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Love Untold (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:30",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "RUN (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:58",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Deep End (Felix)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:28",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Tears and Raindrops (Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:49",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Hug Me (I.N)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:00",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "#LoveSTAY",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:17",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "ZONE(Bang Chan, Changbin, Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:32",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Close (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:46",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Streetlight(Changbin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:09",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "i hate to admit (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "I GOT IT (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "miss you (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:08",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Maknae On Top (I.N)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:33",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Alien (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Because (Changbin, Felix)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:18",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Piece of a Puzzle (Changbin, Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:53",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Wish you back (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:18",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "HaPpy (Han)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:29",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Up all Night (Bang Chan, Changbin, Felix, Seungmin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "3:21",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Drive (Bang Chan)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:44",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "ice.cream (Hyunjin)",
        releaseDate: "December 21, 2022",
        albumName: "SKZ- replay",
        runtime: "2:50",
        image: "imgs/6.png",
        fact: "..."
    },
    {
        songName: "Mountains",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:07",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "Chk Chk Boom",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:28",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "JJam",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:05",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "I Like It",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:28",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "Runners",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:16",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "twilight",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:12",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "Stray Kids",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "3:09",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "Chk Chk Boom (Festival Ver.)",
        releaseDate: "July 19, 2024",
        albumName: "Ate",
        runtime: "2:33",
        image: "imgs/7.png",
        fact: "..."
    },
    {
        songName: "VENOM",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:14",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "MANIAC",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:02",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "Charmer",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:08",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "FREEZE",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "2:58",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "Lonely St.",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "2:44",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "Waiting For Us (Bang Chan, Lee Know, Seungmin, I.N)",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:39",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "Muddy Water (Changbin, Hyunjin, Han, Felix)",
        releaseDate: "March 18, 2022",
        albumName: "ODDINARY",
        runtime: "3:17",
        image: "imgs/8.png",
        fact: "..."
    },
    {
        songName: "Walking On Water",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:28",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "Bounce Back",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "3:03",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "U (feat. TABLO)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:43",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "Walking On Water (Hip Ver.)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:55",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "Railway (Bang Chan)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:53",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "Unfair (Felix)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:48",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "HALLUCINATION (I.N)",
        releaseDate: "December 13, 2024",
        albumName: "HOP",
        runtime: "2:43",
        image: "imgs/9.png",
        fact: "..."
    },
    {
        songName: "Scars (Korean Ver.)",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:19",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Awaken",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:13",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "ROCK",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:13",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "3rd Eye",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:03",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Placebo",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:54",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Insomnia",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:26",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Behind the Light",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:30",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "My Side",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:36",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "N/S",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:44",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "0325",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:38",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "For You",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "4:09",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Maze of Memories",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "2:55",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Broken Compass",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:41",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Hoodie Season",
        releaseDate: "December 23, 2021",
        albumName: "SKZ2021",
        runtime: "3:54",
        image: "imgs/10.png",
        fact: "..."
    },
    {
        songName: "Hall of Fame",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "S-Class",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:15",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "ITEM",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:11",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "Super Bowl",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:03",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "TOPLINE (feat. Tiger JK)",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:23",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "DCL",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:06",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "GET LIT",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "Collision",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:37",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "FNF",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:51",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "Youthful",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "3:29",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "THE SOUND (Korean Ver.)",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:58",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "Mixtape: Time Out",
        releaseDate: "June 2, 2023",
        albumName: "5-Star",
        runtime: "2:55",
        image: "imgs/11.png",
        fact: "..."
    },
    {
        songName: "Entrance",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "1:38",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Miroh",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:27",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Victory Song",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:16",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Maze of Memories",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "2:55",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Boxer",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:20",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Chronosaurus",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:18",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "19",
        releaseDate: "March 25, 2019",
        albumName: "Miroh",
        runtime: "3:25",
        image: "imgs/12.png",
        fact: "..."
    },
    {
        songName: "Case 143",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:11",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "CHILL",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:15",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "Give Me your TMI",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:18",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "SUPER BOARD",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:05",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "3RACHA (Bang Chan, Changbin, Han)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:28",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "TASTE (Lee Know, Hyunjin, Felix)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:36",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "Can't Stop (Seungmin, I.N)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:29",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "CIRCUS (Korean Ver.)",
        releaseDate: "October 7, 2022",
        albumName: "Maxident",
        runtime: "3:14",
        image: "imgs/13.png",
        fact: "..."
    },
    {
        songName: "BLEEP",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:47",
        image: "imgs/14.png",
        fact: "..."
    },
    {
        songName: "CEREMONY",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:44",
        image: "imgs/14.png",
        fact: "..."
    },
    {
        songName: "CREED",
        releaseDate: "August 22, 2025",
        albumName: "Karma",
        runtime: "2:41",
        image: "imgs/14.png",
        fact: "..."
    },
]