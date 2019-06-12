# Gh-Pages Handlebars + SASS + Image Compression Boilerplate
## Github Pages ready boilerplate w/ handlebars, sass, image compression and more
*optional*: bs, jquery and react

building via webpack

based on github.com/statickidz/webpack-handlebars-bootstrap.git

features:
- BrowserSync
- clean terminal output
- pages export to root (so it's ready for Github Pages, but you can change it)
- template structure with “base” and “content”
<!-- - more friendly port (7001) -->
- https (optional)
- bs responsive debug block
- sass mixin for font-face
<!-- - not opening browser on start -->

## How to start developing
* download this repo
* `yarn (npm install)`
* `yarn start (npm run start)`
* `yarn build` to build the project 

### TODO:
[] watching not only hbs files, but also scss (now you need to reaload a browser by yourself)
<!-- open browser on start & reload -->

### Other
Font-face mixin usage:

@include font-face(OpenSans, "../fonts/OpenSans-Light", 300, normal, ttf);
@include font-face(OpenSans, "../fonts/OpenSans-Regular", normal, normal, ttf);
@include font-face(OpenSans, "../fonts/OpenSans-Medium", 500, normal, ttf);
@include font-face(OpenSans, "../fonts/OpenSans-Bold", bold, normal, ttf);

<!-- [GitHub Pages](https://pages.github.com/) -->