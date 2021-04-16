export interface IGenerateApiKey {
  length?: string;
}

export interface IGenerateSalt {
  saltRounds?: number;
}

export interface ICreateHash {
  valueToHash: string;
  saltRounds?: number;
}

export interface ValidateHashClosure {
  hashValue: string;
  valueToCompare: string;
}

export interface IGenerateRandomString {
  length: number;
}