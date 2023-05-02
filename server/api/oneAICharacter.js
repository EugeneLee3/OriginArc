require('dotenv').config();
const axios = require("axios");

const summarizeText = async (text) => {
  const apiKey = process.env.ONEAI_API_KEY;

  const config = {
    method: "POST",
    url: process.env.ONEAI_ENDPOINT,
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    data: {
      input: text,
      input_type: "article",
      output_type: "json",
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: "summarize"
        }
      ],
    },
  };

  try {
    const response = await axios(config);
    const summarizedText = JSON.stringify(response.data.output[0].contents[0].utterance);
    return summarizedText;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { summarizeText };
