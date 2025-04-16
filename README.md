# Personal Site
Personal Site created back in 2017.

Using ~~jade~~ pug and sass because I'm lazy.

Run `npm run watch` to run watchers for both pug.js and sass.

Last generated off of:
- Created on Docker version: 28.0.4, build b8034c0
- NPM version: 11.3.0


## How to Use (Windows)
### Build an image:
`./make.bat 

## How to Use (Linux)
### Build an image:
`docker build -t personal-site-watcher:latest .`

### Run container while mounting working directory into the container's `/app` folder:
`docker run --rm -it --mount type=bind,src=<project_directory_on_host>,target=//app personal-site-watcher`

# Changelog
- 2025: Updated sass and upgraded to pug3. Add Docker to perform npm install and run pug3 and sass watchers for development.
- 2017: Created the website.

## TODO
- 2020: Google mailhide is discontinued and I need a new anti-spider algorithm for my email.
