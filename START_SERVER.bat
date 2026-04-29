@echo off
title White Fox Dev Server
echo ---------------------------------------------------
echo  WHITE FOX - LOCAL DEVELOPMENT SERVER
echo ---------------------------------------------------
echo.
echo  Starting server for the "public" directory...
echo  The site will be available at http://localhost:3000
echo.
echo  Press Ctrl+C to stop the server.
echo.
npx serve public
pause
