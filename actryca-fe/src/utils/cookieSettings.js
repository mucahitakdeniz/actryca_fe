import { cookies } from "next/headers";

export function setCookieToken(token) {
  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // 1 gün
  });
}

export function clearCookieToken() {
  cookies().set("token", "", {
    httpOnly: true,
    secure: true,
    maxAge: -1, // Cookie'yi silmek için maxAge'i negatif yapıyoruz
  });
}
