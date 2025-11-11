# GreatCall app

GreatCall is a professional-grade video conferencing web application designed for modern business communication. Built with Spring Boot and JavaScript, this platform provides secure, real-time video conferencing capabilities with an intuitive user interface suitable for corporate environments.

The application features robust user authentication, session management, and integrates with ZegoCloud's WebRTC services to deliver high-quality video and audio communication. With its professional design and enterprise-ready architecture, GreatCall offers a seamless video conferencing experience that prioritizes security and user experience.

## Table of Contents

## Tech stack
<div align="left">
  <img src="https://icon.icepanel.io/Technology/svg/Spring.svg" height="40" alt="spring logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/JavaScript.svg" height="40" alt="js logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/Java.svg" height="40" alt="java logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/Git.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" height="40" alt="docker logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/IntelliJ-IDEA.svg" height="40" alt="IntelliJ logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/HTML5.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/CSS3.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://icon.icepanel.io/Technology/svg/Apache-Maven.svg" height="40" alt="maven logo"  />
  <img width="12" />
</div>

## Features

### Authentication & Security
- **Secure User Registration** with password encryption
- **Spring Security Integration** with BCrypt hashing
- **Session-based Authentication** with automatic redirects
- **Role-based Access Control** ready for expansion

### Video Conferencing
- **Real-time Video/Audio Calls** via ZegoCloud WebRTC
- **Multi-participant Support** (up to 50 users per room)
- **Screen Sharing** capabilities
- **Text Chat** during meetings

## Installation & Setup

### Prerequisites
- **Java 17** or higher
- **Maven 3.6** or higher
- **ZegoCloud** project keys

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/greatcall.git
   cd greatcall
   ```

2. Create the config.js file

    -Go to ./src/main/resources/static/js

    -Create a file named config.js

    -Use your ZegoCloud keys in the format:

    ```js
    window.ZEGOCLOUD_CONFIG = {
        appID: YOUR_ID,
        serverSecret: "YOUR_SECRET"
    };  
    ```

3. **Build the application**
    ```bash
    ./mvnw clean package -DskipTests
    ```

4. **Run the application**
    ```bash
    ./mvnw spring-boot:run
    ```

4. Access the Aplication 
Open your browser and navigate to: http:localhost:8080

## Usage 
If not authenticated the first page you'll see will be the login page 

![Login page](https://i.imgur.com/Ci9GzMo.png)

To create a new user, you need to go to the register page

![Register page](https://raw.githubusercontent.com/arthurhdr/artie-imgs/refs/heads/main/images/Screenshot%202025-11-11%20at%2018-36-21%20Create%20Account%20-%20GreatCall%20Video%20Conferencing.png?token=GHSAT0AAAAAADMFNHDNFT3BW4645SI5HDMW2ITX4QA)

After succesfully authenticating, the user will se the video conference dashboard, where you can create a meeting or enter in an existing one

![Dashboard](https://raw.githubusercontent.com/arthurhdr/artie-imgs/refs/heads/main/images/Screenshot%202025-11-11%20at%2018-36-57%20Dashboard%20-%20GreatCall%20Video%20Conferencing.png?token=GHSAT0AAAAAADMFNHDMGZ757ZW3MFNJIZZI2ITX5MQ)


Before entering or creating a new meeting you'll be presented to a room to test your mic or your webcam and to choose a Username before entering

![JOIN ROOM](https://raw.githubusercontent.com/arthurhdr/artie-imgs/refs/heads/main/images/Screenshot%202025-11-11%20at%2018-38-11%20.png?token=GHSAT0AAAAAADMFNHDN3JLLA3R4EK74TBYI2ITYAMQ)

The meeting page with two people will look like that:

![Meeting room](https://raw.githubusercontent.com/arthurhdr/artie-imgs/refs/heads/main/images/Screenshot%202025-11-11%20at%2018-40-30%20.png?token=GHSAT0AAAAAADMFNHDN7BYVY5XO2LEMAIXW2ITYBOA)


## API Documentation

### User management Endpoints

| METHOD | ENDPOINT      | DESCRIPTION         | AUTHENTICATION |
|--------|---------------|---------------------|----------------|
| POST   | /api/v1/users | Register new user   | Public         |
| POST   | /login        | User authentication | Public         |
| POST   | /logout       | User logout         | Authenticated  |
| GET    | /api/v1/users | Get all users       | Authenticated  |

## Docker deployment

### Building the Docker image

```bash
docker build -t greatcall-app .
```

### Running with Docker

```bash
docker run -p 8080:8080 greatcall-app
```

## Planned future features

- **Database Integration**: PostgreSQL for persistent user storage

- **Email Verification:** Account confirmation via email

- **Meeting Recording:** Cloud recording of video conferences

- **Advanced Moderation:** Host controls for participant management

- **Mobile Application:** React Native mobile client

- **Calendar Integration:** Google Calendar and Outlook integration

- **File Sharing:** Document sharing during meetings

- **Breakout Rooms:** Separate discussion groups within meetings

## Contributing

We welcome contributions to GreatCall! Please follow these steps:

- Fork the Repository

- Create a Feature Branch: git checkout -b feature/amazing-feature

- Commit Your Changes: git commit -m 'Add amazing feature'

- Push to the Branch: git push origin feature/amazing-feature

- Open a Pull Request