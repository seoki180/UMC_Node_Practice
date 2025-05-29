import { Strategy as KakaoStrategy } from "passport-kakao";
import dotenv from "dotenv";
import { prisma } from "./prisma.config.js";

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
  else {
    return null;
  }
  // 사용자가 없으면 회원가입 처리
//   const created = await prisma.USERS.create({
//     data: {
//       email,
//       name: profile.displayName,
//       gender: "추후 수정",
//       birth: new Date(1970, 0, 1),
//       address: "추후 수정",
//       detailAddress: "추후 수정",
//       phoneNumber: "추후 수정",
//     },
//   });

}