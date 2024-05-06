import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.connect()

app.post("/submit", async (req, res) => {
    const {problemId, userId, code, language} = req.body;

    //push this to a database prisma.submission.create()
    try {
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}))

        res.json({
            message: "Submission received!"
        })
    } catch (error) {
        res.json({
            message: "Submission Failed!"
        })
    }
    
})

app.listen(3000)