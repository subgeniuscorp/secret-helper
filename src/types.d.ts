export interface IGenerateApiKey {
  length?: number;
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