FROM node:lts-alpine AS build
ENV NODE_ENV build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm run build

FROM node:lts-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --from=builder /home/app/package*.json .
COPY --from=builder /home/app/node_modules/ .
COPY --from=builder /home/app/dist/ .

EXPOSE 3000

CMD ["node", "dist/main.js"]