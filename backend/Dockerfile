# -----------------------
# Stage 1 - Build
# -----------------------
FROM node:20 AS builder

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Setar diretório de trabalho
WORKDIR /usr/src/app

# Copiar apenas arquivos de dependências primeiro (melhora cache)
COPY package.json ./

# Instalar dependências (incluindo devDependencies para build)
RUN pnpm install

# Copiar o restante do código
COPY . .

# Rodar o build da aplicação
RUN pnpm run build

# -----------------------
# Stage 2 - Runtime
# -----------------------
FROM node:22.19.0 AS runner

# Instalar pnpm
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários da build
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expor porta
EXPOSE 3000

# Rodar a aplicação
CMD ["node", "dist/gateway/main.js"]
