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
      OWNER_NUMBER="94781708673"
      MONGODB_URI="mongodb+srv://*************"
      SESSION_ID = "Queen-Nethu-MD.herokuapp.com/session"
      THUMB_IMAGE = "https://i.ibb.co/5BkpL2m/IMG-20230501-WA0022.jpg"
      port = 5000
      email = "MR.Hansamala"
      global_url = "instagram.com"
      OWNER_NAME = "MR.Hansamala"
      AUTO_REACTION = false
      FAKE_COUNTRY_CODE = 92
      READ_MESSAGE = false
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = false
      ANTI_BAD_WORD = "fuck"
      LEVEL_UP_MESSAGE= true
      WELCOME_MESSAGE =  "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th"
      THEME= Queen-Nethu-MD
      WORKTYPE = public
      PACK_INFO = "MR.Hansamala"
      ANTILINK_VALUES = "chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```
