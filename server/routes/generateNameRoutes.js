const generateNameRoutes = (express, cors) => {
    const router = express.Router();
    const { summarizeText } = require('../api/oneAICharacter');
    //const { }

    // All Requests for the register page
    router.post('/generate', cors(), async (req, res) => {
        try {
            const text = req.body.userPrompt;
            const newPrompt = await summarizeText(text);
            res.status(200).send(newPrompt)
        } catch (error) {
            res.status(400).send(error); // sends the error message back to the client
        }
    });


    return router;
};

module.exports = { generateNameRoutes };
