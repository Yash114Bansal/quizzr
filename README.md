



**Check the socket server repository [here](https://github.com/yash114bansal/quizzr-server)**.






- [Screenshots](#Screenshots)

# About the project

Welcome to quizzr, where learning meets excitement! Join live quiz battles, create personalized challenges, and connect with peers in real-time. With adaptive difficulty and interactive features, quizzr offers an engaging learning experience for users of all levels. Create an account, customize your profile, and dive into the world of quizzes today. Get ready to buzz with excitement on quizzr!

# Tech Stack Used

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Key Features ✨

- **User Authentication:** Secure Google OAuth Sign In system using Next-Auth.

- **quizzr Creation:** Create new quizzrs(quizzes) and add questions to it.

- **Host a quizzr:** Host a new Game Session for the quiz.

- **Real-time Updates:** Get Realtime player and presenter interations.

- **Player Management:** Manage players in a game through presenter, system to kick unwanted players.

- **Leaderboard:** See the leaderboard after each question round.

# Running the Project

1. Clone the repository:

```CMD
git clone https://github.com/yash114bansal/quizzr.git
```
To run the server, you need to have NodeJS installed on your machine. If you don't have it installed, you can follow the instructions [here](https://nodejs.org/en//) to install it.



2. Install the dependencies: 

```CMD
npm install
```


4. Setup .env file in base directory:

```
NEXTAUTH_URL = "http://localhost:3000"
NEXTAUTH_SECRET = "<random_string>"

GOOGLE_CLIENT_ID = ""
GOOGLE_CLIENT_SECRET = ""

DATABASE_URL="<postgres_database_uri>"

NEXT_PUBLIC_SOCKET_URL="<websocket_server_url>"
```

5. Connect to the Server for websockets:
    - Go through this: https://github.com/yash114bansal/quizzr-server
    - Add the NEXT_PUBLIC_SOCKET_URL=http://localhost:\[PORT\] 
    - PORT is where the socket server is running 


6. Run on localhost:

```CMD
npm run dev
```


You can access the endpoints from your web browser following this url
```url
http://localhost:3000
```

# Screenshots

## Landing Page

![quizzr landing](https://res.cloudinary.com/dov6iolx4/image/upload/v1713007790/quizzr/Screenshot_2024-04-13_165354_ylsdzw.png)

## GamePlay (Presenter Side)

![Game Lobby](https://res.cloudinary.com/dov6iolx4/image/upload/v1713007977/quizzr/Screenshot_2024-04-13_170222_nds0th.png)

![Question](https://res.cloudinary.com/dov6iolx4/image/upload/v1713009082/quizzr/Screenshot_2024-04-13_171237_ttawxn.png)

![Answer Graph](https://res.cloudinary.com/dov6iolx4/image/upload/v1713009081/quizzr/Screenshot_2024-04-13_171429_rm4gns.png)

![LeaderBoard](https://res.cloudinary.com/dov6iolx4/image/upload/v1713009080/quizzr/Screenshot_2024-04-13_171509_wx4rif.png)

## Gameplay (Player Side)
<div>
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009730/quizzr/WhatsApp_Image_2024-04-13_at_17.19.56_7f8b8bbc_dlp73u.jpg" width="250px">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009730/quizzr/WhatsApp_Image_2024-04-13_at_17.19.56_b1a3ed0f_ephkmh.jpg" width="250px">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009729/quizzr/WhatsApp_Image_2024-04-13_at_17.19.55_39c71e75_buyhcm.jpg" width="250px" alt="lobby">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009734/quizzr/WhatsApp_Image_2024-04-13_at_17.19.54_0ee899f5_joymlv.jpg" width="250px" alt="ready-for-next-event">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009735/quizzr/WhatsApp_Image_2024-04-13_at_17.19.54_a6adcdbc_ol7kbe.jpg" width="250px" alt="question">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009736/quizzr/WhatsApp_Image_2024-04-13_at_17.19.53_331fa9f5_wwk14h.jpg" width="250px" alt="result-correct">
    <img src="https://res.cloudinary.com/dov6iolx4/image/upload/v1713009732/quizzr/WhatsApp_Image_2024-04-13_at_17.19.53_81e762aa_e7usk5.jpg" width="250px" alt="result-timeout">
</div>


