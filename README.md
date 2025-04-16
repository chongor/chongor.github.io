# Personal Site
Personal Site created back in 2017.

Using ~~jade~~ pug and sass because I'm lazy.

Last generated off of:
- Created on Docker version: 28.0.4, build b8034c0
- NPM version: 11.3.0


## How to Use (Windows)
### Build an image:
`./make.bat build`

### Initial setup (after building image locally):
`./make.bat setup`

### Start Sass and Pug watchers:
`./make.bat watch`

## How to Use (Linux)
### Build an image:
`docker build -t personal-site-watcher:latest .`

### Initial setup (Requires Docker):
Run npm install to install node modules needed to compile pug and sass

`docker run --rm -it --mount type=bind,src=<project_directory_on_host>,target=//app personal-site-watcher:latest npm install`

### Start Sass and Pug watchers:
`docker run --rm -it --mount type=bind,src=<project_directory_on_host>,target=//app personal-site-watcher`

# Changelog
- 2025: Updated sass and upgraded to pug3. Add Docker to perform npm install and run pug3 and sass watchers for development. Replace defunct Google Mailhide with Mailhide.io.
- 2017: Created the website.

## TODO
- ~~2020: Google mailhide is discontinued and I need a new anti-spider algorithm for my email.~~
