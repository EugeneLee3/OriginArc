const chatGPTCharacter = (express, cors) => {
    app.get('/generate-character-name', async (req, res) => {
        const prompt = 'Generate a character name';
        const model = 'model-id'; // replace with your model ID
        const apiKey = 'your-api-key'; // replace with your API key
      
        try {
          const response = await axios.post('https://api.openai.com/v1/engine/<your-engine-id>/completions', {
            prompt,
            max_tokens: 50,
            n: 1,
            model,
            apiKey
          });
          
          const characterName = response.data.choices[0].text.trim();
          res.json({ characterName });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while generating a character name' });
        }
      });
}

module.exports = {chatGPTCharacter};