import express from "express"
import session from "express-session";
import morgan from "morgan"
import compression from "compression";
import swaggerSetup from "./src/config/swagger.js";
import mission_Router from "./src/router/mission.router.js";
import passport from "passport";
import { config } from "dotenv";
import { response } from "./src/config/response.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { prisma } from "./src/config/prisma.config.js";
import { review_controller } from "./src/controller/review.controller.js";
import { store_controller } from "./src/controller/store.controller.js";
import { user_controller } from "./src/controller/user.controller.js";
import { googleStrategy } from "./src/config/google.auth.config.js";
import { kakaoStrategy } from "./src/config/kakao.auth.config.js";
import { NotFound } from "./src/config/error.js";

config()
const app = express()

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(googleStrategy);
passport.use(kakaoStrategy)

app.use(response)
app.use(morgan('dev'))
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.use(compression({ threshold: 512 }));

app.get("/",(req,res)=>{res.send("home")})

app.use("/mission",mission_Router)

app.post("/store",store_controller.addStore)

app.post("/user/regist",user_controller.registUser)

app.post("/user/login",user_controller.loginUser)

app.post("/reviews/:store_index",review_controller.addReview)

app.get("/reviews",review_controller.getReviews)

app.get("/reviews/:store_index",review_controller.getReviewsStore)

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, // ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.get("/oauth2/login/google", passport.authenticate("google"));
app.get("/oauth2/callback/google",
  passport.authenticate("google", {
    failureRedirect: "/oauth2/login/google",
    failureMessage: true,
  }),
  (req, res) => {
    console.log(req.user)
    res.redirect("/")
  }
);

app.get("/oauth2/login/kakao", passport.authenticate("kakao"));
app.get("/oauth2/callback/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/oauth2/login/kakao",
  }),
  (req, res) => {
    console.log(req.user)
    res.redirect("/")
  }
);


swaggerSetup(app)

app.use(NotFound)

app.listen(process.env.PORT || 3000);
