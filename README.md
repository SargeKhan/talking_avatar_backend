# Talking Avatar backend
The text to speech and blendShapes converter for https://github.com/bornfree/talking_avatar.
Uses the [Azure APIs](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme) to get stuff done.

This is a simple ExpressJS app.

# Set up the environment variables.
Copy/rename the .env.template file to .env file. And enter the keys provided for all the variables. Which include:

### Get keys from Azure
```
AZURE_KEY=<enter the value>
AZURE_REGION=<enter the value>
```
### OpenAI key
```
OPEN_AI_API_KEY=<enter the value>
```


### To run
1- Install docker on the system (search internet).
2- While in the project directory, build image

```
docker build -t avatar_backend .
```
3- Run docker
```
docker run -p 5001:5001 avatar_backend
```
