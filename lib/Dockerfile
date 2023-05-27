FROM quay.io/MR.Hansamala/Queen-Nethu-MD
RUN git clone https://github.com/shashikabot/-Queen-Nethu-MD-Bot-/root/MR.Hansamala
WORKDIR /root/MR.Hansamala/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
