import { Mistral } from '@mistralai/mistralai';

export async function sendChat(messages: ChatMessage[]) {
  const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('No Api key!');
}

const client = new Mistral({ apiKey });

  try {
    const embeddingsResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages,
    });


    return await embeddingsResponse;
  } catch (error) {
    console.error('Error sending to Mistral:', error);
    throw error;
  }
}