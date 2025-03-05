Brendan's instructions for the new Express-React-Project

Make sure the following are installed

Check each and see if your terminal just returns a version number like it should:

node    (check by running "node -v")

npm     (check by running "npm -v")

git     (check by running "git --version")

python  (check by running "python --version" or "python3 --version")

and I assume you already have a code editor (VS Code recommended)

Download some form of git software like gitHub desktop to clone the repo.

Once the repo is cloned to an empty folder, navigate to that folder in VSCode.


Run these, line by line, in a bash terminal in order to setup the project:

cd server

npm i express

npm i nodemon -D


cd ..

cd client

npm install

npm install react-router-dom



If you change and save any file, the website will automatically update thanks to nodemon




TO START THE WEBSITE the server must be running to use the backend, so run:
[Navigate to the original project folder (cd ..)]

cd server

node server.js

[That terminal is busy running the server now, open a new terminal]

cd client

npm start



The "React App" should now be running at http://localhost:3000/