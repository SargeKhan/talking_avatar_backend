const axios = require("axios");

const openAIKey = process.env.OPEN_AI_API_KEY || 'sk-invalid-key';

const systemMessage = "Context: You are having a face to face conversation with a patient. So respond as if you would be talking to a person, keeping your answers brief."

const messages = [{
  role: "system",
  content: systemMessage
}];

async function chatWithOpenAI(userInput) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Authorization': `Bearer ${openAIKey}`,
    'Content-Type': 'application/json',
  };
  
  messages.push({
        role: "user",
        content: userInput
  });

  const data = {
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: 150,
  };
  
  try {
      const response = await axios.post(endpoint, data, { headers });
      console.log('Response:', response.data);
      const responseText = response.data.choices[0].message.content.trim();
      messages.push({
        role: "system",
        content: responseText, 
      });
      return responseText;
  } catch (error) {
    console.error('It is an error: Error:', error);
    throw error;
  }
}

module.exports = {
  chatWithOpenAI,
}