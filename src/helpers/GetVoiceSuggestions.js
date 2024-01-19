import axios from 'axios'


//  AJAX to retrieve TR Workflows
//
export const getVoiceSuggestions = async (language, transcript, token) => {
  console.log('in getVoiceSuggestion')
  // console.log('language', language)
  // console.log('transcript', transcript)
  // console.log('token', token)


    var data = JSON.stringify({ 
        // language: encodeURIComponent(language),
        // transcript: encodeURIComponent(JSON.stringify(transcript)),
        // Token: encodeURIComponent(token)

        language: language,
        transcript: transcript,
        Token: token       
        });

    console.log('data', data)
  
    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_SERVERLESS_DOMAIN}/realtime-voice-suggestions/test`,
        // url: `${process.env.REACT_APP_SERVERLESS_DOMAIN}/realtime-voice-suggestions/ai-suggestion`,
        headers: { 
          'Content-Type': 'application/json', 
        },
        data : data
      };
    return await axios(config)
      .then(function (response) {
        // call to twilio function == success
        console.log(response.data)
        return response.data
  
      })
      .catch(function (error) {
        console.log(error);
      });
  }