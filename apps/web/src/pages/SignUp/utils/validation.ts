export const validateName = (name: string): string => {
  if (/\s/.test(name)) return '띄어쓰기 없이 붙여 작성해주세요.';
  if (name.length > 10) return '최대 글자수를 초과했습니다.';
  return '';
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): string => {
  if (!confirmPassword) return '';
  if (password !== confirmPassword) return '비밀번호가 일치하지 않습니다.';
  return '';
};
