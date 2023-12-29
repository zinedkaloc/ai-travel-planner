  const express = require('express');
  const bodyParser = require('body-parser');
 
  const cors = require('cors');
const { default: OpenAI } = require('openai');
  const app = express();
  const port = 8000;
    // Set your OpenAI API key
    const OPENAI_API_KEY = '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';

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY // This is also the default, can be omitted
  });

  app.use(cors());
  // Middleware to parse JSON requests
  app.use(bodyParser.json());

  // Route to handle chat messages
  app.post('/chat', async (req, res) => {
    const prompt = req.body.prompt;
  

   
    
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Specify the GPT model/engine
    
        messages:  [
          {
            role: "user",
            content: `${prompt} Format your response using Markdown. Use headings, subheadings, bullet points, and bold to organize the information.`,
          }
        ],
      });
      
  
      res.json( response );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
  
 