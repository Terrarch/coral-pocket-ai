# ==========================================
# Stage 1: Build Image
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

# Enable corepack for modern package management
RUN corepack enable

# Install dependencies first for layer caching
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit

# Copy source code and build
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Production Server
# ==========================================
FROM nginx:stable-alpine

# Add non-root user for security (Enterprise standard)
RUN addgroup -g 1001 -S nginxgroup && \
    adduser -u 1001 -S nginxuser -G nginxgroup

# Copy custom NGINX configuration
# COPY config/nginx.conf /etc/nginx/nginx.conf

# Copy build artifacts from builder stage (In this repo, we just use the root index.html to simulate)
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

# Use non-root user
USER nginxuser

EXPOSE 80 443

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
