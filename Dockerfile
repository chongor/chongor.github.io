# ====== base image ======
FROM node:23

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV=development
CMD ["npm", "run", "watch"]

# CMD ["sass --watch scss:css"]
# CMD ["pug3 --watch pug --out ."]