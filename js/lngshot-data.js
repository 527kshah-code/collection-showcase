const songs = [
    {
        songName: "4SHO 4SHO",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "4:01",
        image: "imgs/86.png",
        fact: "The opening track sets the tone for the mixtape with heavy bass and confident group-introduction energy."
    },
    {
        songName: "YEAH! YEAH!",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "3:04",
        image: "imgs/86.png",
        fact: "This song leans into high-energy party vibes with repetitive chants made for live performances."
    },
    {
        songName: "No hi,No hey",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "3:00",
        image: "imgs/86.png",
        fact: "The title reflects the song’s cold, no-fake-friends attitude."
    },
    {
        songName: "Run it up",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "2:59",
        image: "imgs/86.png",
        fact: "Built around themes of ambition and success, the track has a fast-paced flex-style rap flow."
    },
    {
        songName: "Gukbbong",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "3:44",
        image: "imgs/86.png",
        fact: "The song mixes Korean slang and swagger-heavy lyrics to create a playful hip-hop anthem."
    },
    {
        songName: "Moya",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "4:11",
        image: "imgs/86.png",
        fact: "The title means ‘What?’ in Korean, matching the track’s chaotic and unpredictable vibe."
    },
    {
        songName: "The Purge 4SHOMIX",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "2:18",
        image: "imgs/86.png",
        fact: "This remix-style track brings darker production and aggressive rap verses inspired by underground hip-hop."
    },
    {
        songName: "Public Enemy",
        releaseDate: "May 18, 2026",
        albumName: "4SHOBOIZ Vol.2: 4SHOVILLE",
        runtime: "3:32",
        image: "imgs/86.png",
        fact: "Collaborated with DJ Wegun"
    },
    {
        songName: "Good Girls",
        releaseDate: "March 23, 2026",
        albumName: "Training Days",
        runtime: "2:45",
        image: "imgs/87.png",
        fact: "Solo song by Louis."
    },
    {
        songName: "Boo Thang",
        releaseDate: "March 23, 2026",
        albumName: "Training Days",
        runtime: "3:02",
        image: "imgs/87.png",
        fact: "Solo song by Woojin."
    },
    {
        songName: "Summer Eyes",
        releaseDate: "March 23, 2026",
        albumName: "Training Days",
        runtime: "3:20",
        image: "imgs/87.png",
        fact: "Solo song by Ohyul."
    },
    {
        songName: "For Us",
        releaseDate: "March 23, 2026",
        albumName: "Training Days",
        runtime: "2:45",
        image: "imgs/87.png",
        fact: "Solo song by Ryul."
    },
    {
        songName: "Vanilla Days",
        releaseDate: "March 23, 2026",
        albumName: "Training Days",
        runtime: "2:50",
        image: "imgs/87.png",
        fact: "Unlike LNGSHOT’s harder rap tracks, this song has a softer nostalgic tone with smoother vocals."
    },
    {
        songName: "Are You Ready",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:35",
        image: "imgs/88.png",
        fact: "This intro-style track was made to hype listeners up for the group’s early sound."
    },
    {
        songName: "Trust Myself",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:20",
        image: "imgs/88.png",
        fact: "Solo song by Ryul."
    },
    {
        songName: "Thinking",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "1:53",
        image: "imgs/88.png",
        fact: "Duo song by Ryul and Louis."
    },
    {
        songName: "All Good",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:35",
        image: "imgs/88.png",
        fact: "Duo song by Woojin and Ryul."
    },
    {
        songName: "Ejeh",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:15",
        image: "imgs/88.png",
        fact: "Solo song by Woojin."
    },
    {
        songName: "Next 2 U",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:10",
        image: "imgs/88.png",
        fact: "Duo song by Ohyul and Louis."
    },
    {
        songName: "My Side",
        releaseDate: "January 16, 2026",
        albumName: "4SHOBOIZ MIXTAPE",
        runtime: "2:36",
        image: "imgs/88.png",
        fact: "Duo song by Woojin and Louis."
    },
    {
        songName: "Backseat",
        releaseDate: "January 13, 2026",
        albumName: "Shot Callers",
        runtime: "3:02",
        image: "imgs/89.png",
        fact: "The track mixes smooth late-night production with confident rap verses."
    },
    {
        songName: "Saucin'",
        releaseDate: "January 13, 2026",
        albumName: "Shot Callers",
        runtime: "2:53",
        image: "imgs/89.png",
        fact: "Known for its flashy lyrics and swagger-heavy delivery, this song became a fan favorite."
    },
    {
        songName: "Moonwalkin'",
        releaseDate: "January 13, 2026",
        albumName: "Shot Callers",
        runtime: "3:28",
        image: "imgs/89.png",
        fact: "The dreamy beat gives the song a floating, nighttime-driving atmosphere."
    },
    {
        songName: "FaceTime",
        releaseDate: "January 13, 2026",
        albumName: "Shot Callers",
        runtime: "2:47",
        image: "imgs/89.png",
        fact: "The song references long-distance communication and modern relationships."
    },
    {
        songName: "Never Let Go",
        releaseDate: "January 13, 2026",
        albumName: "Shot Callers",
        runtime: "3:13",
        image: "imgs/89.png",
        fact: "This closing track has a more emotional tone focused on loyalty and connection."
    },
]
    displaySongs(songs);