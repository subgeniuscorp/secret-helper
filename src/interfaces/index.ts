export interface IGenerateApiKey {
  length?: string;
}

export interface IGenerateSalt {
  length?: number;
}

export interface ICreateHash {
  valueToHash: string;
  saltRounds: number;
}