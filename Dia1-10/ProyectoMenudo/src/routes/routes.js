import { Router } from "express";
const router = Router();

router.get('/',(req,res)=>{
    res.render('home',{
        titulo : "Home Page"
    });
});

router.get('/projects',(req,res)=> {
    res.render('projects',{
        titulo : "To Do Project"
    })
});

export default router;