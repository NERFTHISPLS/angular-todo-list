export function isEmailValid(email: string | undefined | null) {
  if (!email) return false;

  const re = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

  return re.test(email);
}
