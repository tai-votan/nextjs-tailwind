import { stripHTML, removeUnicode, toSlug, truncateWords, formatMoney } from "./utils";

describe("Button", () => {
  const html =
    '<div class="font-medium text-base -letter-spacing w-auto truncate" style="max-width: 80%;">Nguyễn Thị Hoài Thuyên Thuyên</div>';
  const text = "Nguyễn Thị Hoài Thuyên Thuyên";

  it("stripHTML with html", () => {
    const removeHTML = stripHTML(html);
    expect(removeHTML).not.toMatch(/<[^>]+>/g);
  });

  it("stripHTML with text", () => {
    const removeHTML = stripHTML(text);
    expect(removeHTML).not.toMatch(/<[^>]+>/g);
  });

  it("removeUnicode with html", () => {
    const result = removeUnicode(html);
    expect(result).toMatch("Nguyen Thi Hoai Thuyen Thuyen");
  });

  it("removeUnicode with text", () => {
    const result = removeUnicode(text);
    expect(result).toMatch("Nguyen Thi Hoai Thuyen Thuyen");
  });

  it("toSlug with html", () => {
    const result = toSlug(html);
    expect(result).toMatch("nguyen-thi-hoai-thuyen-thuyen");
  });

  it("toSlug with text", () => {
    const result = toSlug(text);
    expect(result).toMatch("nguyen-thi-hoai-thuyen-thuyen");
  });

  it("truncateWords with html", () => {
    const result = truncateWords(html, 3);
    expect(result).toMatch("Nguyễn Thị Hoài...");
  });

  it("truncateWords with text", () => {
    const result = truncateWords(text, 3);
    expect(result).toMatch("Nguyễn Thị Hoài...");
  });

  it("formatMoney with html", () => {
    const result = formatMoney(10000, "vi");
    expect(result).toMatch("10.000 ₫");
  });
});
