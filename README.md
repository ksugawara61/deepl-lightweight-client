# deepl-lightweight-client

deepl-lightweight-client is unofficial DeepL API Client.
It is useful for translating Language easily.

Official documentation: https://www.deepl.com/api.html

# Installation

```
$ yarn add deepl-lightweight-client
```

# Usage

```typescript
import { DeepLClient } from 'deepl-lightweight-client';

const client = new DeepLClient('your-api-key');

const main = async () => {
  const usage = await client.usage();
  /**
   * { character_count: 368, character_limit: 500000 }
   */
  console.log(usage);

  const translation = await client.translateText('hello', 'EN', 'JA');
  /**
   * { detected_source_language: 'EN', text: 'こんにちわ' }
   */
  console.log(translation);

  const translations = await client.translateTextList(
    ['hello', 'world'],
    'EN',
    'JA'
  );
  /**
   * [
   *   { detected_source_language: 'EN', text: 'こんにちわ' },
   *   { detected_source_language: 'EN', text: '世界' }
   * ]
   */
  console.log(translations);
};

main();
```
