import { config } from "dotenv";
config()
import { response } from "./src/config/response.js";
import express from "express"
import { review_controller } from "./src/controller/review.controller.js";
import { store_controller } from "./src/controller/store.controller.js";
import { mission_controller } from "./src/controller/misssion.controller.js";
import { user_controller } from "./src/controller/user.controller.js";
import morgan from "morgan"
import errorHandler from "errorhandler";
import { NotFound } from "./src/config/error.js";

const app = express()


// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }

//   res.status(err.statusCode || 500).error({
//     errorCode: err.errorCode || "unknown",
//     reason: err.reason || err.message || null,
//     data: err.data || null,
//   });
// });


app.use(response)
app.use(morgan('dev'))
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석


app.post("/store",store_controller.addStore)
app.post("/user/regist",user_controller.registUser)
app.post("/reviews/:store_index",review_controller.addReview)
app.post("/mission/:store_index/add",mission_controller.addMisison)
app.post("/mission/:mission_index/start",mission_controller.startMission)

app.get("/reviews",review_controller.getReviews)
app.get("/reviews/:store_index",review_controller.getReviewsStore)
app.get("/missions/",mission_controller.getMissions)
app.patch("/missions/:mission_index/complete",mission_controller.completeMission)


app.use(NotFound)
// app.use(errorHandler)

app.listen(process.env.PORT || 3000);
