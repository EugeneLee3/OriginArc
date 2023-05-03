const generateNameRoutes = (express, cors) => {
    const router = express.Router();
    const { summarizeText } = require('../api/oneAICharacter');
    const { generateList } = require('../api/chatGPTCharacter');

    router.post('/generate', cors(), async (req, res) => {
        try {
            const text = req.body.userPrompt;
            const newPrompt = await summarizeText(text);
            const output = await generateList(newPrompt)
            res.status(200).send(output);
        } catch (error) {
            res.status(400).send(error); // sends the error message back to the client
        }
    });


    return router;
};

module.exports = { generateNameRoutes };
