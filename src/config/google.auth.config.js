import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "./prisma.config.js";
import { user_model } from "../model/user.model.js";
import { userDTO } from "../dto/user.dto.js";

dotenv.config();

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/oauth2/callback/google",
    scope: ["email", "profile"],
    state: true,
  },
  (accessToken, refreshToken, profile, cb) => {
    return googleVerify(profile)
      .then((user) => cb(null, user))
      .catch((err) => cb(err));
  }
);

const googleVerify = async (profile) => {
  const email = profile.emails?.[0]?.value;
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
    id : profile._json.email
  }
  const create = new userDTO(data)
  const created = await user_model.insertUser(create);
  if(created.affectedRows === 0) {
    throw new Error("회원가입에 실패했습니다.");
  }

  return { id: create.id, email: create.email, name: create.name };
};
