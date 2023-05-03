require('dotenv').config()
const axios = require('axios');
const { Configuration , OpenAIApi } = require('openai');


const generateList = async (text) => {
  const prompt = `Generate a list from 1. to 10. of original and new character names with the following description: ${text}`;
  const model = 'text-davinci-002';
  const apiKey = process.env.CHATGPT_API_KEY;

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt,
      max_tokens: 300,
      n: 1,
      model,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });   

    const characterNames = response.data.choices.map(choice => choice.text.trim()); // get an array of character names
    const outputList = characterNames.map(name => name.split('\n')); // split each name into an array of lines, and then flatten the array
    
    return outputList;
    

  } catch (error) {
    console.error(error);
    return { error: 'An error occurred while generating character names' };
  }
}


const generateImage = async (text, name) => {
  const prompt = `Generate me a realistic image of a character named ${name} and the description: ${text}.`;
  const apiKey = process.env.CHATGPT_API_KEY;

  const config = new Configuration({
    apiKey: apiKey
  });

  const openai = new OpenAIApi(config);

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 3,
      size: "256x256",
    })
    
    const imageURL = (response.data.data).map((item) => item.url);
    return imageURL;
   

  } catch (error) {
    return { error: 'An error occurred while generating the image' };
  }
}


module.exports = { generateList, generateImage };
