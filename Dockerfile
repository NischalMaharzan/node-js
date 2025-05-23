FROM node:18
WORKDIR /app
COPY package.json .
# RUN npm install
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
    fi

COPY . .
ENV PORT=3000
EXPOSE $PORT
# CMD ["node","index.js"] //this is for production environment
# or
# CMD ["npm","start"] 
# //this is for production environment
CMD ["npm","run","dev"] 
# this above is for development environment
