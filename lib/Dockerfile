FROM quay.io/shashikabot/-Queen-Nethu-MD-Bot-
RUN git clone https://github.com/shashikabot/-Queen-Nethu-MD-Bot-
WORKDIR /root/shashikabot/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
