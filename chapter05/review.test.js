import { review_model } from "./src/model/review.model.js"
import { store_model } from "./src/model/store.model.js"

async function testInsert() {
    const data ={
        "content":"음 너무 맛있고 다음에도 또 올거 같아요",
        "star":5,
        "store_index":1,
        "user_index":1
    }

    try{
        const res = await review_model.insertReview(data)
        console.log(res)
    }
    catch(err){console.log(err)}
}

// testInsert()

async function testSelectStoreindex() {
    const data ={
        "content":"음 너무 맛있고 다음에도 또 올거 같아요",
        "star":5,
        "store_index":1,
        "user_index":1
    }

    const store_index = 1

    try{
        const res = await review_model.selectStoreIndex(store_index)
        console.log(res)
    }
    catch(err){console.log(err)}
}

testSelectStoreindex()

async function testInsertStore() {
    const data ={
        name : "미연팔복반점",
        location : "인천광역시 미추홀구 용현동 번지 1층 184-1",
        area_index : 2
    }

    try{
        const res = await store_model.insertStore(data)
        console.log(res)
    }
    catch(err){console.log(err)}
}

testInsertStore()