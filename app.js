import { config } from "dotenv";
import { response } from "./src/config/response.js";
import express from "express"
import morgan from "morgan"
import { review_controller } from "./src/controller/review.controller.js";
import { store_controller } from "./src/controller/store.controller.js";
// import { mission_controller } from "./src/controller/misssion.controller.js";
import { user_controller } from "./src/controller/user.controller.js";
import { NotFound } from "./src/config/error.js";
import compression from "compression";
import swaggerSetup from "./src/config/swagger.js";
import mission_Router from "./src/router/mission.router.js";

config()
const app = express()

app.use(response)
app.use(morgan('dev'))
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.use(compression({ threshold: 512 }));

app.use("/mission",mission_Router)

app.post("/store",store_controller.addStore)

app.post("/user/regist",user_controller.registUser)

app.post("/reviews/:store_index",review_controller.addReview)

app.get("/reviews",review_controller.getReviews)

app.get("/reviews/:store_index",review_controller.getReviewsStore)

swaggerSetup(app)

app.use(NotFound)
// app.use(errorHandler)

app.listen(process.env.PORT || 3000);
