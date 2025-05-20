current_dir := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

build:
	docker build -t personal-site-watcher:latest .

setup:
	docker run --rm -it --mount type=bind,src=$(current_dir),target=//app personal-site-watcher:latest npm install

watch:
	docker run --rm -it --mount type=bind,src=$(current_dir),target=//app personal-site-watcher:latest npm run watch