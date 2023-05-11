FROM quay.io/SHAkthi/THARU_X-MD
RUN git clone https://github.com/tharuxbot/THARU_X-BOT/root/SHAKTHI
WORKDIR /root/SHAKTHI/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
