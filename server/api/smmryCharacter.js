require('dotenv').config();

const API_KEY = process.env.SMMRY_API_KEY;
const API_URL = process.env.SMMRY_ENDPOINT;

async function summarizeText(text, length) {
    return ('HI!'+text+length)
//   const url = `${API_URL}/SM_API_KEY=${API_KEY}&SM_LENGTH=${length}&SM_WITH_BREAK&SM_IGNORE_QUOTATIONS&SM_URL=sm_api_input&SM_LENGTH=${length}&SM_WITH_BREAK&SM_API_INPUT=${encodeURIComponent(
//     text
//   )}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.sm_api_content;
}

module.exports = { summarizeText };