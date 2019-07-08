# Roll the dice

A utility app for rolling dice.

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

- highlight max/min rolls
- better design:
  - grow on mobile
  - swap to side-to-side on desktop
- add WIP settings (mostly empty, with current version and next planned features)
- add tutorial (under settings page). Somehow give the user the chance of viewing it on the first visit.
- robots.txt / sitemap.xml / base.html — dynamic build, to add the host URL from firebase config (or replace in build folder)
- get a "final" domain and crawl on google search console / twitter / facebook etc
- better icons / og image

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
- explore haptics on buttons (e.g die button, roll button..)
