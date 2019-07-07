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

- uniform buttons behaviour (bounce, outline on focus, borders..);
- highlight max/min rolls
- robots.txt
- better design:
  - grow on mobile
  - swap to side-to-side on desktop
- add "?" screen (shown on virst visit)
- add custom html template (node_modules/preact-cli/lib/resources/template.html)
  - icons, including iOS
  - title/description/og image... (better wait for preact cli 3)
  - precache

## Nice to have

- update to latest preact cli / preact x
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
