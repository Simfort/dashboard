import { fetchLogin } from "./fetchLogin";

export const validator = (value: { password: string; name: string }) => {
  if (value.name && value.password) {
    fetchLogin(value);
    return true;
  } else {
    return false;
  }
};
