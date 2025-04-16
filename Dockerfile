# ====== base image ======
FROM node:23-slim

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV=development
RUN npm install -g npm@11.3.0

CMD ["npm", "run", "watch"]