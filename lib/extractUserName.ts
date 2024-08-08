export const extractUserName = (email: string) => {
  if (typeof email !== "string" || !email.includes("@"))
    throw new Error("Invalid eemail address");

  const [userName] = email.split("@");

  return userName;
};
