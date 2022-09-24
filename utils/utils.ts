import { currencies } from "@/constants";
import defaultSettings from "@/config/defaultSettings";
import { KeyPrimaryColor, Locale } from "@/interfaces";

export function getPrimaryColorByKey(key: KeyPrimaryColor): string {
  const { primaryColor } = defaultSettings;
  const className = {
    text: `text-${primaryColor}`,
    background: `background-${primaryColor}`,
    border: `border-${primaryColor}`,
  };
  return className[key];
}

export function stripHTML(str: string): string {
  return str
    .replace(/<[^>]+>/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

export function removeUnicode(str: string): string {
  return stripHTML(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d");
}

export function toSlug(str: string): string {
  return removeUnicode(str)
    .toLowerCase()
    .replace(/([^0-9a-z-\s])/g, "-")
    .replace(/(\s+)/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const truncateWords = (str: string, number: number): string => {
  const arrayWords = stripHTML(str).trim().split(" ");
  return arrayWords.splice(0, number).join(" ") + "...";
};

export function formatMoney(number: number, strLocale: Locale): string {
  const { locale, currency } = currencies[strLocale];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(number);
}
