// src/config/swagger.js
import swaggerUi from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";


const swaggerSetup = (app) => {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup({}, {
      swaggerOptions: {
        url: "/openapi.json",
      },
    })
  );

  app.get("/openapi.json", async (req, res, next) => {
    // #swagger.ignore = true
    const options = {
      openapi: "3.0.0",
      disableLogs: true,
      writeOutputFile: true,
    };
    const outputFile = "./openapi.json";
    const routes = ["./app.js"];
    const doc = {
      info: {
        title: "UMC 8th",
        description: "UMC 8th Node.js 테스트 프로젝트입니다.",
      },
      components: {
        schemas: {
          ErrorResponse: {
            type: "object",
            properties: {
              result: { type: "boolean", example: false },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "integer", description: "애플리케이션별 에러 코드 또는 HTTP 상태 코드", example: 404 },
                  reason: { type: "string", description: "에러 메시지", example: "사용자를 찾을 수 없습니다." },
                  data: { type: "object", nullable: true, description: "추가 에러 데이터" },
                  stack: { type: "string", nullable: true, description: "스택 트레이스 (개발 환경에서 유용)" }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          },
          UserRegistrationRequest: {
            type: "object",
            properties: {
              name: { type: "string", example: "홍길동" },
              gender: { type: "integer", description: "성별 (예: 0-남성, 1-여성)", example: 0 },
              birthday: { type: "string", format: "date", example: "1995-05-15" },
              address: { type: "string", example: "서울시 강남구 테헤란로" },
              id: { type: "string", example: "newUser123" },
              password: { type: "string", format: "password", example: "password123!" },
              prefer_food: { type: "array", items: { type: "integer" }, description: "선호 음식 ID 목록", example: [1, 5, 10] }
            }
          },
          UserRegistrationResponseData: {
            type: "object",
            properties: {
              userId: { type: "integer", example: 1 },
              message: { type: "string", example: "회원가입이 완료되었습니다." }
            }
          },
          StoreCreationRequest: {
            type: "object",
            properties: {
              name: { type: "string", example: "맛있는 분식집" },
              location: { type: "string", example: "서울시 마포구 연남동" },
              area_index: { type: "integer", example: 3 }
            }
          },
          StoreCreationResponseData: {
            type: "object",
            properties: {
              storeId: { type: "integer", example: 101 },
              message: { type: "string", example: "가게가 성공적으로 추가되었습니다." }
            }
          },
          ReviewCreationRequest: {
            type: "object",
            properties: {
              content: { type: "string", example: "음식이 정말 맛있어요! 분위기도 좋습니다." },
              star: { type: "number", format: "float", example: 4.5, description: "별점 (0~5)" }
            }
          },
          ReviewCreationResponseData: {
            type: "object",
            properties: {
              reviewId: { type: "integer", example: 55 },
              message: { type: "string", example: "리뷰가 성공적으로 등록되었습니다." }
            }
          },
          ReviewItem: {
            type: "object",
            properties: {
              reviewId: { type: "integer", example: 1 },
              storeName: { type: "string", example: "가게 이름" },
              content: { type: "string", example: "리뷰 내용" },
              star: { type: "number", example: 5 },
              createdAt: { type: "string", format: "date-time", example: "2023-01-01T12:00:00Z" }
            }
          },
          MissionCreationRequest: {
            type: "object",
            properties: {
              contents: { type: "string", example: "이 가게에서 10,000원 이상 구매하기" },
              point: { type: "integer", example: 100, description: "미션 완료 시 지급될 포인트" }
            }
          },
          MissionCreationResponseData: {
            type: "object",
            properties: {
              missionId: { type: "integer", example: 201 },
              message: { type: "string", example: "미션이 성공적으로 추가되었습니다." }
            }
          },
          MissionStartResponseData: {
            type: "object",
            properties: {
              userMissionId: { type: "integer", example: 77 },
              status: { type: "interger", example: 0,description:"0-시작, 1-진행중, 2-완료" },
              message: { type: "string", example: "미션을 시작했습니다." }
            }
          },
          MissionItem: {
            type: "object",
            properties: {
              missionId: { type: "integer", example: 10 },
              storeName: { type: "string", example: "대상 가게" },
              contents: { type: "string", example: "미션 내용" },
              point: { type: "integer", example: 50 },
              status: { type: "interger", example: 1,description:"0-시작, 1-진행중, 2-완료" }
            }
          },
          MissionCompleteResponseData: {
            type: "object",
            properties: {
              userMissionId: { type: "integer", example: 77 },
              status: { type: "interger", example: 2,description:"0-시작, 1-진행중, 2-완료" },              
              message: { type: "string", example: "미션을 완료했습니다. 포인트가 지급되었습니다." }
            }
          }
        }
      },
      host: "localhost:3001",
    };

    const result = await swaggerAutogen(options)(outputFile, routes, doc);
    res.json(result ? result.data : null);
  });
};

export default swaggerSetup;