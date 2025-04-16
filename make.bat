@ECHO OFF

SET arg1=%1

if "%1" EQU "build" CALL :Build
if "%1" EQU "setup" CALL :Setup
if "%1" EQU "watch" CALL :Watch
GOTO :EOF

:: Docker Commands (Windows Makefile)

:Build
docker build -t personal-site-watcher:latest .
EXIT /b

:Setup
docker run --rm -it --mount type=bind,src=%cd%,target=//app personal-site-watcher:latest npm install
EXIT /b

:Watch
docker run --rm -it --mount type=bind,src=%cd%,target=//app personal-site-watcher:latest npm run watch
EXIT /b