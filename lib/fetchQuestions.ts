import useSWR from "swr";

export const fetcQuestions = (userID: string) => {
  const fetchQuestionList = async () => {
    const QUESTIONS_END_POINT = `/api/users/getuser/${userID}`;
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
