export interface UserFormProps {
  level: number | string | null;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  success: Boolean;
  surveyAnswers: {}[];
}

export interface QuestionnaireProps {
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  level: number | null;
  questionsList: string[];
  isLoading: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setSurveyAnswers: React.Dispatch<React.SetStateAction<{}>>;
}

export interface UserFormDataProps {
  email: string;
  level: number | string | null;
  surveyAnswers: {}[];
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

export type CountryType = {
  value: string;
  label: string;
};
