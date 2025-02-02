Must have these installed:
Node.js
Python 3.12
Git

Brendan's Bash commands to install dependencies:
cd frontend
npm install
cd ../backend
npm install


BRENDAN'S INSTRUCTIONS ON HOW TO RUN SITE: 
Open bash
use "cd frontend"
then "npm run start:full"

press Ctrl+c to stop



Weird inconsistency with package.json start:full:
"npx concurrently \"npm run start\" \"cd ../backend && npm run start\""
- works on my laptop but not PC

"concurrently \"cd ../backend && node server.js\" \"npm start\""
- works on PC but not laptop
