"use server";

export async function generateToken(
  length = 32,
  includeTimestamp = true,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let token = "";

  if (includeTimestamp) {
    token += Date.now().toString(36) + "-";
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }

  return token;
}
