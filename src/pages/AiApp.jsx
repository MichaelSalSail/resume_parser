import { useState } from 'react';
import FormSection  from './FormSection.jsx';
import AnswerSection  from './AnswerSection.jsx';
import { Configuration, OpenAIApi } from 'openai';


const AiApp = () => {
  const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
      let options = {
          model: 'text-davinci-003',
          temperature: 0,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ['/'],
      };

      let completeOptions = {
          ...options,
          prompt: newQuestion,
      };
      console.log(process.env.REACT_APP_OPENAI_API_KEY);
      const response = await openai.createCompletion(completeOptions);

      if (response.data.choices) {
        console.log('Response Recieved')
          setStoredValues([
              {
                  question: newQuestion,
                  answer: response.data.choices[0].text,
              },
              ...storedValues,
          ]);
          setNewQuestion('');
      }
  };

  return (
      <div>
          <div className="header-section">
              <h1>Inquiry System</h1>
                  <p>
                    This is an an automated question and answer system, designed to assist you
                      in finding relevant information related potential candidates.
                  </p>
          </div>

          <FormSection generateResponse={generateResponse} />

          <AnswerSection storedValues={storedValues} />
      </div>
  );
};

export default AiApp;