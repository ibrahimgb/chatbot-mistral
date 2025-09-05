import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.API_KEY;
console.log(apiKey)
if (!apiKey) {
  throw new Error('No Api key!');
}

const client = new Mistral({ apiKey: apiKey });

export async function sendChat(messages: []){
  try {
    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages,
    });

    const embeddingsResponse = await client.embeddings.create({
    model: 'mistral-embed',
    inputs: messages,
    });

    return await embeddingsResponse;

  } catch (error) {
    console.error('Error sending to Mistral:', error);
    throw error;
  }
}