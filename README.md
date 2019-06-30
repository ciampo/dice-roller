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

- better design:
  - fit on one screen on mobile (4 cols? smaller icons? move dice count? smaller button / gaps / smaller result area, with less info)
  - swap to side-to-side on desktop
- uniform buttons behaviour (bounce, outline on focus, borders..);
- add "?" screen (shown on virst visit)
- highlight max/min rolls
- no JS ?
- update to latest preact
- meta:
  - icons (add iOS favicon to )
  - title/description/og image... (better wait for preact cli 3)
- add 404 page


## Nice to have

- modifier (add / remove a fixed number)
- dice sets (e.g. greataxe damage: 1d12 + 3)
- options: change colors
- haptics on buttons (e.g die button, roll button..)
