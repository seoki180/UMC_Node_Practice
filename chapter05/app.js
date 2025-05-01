import express from "express"
import { review_controller } from "./src/controller/review.controller.js";
import { store_controller } from "./src/controller/store.controller.js";
import { mission_controller } from "./src/controller/misssion.controller.js";
import morgan from "morgan"
import { config } from "dotenv";

const app = express()
config()

app.use(morgan('dev'))
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석


app.post("/store",store_controller.addStore)
app.post("/reviews/:store_index",review_controller.addReview)
app.post("/mission/:store_index/add",mission_controller.addMisison)
app.post("/mission/:mission_index/start",mission_controller.startMission)

// 404 핸들러는
app.use((req, res) => {
  res.status(404).json({
      success: false,
      message: '해당 경로를 찾을 수 없습니다.',
      code : 404
  })
})

app.listen(process.env.PORT || 3000);