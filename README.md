# Netflix++

Programmed by Dorian Pistilli (dkpistilli@gmail.com)

Last Edited on 16 March, 2015

Chrome Extension that adds a button to netflix.com, allowing the user quick access to different lists of netflix content (best movies, tv shows, leaving soon, etc...). By clicking the links on the dropdown menu, the user remains on Netflix.com, but now with additional tabs of the list content he/she clicked on.

Contains a manifest file that is a JSON object in a format specified by Google Chrome. The icon popup itself is essentially just an HTML page w/ basic CSS and javascript (with some supplementary chrome functions). Again, all of this is designed to fit within Google's Chrome specifications, which can be found here https://developer.chrome.com/extensions/api_index

#### To-do List
- Edit links so that they don't ever show purple / use buttons instead
- (POTENTIAL) have the app scrape the list sites for text, and then display that instead
- Browse for new font
- Add Dashboard Images so people can see the app
- Potentially change color of html so it has white title bg and gray link bg to match the Netflix top panel. If that happens, I need to remember to have the height of the top white panel resize dynamically on browser size because Netflix changes the height of its top menu panel when the browser gets small enough (horizontally)
- Add varying icon sizes

#### Known Bugs:
- Not really a bug - extension also works on www.guimp.com,
which is a very small site that makes testing / refreshing much easier.
- It's certainly not the prettiest / most useful thing in the world. I really wish Netflix just had a stinkin' API that they didn't take down from some combo of laziness/stupidity/greed
