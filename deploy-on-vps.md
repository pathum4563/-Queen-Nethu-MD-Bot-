## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ```
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ```
   2. Install nodejs 
      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```

   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```

   4. Install pm2
      ```
      sudo yarn global add pm2
      ```

   5. Clone Repo and install required packages
      ```
      git clone https://github.com/shashikabot/-Queen-Nethu-MD-Bot-
      cd Queen-Nethu-Md
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="94740203415"
      MONGODB_URI="mongodb+srv://*************"
      SESSION_ID = "Queen-Nethu-Md.herokuapp.com/session"
      THUMB_IMAGE = "https://i.ibb.co/MCdz4JY/68747470733a2f2f692e6962622e636f2f68386d484c6a382f3130333930323033362d72656d6f766562672d707265766965.jpg"
      port = 5000
      email = "Hansamala"
      global_url = "instagram.com"
      OWNER_NAME = "Hansamala"
      AUTO_REACTION = false
      FAKE_COUNTRY_CODE = 92
      READ_MESSAGE = false
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = false
      ANTI_BAD_WORD = "fuck"
      LEVEL_UP_MESSAGE= true
      WELCOME_MESSAGE =  "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th"
      THEME= Queen-Nethu
      WORKTYPE = public
      PACK_INFO = "Hansamala"
      ANTILINK_VALUES = "chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```
