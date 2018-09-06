# Survey Platform

Showing list of surveys and details of them


## General Structure
 - */backend*
    Return JSON responses -> Read backend/Readme.md for understanding backend express project
 - */frontend*
    Handling frontend of the project
    frontend/Readme.md for understanding 


## Running both projects together


### RUN BACKEND
```
cd backend/
npm install
PORT=4000 npm start
```


### RUN FRONTEND
```
cd frontend/
cp .env.example .env
npm i
npm run build
npm run start
```

### OPEN Browser:
http://localhost:5000
