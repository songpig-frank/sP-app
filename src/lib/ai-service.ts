import OpenAI from 'openai';

export class AIService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async generateLyrics(prompt: string, style: string): Promise<{ lyrics: string; rawOutput: any }> {
    const completion = await this.openai.chat.completions.create({
      messages: [{
        role: "user",
        content: `Generate ${style} song lyrics about: ${prompt}`
      }],
      model: "gpt-4",
    });

    return {
      lyrics: completion.choices[0].message.content || '',
      rawOutput: completion // Store for legal protection
    };
  }
} 