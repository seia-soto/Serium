module.exports = (application, cache, data) => {
  const checklist =
    (!application) ||
    (!cache) ||
    (!data)
  if (checklist) throw new Error('Error: essential variables are not defined (application/initialize/cache/index.js, line 6)')
}
