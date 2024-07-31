import express from "express";
const router=express.Router()
import {getPackDetails,activatePack,allAvailablePacks} from "../controllers/package.js";
router.get("/availablePacks",allAvailablePacks)
router.get("/packageDetails/:packageName", getPackDetails)
router.get("/activatePack", activatePack)
export default router