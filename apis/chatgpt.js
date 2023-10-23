const axios = require("axios");

const openAIKey = process.env.OPEN_AI_API_KEY || 'sk-invalid-key';

const systemMessage = "You are a speech therapist. You are having a face to face conversation with a patient. So respond as if you would be talking to a patient"

async function chatWithOpenAI(userInput) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Authorization': `Bearer ${openAIKey}`,
    'Content-Type': 'application/json',
  };
  
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: systemMessage
      },
      {
        role: "user",
        content: userInput
      },
    ],
    max_tokens: 150,
  };
  
  try {
      const response = await axios.post(endpoint, data, { headers });
      console.log('Response:', response.data);
      const responseText = response.data.choices[0].message.content.trim();
      return responseText;
  } catch (error) {
    console.error('It is an error: Error:', error);
    throw error;
  }
}

chatWithOpenAI("hello");

module.exports = {
  chatWithOpenAI,
}