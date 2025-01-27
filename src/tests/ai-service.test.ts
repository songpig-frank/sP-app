import { OpenAI } from 'openai';
import { AIService } from '../lib/ai-service';

process.env.OPENAI_API_KEY = 'sk-test-key';
process.env.DEEPSEEK_API_KEY = 'sk-test-deepseek-key';

jest.mock('openai', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{
            message: { content: "Test lyrics" }
          }]
        })
      }
    }
  }))
}));

test('generates lyrics', async () => {
  const { AIService } = require('../lib/ai-service');
  const ai = new AIService();
  const result = await ai.generateLyrics('love', 'pop');
  expect(result.lyrics).toBe("Test lyrics");
}); 