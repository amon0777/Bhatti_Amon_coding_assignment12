# Stage 1: Build the React application
FROM node:18-alpine as builder
WORKDIR /Bhatti_Amon_ui_garden
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /Bhatti_Amon_ui_garden/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]