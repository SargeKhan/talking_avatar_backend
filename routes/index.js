var express = require('express');
var router = express.Router();
var textToSpeech = require('../helpers/tts');
const { chatWithOpenAI } = require('../apis/chatgpt');

/* GET home page. */
router.post('/talk', function(req, res, next) {

  textToSpeech(req.body.text, req.body.voice)
  .then(result => {
    res.json(result);    
  })
  .catch(err => {
    res.json({});
  });


});

router.post('/chat', async function (req, res, next) {
  try {
    console.log('req.body.user_speech')
    console.log(req.body.user_speech)
    const userSpeech = req.body.user_speech
    const voice = req.body.voice

    const responseText = await chatWithOpenAI(userSpeech);
    const result = await textToSpeech(responseText, voice);
    return res.json(result)
  } catch (error) {
    res.json({ message: 'Something went wrong'});
  };
});

module.exports = router;
