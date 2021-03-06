#####################################
##      STEP 1: Build project      ##
#####################################
FROM node AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/ng build --prod --aot

#####################################
##   STEP 2: Build a small image   ##
#####################################
FROM nginx:alpine

COPY --from=builder /app/dist/frontend /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
