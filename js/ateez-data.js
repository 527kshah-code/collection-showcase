const songs = [
    {
        songName: "Ghost",
        releaseDate: "February 6, 2026",
        albumName: "Golden hour: part 4",
        runtime: "2:47",
        image: "imgs/27.jpg",
        fact: "This track opens the album with a darker emotional tone and haunting production."
    },
    {
        songName: "Adrenaline",
        releaseDate: "February 6, 2026",
        albumName: "Golden hour: part 4",
        runtime: "3:39",
        image: "imgs/27.jpg",
        fact: "The song mixes energetic vocals with intense EDM-inspired instrumentals."
    },
    {
        songName: "NASA",
        releaseDate: "February 6, 2026",
        albumName: "Golden hour: part 4",
        runtime: "3:10",
        image: "imgs/27.jpg",
        fact: "During the Artemis mission NASA posted a picture of the Earth rise with the song on instagram."
    },
    {
        songName: "On the Road",
        releaseDate: "February 6, 2026",
        albumName: "Golden hour: part 4",
        runtime: "3:23",
        image: "imgs/27.jpg",
        fact: "This song has a road-trip feeling with lyrics about chasing dreams forward."
    },
    {
        songName: "Choose",
        releaseDate: "February 6, 2026",
        albumName: "Golden hour: part 4",
        runtime: "3:06",
        image: "imgs/27.jpg",
        fact: "Choose focuses on difficult decisions and emotional conflict."
    },
    {
        songName: "Ash",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "3:17",
        image: "imgs/28.jpg",
        fact: "Ash symbolizes rebuilding yourself after hardship and failure."
    },
    {
        songName: "Tippy Toes",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "3:21",
        image: "imgs/28.jpg",
        fact: "The playful beat and confident lyrics give this song a carefree vibe."
    },
    {
        songName: "FACE",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "2:46",
        image: "imgs/28.jpg",
        fact: "FACE explores identity and the pressure of expectations."
    },
    {
        songName: "Crescendo",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "3:45",
        image: "imgs/28.jpg",
        fact: "The title reflects the song’s gradual build-up in intensity and emotion."
    },
    {
        songName: "NOT OKAY",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "3:34",
        image: "imgs/28.jpg",
        fact: "NOT OKAY combines emotional lyrics with powerful rock-inspired sounds."
    },
    {
        songName: "Days",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "4:15",
        image: "imgs/28.jpg",
        fact: "Days has a sentimental atmosphere focused on memories and growing older."
    },
    {
        songName: "Birthday",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "2:44",
        image: "imgs/28.jpg",
        fact: "Birthday was released as a bright celebratory track with uplifting energy."
    },
    {
        songName: "Forevermore",
        releaseDate: "September 16, 2025",
        albumName: "Ashes to Light",
        runtime: "4:47",
        image: "imgs/28.jpg",
        fact: "Forevermore is an emotional ballad about lasting connections and promises."
    },
    {
        songName: "Lemon Drop",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "4:47",
        image: "imgs/29.jpg",
        fact: "Lemon Drop uses sweet imagery to create a playful summer mood."
    },
    {
        songName: "Masterpiece",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "2:40",
        image: "imgs/29.jpg",
        fact: "Masterpiece highlights themes of confidence and self-expression."
    },
    {
        songName: "Now this house ain't a home",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:45",
        image: "imgs/29.jpg",
        fact: "This emotional track focuses on loneliness after someone important leaves."
    },
    {
        songName: "Castle",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:09",
        image: "imgs/29.jpg",
        fact: "Castle compares emotional walls to a fortress protecting someone’s heart."
    },
    {
        songName: "Bridge: The Edge of Reality",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "1:32",
        image: "imgs/29.jpg",
        fact: "This short interlude helps transition the album into its fantasy-inspired themes."
    },
    {
        songName: "In Your Fantasy",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:45",
        image: "imgs/29.jpg",
        fact: "In Your Fantasy blends dreamy production with cinematic vocals."
    },
    {
        songName: "NO1",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "2:33",
        image: "imgs/29.jpg",
        fact: "NO1 emphasizes ambition and becoming the best version of yourself."
    },
    {
        songName: "Skin",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:20",
        image: "imgs/29.jpg",
        fact: "Skin explores vulnerability and emotional intimacy."
    },
    {
        songName: "Slide to me",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "2:20",
        image: "imgs/29.jpg",
        fact: "Slide to Me has a relaxed late-night vibe with smooth vocals."
    },
    {
        songName: "Legacy",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:02",
        image: "imgs/29.jpg",
        fact: "Legacy reflects on the impact someone leaves behind over time."
    },
    {
        songName: "Creep",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:11",
        image: "imgs/29.jpg",
        fact: "Creep leans into darker emotions and feelings of isolation."
    },
    {
        songName: "ROAR",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "2:34",
        image: "imgs/29.jpg",
        fact: "ROAR uses aggressive instrumentals to create a powerful anthem-like sound."
    },
    {
        songName: "Sagittarius",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "2:48",
        image: "imgs/29.jpg",
        fact: "Sagittarius references freedom and adventure inspired by the zodiac sign."
    },
    {
        songName: "To bo your light",
        releaseDate: "July 11, 2025",
        albumName: "Golden hour: part 3 in your fantasy",
        runtime: "3:30",
        image: "imgs/29.jpg",
        fact: "To Be Your Light focuses on supporting someone through difficult moments."
    },
    {
        songName: "Deep Dive",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "2:59",
        image: "imgs/31.jpg",
        fact: "Deep Dive uses underwater imagery to represent falling deeper into emotions."
    },
    {
        songName: "Scene 1: Value",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "1:01",
        image: "imgs/31.jpg",
        fact: "This intro track sets up the album’s themes about self-worth and identity."
    },
    {
        songName: "Ice On My Teeth",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "3:03",
        image: "imgs/31.jpg",
        fact: "The song became known for its catchy hook and flashy confidence-filled lyrics."
    },
    {
        songName: "Man on Fire",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "3:15",
        image: "imgs/31.jpg",
        fact: "Man on Fire compares passion and ambition to an uncontrollable flame."
    },
    {
        songName: "Selfish Waltz",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "3:23",
        image: "imgs/31.jpg",
        fact: "Selfish Waltz mixes elegant melodies with emotional tension."
    },
    {
        songName: "Enough",
        releaseDate: "November 15, 2024",
        albumName: "Golden hour: Part 2",
        runtime: "3:15",
        image: "imgs/31.jpg",
        fact: "Enough reflects on emotional exhaustion and personal struggles."
    },
    {
        songName: "Royal",
        releaseDate: "October 1, 2024",
        albumName: "Birthday",
        runtime: "3:42",
        image: "imgs/32.jpg",
        fact: "Royal combines dramatic instrumentals with themes of confidence and power."
    },
    {
        songName: "Forevermore",
        releaseDate: "October 1, 2024",
        albumName: "Birthday",
        runtime: "4:47",
        image: "imgs/32.jpg",
        fact: "..."
    },
    {
        songName: "Birthday - Instrumental",
        releaseDate: "October 1, 2024",
        albumName: "Birthday",
        runtime: "2:44",
        image: "imgs/32.jpg",
        fact: "..."
    },
    {
        songName: "Royal - Instrumental",
        releaseDate: "October 1, 2024",
        albumName: "Birthday",
        runtime: "3:42",
        image: "imgs/32.jpg",
        fact: "..."
    },
    {
        songName: "Forevermore - Instrumental",
        releaseDate: "October 1, 2024",
        albumName: "Birthday",
        runtime: "4:47",
        image: "imgs/32.jpg",
        fact: "..."
    },
    {
        songName: "Golden Hour",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "1:24",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "Blind",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "3:18",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "WORK",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "2:52",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "Empty Box",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "3:33",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "Shaboom",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "3:31",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "Siren",
        releaseDate: "May 31, 2024",
        albumName: "Golden Hour: Part 1",
        runtime: "2:44",
        image: "imgs/33.jpg",
        fact: "..."
    },
    {
        songName: "We KNOW",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:49",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "Emergency",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "2:58",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "Crazy Form",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:18",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "ARRIBA",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:37",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "Silver Light",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:50",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "Crescent Part 2",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:49",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "Dream Day",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:26",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "MATZ",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:26",
        image: "imgs/34.jpg",
        fact: "This song is a duet by Hongjoon and Seonghwa."
    },
    {
        songName: "It's You",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:29",
        image: "imgs/34.jpg",
        fact: "This song is sung by Yeosang, San, and Wooyoung."
    },
    {
        songName: "Youth",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:29",
        image: "imgs/34.jpg",
        fact: "This is a duet by Yunho and Mingi."
    },
    {
        songName: "Everything",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:46",
        image: "imgs/34.jpg",
        fact: "This is a solo by Jongho."
    },
    {
        songName: "FIN: WILL",
        releaseDate: "December 1, 2023",
        albumName: "The world ep.fin: Will",
        runtime: "3:03",
        image: "imgs/34.jpg",
        fact: "..."
    },
    {
        songName: "This World",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:32",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "Dune",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:15",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "Bouncy (K-Hot Chilli Peppers)",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:07",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "DJANGO",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:11",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "Wake Up",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:06",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "Outlaw",
        releaseDate: "June 6, 2023",
        albumName: "The world ep.2: Outlaw",
        runtime: "3:19",
        image: "imgs/35.jpg",
        fact: "..."
    },
    {
        songName: "Intro: Siren",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "1:39",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "Paradigm",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "3:13",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "Cyberpunk - Japanese Version",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "3:43",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "Guerrilla - Flag Version",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "3:35",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "New World - Japanese Version",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "3:36",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "Outro: Liberty",
        releaseDate: "November 30, 2022",
        albumName: "The world ep. Paradigm",
        runtime: "1:18",
        image: "imgs/36.jpg",
        fact: "..."
    },
    {
        songName: "Intro [Beyond: ZERO]",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "1:34",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "Deja Vu - Japanese Version",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:17",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "ROCKY - Boxers Version",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:17",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "The King",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:12",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "Turbulence - Japanese Version",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:21",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "Take Me Home - Japanese Version",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:42",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "Fireworks (I'm the One) - Japanese Version",
        releaseDate: "May 25, 2022",
        albumName: "Beyond: zero",
        runtime: "3:29",
        image: "imgs/37.jpg",
        fact: "..."
    },
    {
        songName: "Turbulence",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:19",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Be With You",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:41",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "The Letter",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:49",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Still Here - Korean Version",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:15",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Better - Korean Version",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:34",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "The Real - Heung Version",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "3:30",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "WAVE (Overture)",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "1:42",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "WONDERLAND (Symphony No.9 'From the Wonderland')",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "4:17",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Answer(Ode to Joy)(feat. LA POEM)",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "4:26",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Outro: Over the Horizon",
        releaseDate: "December 10, 2021",
        albumName: "Zero: Fever Epilogue",
        runtime: "1:41",
        image: "imgs/38.jpg",
        fact: "..."
    },
    {
        songName: "Eternal Sunshine",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "3:39",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "Feeling Like I Do",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "3:17",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "Deja Vu",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "3:16",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "ROCKY",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "3:08",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "All About You",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "2:56",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "Not Too Late",
        releaseDate: "September 13, 2021",
        albumName: "Zero: fever part.3",
        runtime: "3:34",
        image: "imgs/39.jpg",
        fact: "..."
    },
    {
        songName: "Fireworks (I'm the One)",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "3:29",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "The Leaders",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "3:12",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "Time Of Love",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "2:56",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "Take Me Home",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "3:41",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "Celebrate",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "3:16",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "I'm The One - Heat-TOPPING Version",
        releaseDate: "March 1, 2021",
        albumName: "Zero: fever part.2",
        runtime: "3:52",
        image: "imgs/40.jpg",
        fact: "..."
    },
    {
        songName: "Dear Diary: 2016.07.2",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "2:33",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "FEVER",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:24",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "THANXX",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:01",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "To The Beat",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:01",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "INCEPTION",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:30",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "Good Lil Boy",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:25",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "One Day At A Time",
        releaseDate: "July 29, 2020",
        albumName: "Zero: fever part.1",
        runtime: "3:23",
        image: "imgs/41.jpg",
        fact: "..."
    },
    {
        songName: "Intro: Long Journey",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "1:36",
        image: "imgs/42.jpg",
        fact: "..."
    },
    {
        songName: "Pirate King",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "3:15",
        image: "imgs/42.jpg",
        fact: "..."
    },
    {
        songName: "Treasure",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "3:40",
        image: "imgs/42.jpg",
        fact: "..."
    },
    {
        songName: "Twilight",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "3:44",
        image: "imgs/42.jpg",
        fact: "..."
    },
    {
        songName: "Stay",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "3:19",
        image: "imgs/42.jpg",
        fact: "..."
    },
    {
        songName: "My Way",
        releaseDate: "October 24, 2018",
        albumName: "Treasure: ep.1: All to zero",
        runtime: "3:48",
        image: "imgs/42.jpg",
        fact: "..."
    },
]
displaySongs(songs);