# personal-site
Personal Site created back in 2017.

Using ~~jade~~ pug and sass because I'm lazy.

Run `npm run watch` to run watchers for both pug.js and sass.

Updated 2020:
- Note: Google mailhide is discontinued and I need a new anti-spider algorithm for my email.

This works:

Created on Docker version: 28.0.4, build b8034c0
NPM version: 11.3.0

docker run --rm -it -v e\Projects\Coding\Chongor\chongor.github.io:/app personal-site-watcher

// build image
docker build -t personal-site-watcher:latest .

// mounts working directory into the container's `/app` folder
docker run --rm -it --mount type=bind,src=e/Projects/Coding/Chongor/chongor.github.io,target=//app personal-site-watcher
