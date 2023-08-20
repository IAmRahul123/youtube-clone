import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/User.js';
import { verifyToken } from '../verifyToken.js';

const router=express.Router();


//update user

router.put("/:id",verifyToken, update)

//delete user

router.delete("/:id",verifyToken,deleteUser)



//get user

router.get("/find/:id",getUser)




//subscribe a user

router.put("/sub/:id",verifyToken,subscribe)   // here id is channel id


//unsubscribe a user

router.put("/unsub/:id",verifyToken,unsubscribe)  // here id is channel id



//like a video

router.put("/like/:videoId",verifyToken,like)


//dislike a video

router.put("/dislike/:videoId",verifyToken,dislike)

export default router;