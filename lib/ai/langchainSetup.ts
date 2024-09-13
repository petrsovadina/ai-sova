// lib/ai/langchainSetup.ts

// Import necessary modules from LangChain
import { LangChain, CzechNLP } from 'langchain';

// Initialize the LangChain framework
const langChain = new LangChain();

// Configure LangChain for Czech NLP tasks
const czechNLP = new CzechNLP({
  language: 'cs', // Czech language code
  models: {
    tokenizer: 'czech-tokenizer',
    parser: 'czech-parser',
    sentiment: 'czech-sentiment',
  },
});

// Add Czech NLP configuration to LangChain
langChain.use(czechNLP);

// Export the configured LangChain instance
export default langChain;

