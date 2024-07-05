import useSWR from "swr";

export const fetchQuestions = () => {
  const fetchQuestionList = async () => {
    const QUESTIONS_END_POINT = `/api/questions/getallquestions`;
    const res = await fetch(QUESTIONS_END_POINT, { method: "GET" });
    const data = await res.json();
    return data.message;
  };

  const { data, isLoading, error } = useSWR("questionList", fetchQuestionList);

  return {
    data,
    isLoading,
    error,
  };
};
