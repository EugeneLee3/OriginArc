const generateNameRoutes = (express, cors) => {
    // Importing all dependencies
    const router = express.Router();
    const { summarizeText } = require('../api/smmryCharacter');
    //const { }

    // All Requests for the register page
    router.post('/generate', cors(), async (req, res) => {
        res.send("HI");
        // try {
        //     const newPrompt = summarizeText(userPrompt, 100);
        //     res.status(200).send({ newPrompt })
        //     } catch (error) {
        //     res.status(400).send(error); // sends the error message back to the client
        //     }
    });


    return router;
};

module.exports = { generateNameRoutes };