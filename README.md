# Google Analytics for Sugarcube 2

 A macro for the twine story format sugarcube 2  that enables google analytics.

## Install

### Install when using Twine

1. Copy the `sugarcube2-google-analytics.js` code into your Story Javascript section.

2. Under the `:: StoryInit` passage (if you don't have one create one) include `<<ga YOUR_GOOGLE_ANALYTICS_ID>>`.

3. The script should now load whenever someone plays your game.

### Install when using compiler (tested with tweego)

1. Download the most recent from Releases and extract zip into your compiler source folder.

2. Under the `:: StoryInit` passage (if you don't have one create one) include `<<ga YOUR_GOOGLE_ANALYTICS_ID>>`.

3. The script should now load whenever someone plays your game.
