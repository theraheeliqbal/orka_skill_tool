export interface UserFormProps {
  level: number | string | null;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  success: Boolean;
}

export interface QuestionnaireProps {
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  level: number | null;
}

export type Question = {
  question: string;
  answer: boolean;
};

export interface UserFormDataProps {
  username: string;
  location: string;
  email: string;
  level: number | string | null;
}
