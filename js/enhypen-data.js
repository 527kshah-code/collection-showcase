const songs = [
    {
        songName: "No Way Back (feat. So!YoON)",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "3:05",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Knife",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "2:19",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Stealer",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "2:56",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Big Girls Don't Cry",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "1:58",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Lost Island",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "2:45",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Sleep Tight",
        releaseDate: "January 16, 2026",
        albumName: "The SIN : Vanish",
        runtime: "2:37",
        image: "imgs/90.png",
        fact: "..."
    },
    {
        songName: "Shine On Me",
        releaseDate: "July 27, 2025",
        albumName: "YOI",
        runtime: "3:40",
        image: "imgs/91.png",
        fact: "..."
    },
    {
        songName: "Echoes",
        releaseDate: "July 27, 2025",
        albumName: "YOI",
        runtime: "3:06",
        image: "imgs/91.png",
        fact: "..."
    },
    {
        songName: "Bad Desire (With or Without You) - Japanese ver.",
        releaseDate: "July 27, 2025",
        albumName: "YOI",
        runtime: "2:21",
        image: "imgs/91.png",
        fact: "..."
    }, 
    {
        songName: "Flashover",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:05",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Bad Desire (With or Without You)",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:21",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Outside",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:01",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Loose (Korean ver.)",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "3:32",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Helium",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:42",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Too Close",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:26",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Bad Desire (With or Without You)(English ver.)",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "2:21",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Loose",
        releaseDate: "June 5, 2025",
        albumName: "Desire: Unleash",
        runtime: "3:30",
        image: "imgs/92.png",
        fact: "..."
    },
    {
        songName: "Daydream",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:00",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "No Doubt",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:47",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Moonstruck",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:38",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Xo (Only If You Say Yes)",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:08",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Your Eyes Only",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:20",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Hundred Broken Hearts",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:21",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Brought The Heat Back",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:56",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Paranormal",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:35",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Royalty",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:50",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "Highway 1009",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:55",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "XO (Only If You Say Yes)(English ver.) feat. JVKE",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:08",
        image: "imgs/93.png",
        fact: "..."
    },
    {
        songName: "One In A Billion",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:16",
        image: "imgs/94.png",
        fact: "..."
    },
    {
        songName: "CRIMINAL LOVE",
        releaseDate: "May 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:35",
        image: "imgs/94.png",
        fact: "..."
    },
    {
        songName: "Fatal Trouble",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "2:50",
        image: "imgs/94.png",
        fact: "..."
    },
    {
        songName: "Teeth",
        releaseDate: "November 11, 2024",
        albumName: "Romance: Untold -daydream-",
        runtime: "3:11",
        image: "imgs/94.png",
        fact: "..."
    },
]