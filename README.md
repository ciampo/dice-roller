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
- add 404 page
- robots.txt
- better design:
  - grow on mobile
  - swap to side-to-side on desktop
- add "?" screen (shown on virst visit)
- meta:
  - icons (add iOS favicon to )
  - title/description/og image... (better wait for preact cli 3)


## Nice to have

- update to latest preact cli / preact x
- modifier (add / remove a fixed number)
- dice sets (e.g. greataxe damage: 1d12 + 3)
- options page:
  - change colors
  - choose what dice to display (inclusing dice presets)
- haptics on buttons (e.g die button, roll button..)
