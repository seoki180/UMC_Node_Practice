import { Strategy as KakaoStrategy } from "passport-kakao";
import dotenv from "dotenv";
import { prisma } from "./prisma.config.js";
import { userDTO } from "../dto/user.dto.js";
import { user_model } from "../model/user.model.js";

dotenv.config()

export const kakaoStrategy = new KakaoStrategy(
    {
      clientID: process.env.KAKAO_KEY,
      callbackURL: "/oauth2/callback/kakao",
    },
    (accessToken, refreshToken, profile, cb) => {
      return KakaoVerify(profile)
        .then((user) => cb(null, user))
        .catch((err) => cb(err));
    }
  );
  
const KakaoVerify = async (profile) => {
  console.log(profile);
  const email = profile._json.kakao_account.email;
  if (!email) {
    throw new Error(`profile.email was not found: ${profile}`);
  }

  // 기존 사용자 찾기
  const user = await prisma.USERS.findFirst({ 
    where: { user_Id: email }
  });

  // 사용자가 있으면 로그인 처리
  if (user) {
    return { 
      id: user.user_Index, 
      email: user.user_Id, 
      name: user.user_Name 
    };
  }
  // 사용자가 없으면 회원가입 처리
  const data  = {
    name : profile.displayName,
    id : profile._json.kakao_account.email,
    method : "kakao"
  }
  const create = new userDTO(data)
  const created = await user_model.insertUser(create);
  if(created.affectedRows === 0) {
    throw new Error("회원가입에 실패했습니다.");
  }

  return { id: create.id, email: create.email, name: create.name };


}