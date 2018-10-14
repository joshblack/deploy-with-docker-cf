FROM node:8.12 as builder
WORKDIR /usr/src/my-service
COPY . .
RUN yarn install --offline

FROM node:8.12-alpine
WORKDIR /root/
# Can choose specific folders at this step to reduce image size!
COPY --from=builder /usr/src/my-service .

CMD ["yarn", "start"]
