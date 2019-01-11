const unescapeHtml = html => {
  return html
    .replace(/&amp;/g, `&`)
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&#039;/g, `'`)
}
export default unescapeHtml
