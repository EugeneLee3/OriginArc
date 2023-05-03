const generateImageRoutes = (express, cors) => {
    const router = express.Router();
    const { generateImage } = require('../api/chatGPTCharacter');

    router.post('/image', cors(), async (req, res) => {
        try {
            const userPrompt = req.body.userPrompt;
            const characterName = req.body.characterName;

            const output = await generateImage(userPrompt, characterName);
            res.status(200).send(output);
        } catch (error) {
            res.status(400).send(error); // sends the error message back to the client
        }
    });


    return router;
};

module.exports = { generateImageRoutes };
