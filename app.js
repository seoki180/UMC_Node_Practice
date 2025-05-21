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
/*  #swagger.tags = ['Stores']
    #swagger.summary = '새로운 가게 추가'
    #swagger.description = '시스템에 새로운 가게 정보를 등록합니다.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/StoreCreationRequest" }
            }
        }
    }
    #swagger.responses[200] = {
        description: '가게 추가 성공',
        content: {
            "application/json": {
                 schema: {
                    type: "object",
                    properties: {
                        result: { type: "boolean", example: true },
                        error: { type: "object", nullable: true },
                        success: { "$ref": "#/components/schemas/StoreCreationResponseData" }
                    }
                }
            }
        }
    }
    #swagger.responses[400] = {
        description: '잘못된 요청',
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ErrorResponse" }
            }
        }
    }
*/

app.post("/user/regist",user_controller.registUser)
/*  #swagger.tags = ['Users']
    #swagger.summary = '사용자 회원가입'
    #swagger.description = '새로운 사용자를 시스템에 등록합니다.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/UserRegistrationRequest" }
            }
        }
    }
    #swagger.responses[200] = {
        description: '회원가입 성공',
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        result: { type: "boolean", example: true },
                        error: { type: "object", nullable: true },
                        success: { "$ref": "#/components/schemas/UserRegistrationResponseData" }
                    }
                }
            }
        }
    }
    #swagger.responses[400] = {
        description: '잘못된 요청 또는 유효성 검사 실패',
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ErrorResponse" }
            }
        }
    }
*/

app.post("/reviews/:store_index",review_controller.addReview)
/*  #swagger.tags = ['Reviews']
    #swagger.summary = '특정 가게에 리뷰 추가'
    #swagger.description = '사용자가 특정 가게에 대한 리뷰를 작성합니다.'
    #swagger.parameters['store_index'] = {
        in: 'path',
        required: true,
        description: '리뷰를 추가할 가게의 ID',
        schema: { type: 'integer', example: 1 }
    }
    #swagger.parameters['Authorization'] = {
        in: 'header',
        required: true,
        description: '사용자 식별자 (user_index)',
        schema: { type: 'string', example: '123' }
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ReviewCreationRequest" }
            }
        }
    }
    #swagger.responses[200] = {
        description: '리뷰 추가 성공',
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        result: { type: "boolean", example: true },
                        error: { type: "object", nullable: true },
                        success: { "$ref": "#/components/schemas/ReviewCreationResponseData" }
                    }
                }
            }
        }
    }
    #swagger.responses[400] = {
        description: '잘못된 요청 또는 가게/사용자 정보 없음',
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ErrorResponse" }
            }
        }
    }
*/


app.get("/reviews",review_controller.getReviews)
/*  #swagger.tags = ['Reviews']
    #swagger.summary = '내가 작성한 리뷰 목록 조회'
    #swagger.description = '현재 로그인한 사용자가 작성한 모든 리뷰 목록을 가져옵니다.'
    #swagger.parameters['Authorization'] = {
        in: 'header',
        required: true,
        description: '사용자 식별자 (user_index)',
        schema: { type: 'string', example: '123' }
    }
    #swagger.responses[200] = {
        description: '리뷰 목록 조회 성공',
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        result: { type: "boolean", example: true },
                        error: { type: "object", nullable: true },
                        success: { type: "array", items: { "$ref": "#/components/schemas/ReviewItem" } }
                    }
                }
            }
        }
    }
    #swagger.responses[401] = {
        description: '인증 실패 (사용자 정보 없음)',
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ErrorResponse" }
            }
        }
    }
*/

app.get("/reviews/:store_index",review_controller.getReviewsStore)
/*  #swagger.tags = ['Reviews']
    #swagger.summary = '특정 가게의 리뷰 목록 조회'
    #swagger.description = '지정된 가게 ID에 해당하는 모든 리뷰 목록을 가져옵니다.'
    #swagger.parameters['store_index'] = {
        in: 'path',
        required: true,
        description: '리뷰를 조회할 가게의 ID',
        schema: { type: 'integer', example: 1 }
    }
    #swagger.responses[200] = {
        description: '가게 리뷰 목록 조회 성공',
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        result: { type: "boolean", example: true },
                        error: { type: "object", nullable: true },
                        success: { type: "array", items: { "$ref": "#/components/schemas/ReviewItem" } }
                    }
                }
            }
        }
    }
    #swagger.responses[404] = {
        description: '가게를 찾을 수 없음',
        content: {
            "application/json": {
                schema: { "$ref": "#/components/schemas/ErrorResponse" }
            }
        }
    }
*/


swaggerSetup(app)

app.use(NotFound)
// app.use(errorHandler)

app.listen(process.env.PORT || 3000);
