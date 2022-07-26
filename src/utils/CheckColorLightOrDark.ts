let r;
let g;
let b;
let hsp;
let colorMatch;

export default function lightOrDark(color: any) {
  if (color.match(/^rgb/)) {
    colorMatch = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    [, r] = colorMatch;
    [, , g] = colorMatch;
    [, , , b] = colorMatch;
  } else {
    colorMatch = +`0x${color
      .slice(1)
      .replace(color.length < 5 && /./g, "$&$&")}`;

    r = colorMatch >> 16;
    g = (colorMatch >> 8) & 255;
    b = colorMatch & 255;
  }

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 197.5) {
    // 127.5
    return "light";
  }

  return "dark";
}
