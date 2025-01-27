import OpenAI from 'openai';

export class AIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '', // Use real key
    });
  }

  async generateLyrics(prompt: string, style: string) {
    const completion = await this.openai.chat.completions.create({
      messages: [{
        role: "user",
        content: `Generate ${style} song lyrics about: ${prompt}`
      }],
      model: "gpt-4",
    });

    return {
      lyrics: completion.choices[0].message.content || '',
      rawOutput: completion
    };
  }
} 