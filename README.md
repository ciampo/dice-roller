# Natural 20

A dice roller web app.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run firebase:serve

# deploy the production build to firebase
npm run firebase:deploy

# run tests with jest and preact-render-spy 
npm run test
```

## MVP

- better design (nat20 logo, dice, buttons)
- add WIP settings (mostly empty, with current version and next planned features)
- add tutorial (under settings page). Somehow give the user the chance of viewing it on the first visit. (localstorage)
- "add to home" prompt after using / in settings
- bug — tray flashes when re-rolling the die.
- get theme colors right, and update meta header and package.json (and favicons if necessary), refresh crawlers

## Nice to have

- update to latest preact cli / preact x
  - review preact config and sw
  - review html template
  - add CSS/JS preload
- better rolling options (collapsing drawer):
  - move adv / disadv under those options
  - reroll nat 1s
  - crit threshold (default is 20)
  - fixed modifier
- options page:
  - group dice by type when showing results
  - change colors
  - create dice presets (refactor model behind default dice: each dice / preset is actually an array of dice)
  - choose what dice to show/hide in the roll page (inclusing dice presets)
- desktop styles (drawer, stats grid...)
- explore haptics on buttons (e.g die button, roll button..)
- animaiton to remove results of a roll before showing a new one
