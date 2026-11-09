function normalizeLabel(label) {
  return label.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function stripMarkdownReferences(text) {
  const definitions = new Set();
  const definitionPattern =
    /^[ \t]{0,3}\[([^\]\n]+)\]:[ \t]*(?:\r?\n[ \t]+)?(?:<[^>\n]*>|[^ \t\n]+)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?(?:\r?\n[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*\r?$/gm;

  text = text.replace(definitionPattern, (_, label) => {
    definitions.add(normalizeLabel(label));
    return '';
  });

  text = text.replace(
    /(!?)\[([^\]\n]*)\](?:[ \t]*\r?\n?[ \t]*)\[([^\]\n]*)\]/g,
    (match, image, label, reference) => {
      if (!definitions.has(normalizeLabel(reference || label))) return match;
      return image ? '' : label;
    },
  );

  return text.replace(
    /(!?)\[([^\]\n]+)\](?![ \t]*(?:\(|\[))/g,
    (match, image, label) => {
      if (!definitions.has(normalizeLabel(label))) return match;
      return image ? '' : label;
    },
  );
}
