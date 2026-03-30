FROM node:18

WORKDIR /app

# Copy and install backend dependencies
COPY backend/package.json .
RUN npm install

# Copy backend source
COPY backend/ .

# Copy frontend into container
COPY frontend/ /frontend

EXPOSE 5000

CMD ["node", "server.js"]
