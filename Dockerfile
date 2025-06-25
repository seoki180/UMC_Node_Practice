# Node.js 베이스 이미지 사용
FROM node:22-alpine
# 작업 디렉토리 설정
WORKDIR /app


# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
# RUN apk add --no-cache openssl3   
RUN npm ci

# 소스 코드 복사
COPY . .
# Prisma 클라이언트 생성
# RUN npx prisma generate

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "run", "dev"] 