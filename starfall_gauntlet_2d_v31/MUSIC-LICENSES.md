# Music licences

The tracks in `music/` are third-party works. This file must say, for each one,
who made it, where you got it, and what licence lets you use it in the game.
Please fill in every field below with the real details before you publish.
I could not verify any of these from the files: they have no embedded
artist or licence tags.

| File | Title | Artist | Source URL | Licence (e.g. CC BY 4.0, purchased licence) | Attribution text required |
|------|-------|--------|------------|---------------------------------------------|---------------------------|
| music/overdrive.mp3 | Overdrive | _fill in_ | _fill in_ | _fill in_ | _fill in_ |
| music/in-the-face-of-evil.mp3 | In The Face Of Evil | _fill in_ | _fill in_ | _fill in_ | _fill in_ |
| music/turbo-killer.mp3 | Turbo Killer | _fill in_ | _fill in_ | _fill in_ | _fill in_ |

## Things to check
- Commercial releases (Spotify/iTunes/YouTube rips) are copyrighted. You need
  written permission or a sync licence from the rights holders, which a
  "free download" does not give you.
- Many Creative Commons tracks are NonCommercial (NC) or NoDerivatives (ND).
  NC rules out ads, in-app purchases and paid store listings. ND can rule out
  re-encoding or looping, and the files here were re-encoded to 80 kbps.
- Attribution (BY) licences need the credit shown in the game. Once you fill in
  `MUSIC_CREDITS` near the Credits code in `index.html`, the Credits screen
  shows it automatically.
- If you cannot show you have the right to a track, delete it from `music/`
  and from `MUS` / `FILES` in `index.html` and `sw.js`. The game's built-in
  synth music ("Original synth" in settings) is your own work and needs no licence.
