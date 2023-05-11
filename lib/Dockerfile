FROM quay.io/Hansamala/Queen-Nethu-MD
RUN git clone https://github.com/shashikabot/-Queen-Nethu-MD-Bot-.git
WORKDIR /root/shashikabot/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
