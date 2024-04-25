FROM node:19-alpine 
COPY . .
EXPOSE 8000
RUN npm install
CMD ["npm","start"]