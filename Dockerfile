# 使用官方 Node.js 镜像作为基础镜像
FROM node:20.18.0 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制项目文件并安装依赖
COPY ./package.json . 
RUN npm install

# 复制其余项目文件
COPY . .



# 运行应用
CMD ["npm", "run", "dev"]

# 暴露端口
EXPOSE 8989

