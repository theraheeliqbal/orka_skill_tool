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
  questionsList: string[];
  isLoading: boolean;
}

export interface UserFormDataProps {
  username: string;
  location: string;
  email: string;
  level: number | string | null;
}

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}
