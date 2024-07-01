import useSWR from "swr";

type userID = string | string[] | undefined;

export const fetchUserWithID = (userID: userID) => {
  const fetchUser = async () => {
    const USER_END_POINT = `/api/users/getuser/${userID}`;
    const res = await fetch(USER_END_POINT, { method: "GET" });
    const data = await res.json();
    return data.message;
  };

  const { data, isLoading, error } = useSWR("user", fetchUser);

  return {
    data,
    isLoading,
    error,
  };
};
