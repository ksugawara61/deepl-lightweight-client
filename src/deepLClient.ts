import axios, { AxiosInstance } from 'axios';
import {
  SplitSentenceType,
  FormalityType,
  Language,
  Translation,
  Usage,
} from './deepLType';

class DeepLClient {
  instance: AxiosInstance;

  constructor(apiKey: string) {
    this.instance = axios.create({
      baseURL: 'https://api-free.deepl.com/v2',
      timeout: 10000,
      headers: { Authorization: `DeepL-Auth-Key ${apiKey}` },
    });
  }

  async usage(): Promise<Usage> {
    const res = await this.instance.post('/usage');
    return res.data as Promise<Usage>;
  }

  async translateText(
    text: string,
    src: Language,
    dst: Language,
    splitSentences: SplitSentenceType = SplitSentenceType.SPLIT,
    preserveFormatting = false,
    formality: FormalityType = 'default'
  ): Promise<Translation> {
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('source_lang', src);
    params.append('target_lang', dst);
    params.append('split_sentences', splitSentences);
    params.append('preserveFormatting', preserveFormatting ? '1' : '0');
    params.append('formality', formality);
    const res = await this.instance.post('/translate', params);
    return res.data['translations'][0];
  }

  async translateTextList(
    textList: Array<string>,
    src: Language,
    dst: Language,
    splitSentences: SplitSentenceType = SplitSentenceType.SPLIT,
    preserveFormatting = false,
    formality: FormalityType = 'default'
  ): Promise<Translation> {
    const params = new URLSearchParams();
    textList.forEach((text) => {
      params.append('text', text);
    });
    params.append('source_lang', src);
    params.append('target_lang', dst);
    params.append('split_sentences', splitSentences);
    params.append('preserveFormatting', preserveFormatting ? '1' : '0');
    params.append('formality', formality);
    const res = await this.instance.post('/translate', params);
    return res.data['translations'];
  }
}

export default DeepLClient;
