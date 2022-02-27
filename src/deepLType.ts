export type Language =
  | 'BG'
  | 'CS'
  | 'DA'
  | 'DE'
  | 'EL'
  | 'EN'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FR'
  | 'HU'
  | 'IT'
  | 'JA'
  | 'LT'
  | 'LV'
  | 'NL'
  | 'PL'
  | 'PT'
  | 'RO'
  | 'RU'
  | 'SK'
  | 'SL'
  | 'SV'
  | 'ZH';

export const SplitSentenceType = {
  NO_SPLIT: '0',
  SPLIT: '1',
  SPLIT_ONLY_PUNCTUATION: 'nonewlines',
} as const;
export type SplitSentenceType =
  typeof SplitSentenceType[keyof typeof SplitSentenceType];

export type FormalityType = 'default' | 'more' | 'less';

export type Usage = {
  character_count: number;
  character_limit: number;
};

export type Translation = {
  detected_source_language: Language;
  text: string;
};
