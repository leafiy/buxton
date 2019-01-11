/**
 *
 * slugify string
 slugify(str:'asf asdf asdf')
"asf-asdf-asdf"

slugify('asdf asdf',"@")
"asdf@asdf"
 *
 */

const slugify = (str, pattern = '-') => {
  return (
    str
      .toString()
      .toLowerCase()
      .replace(/[^\w\-]+/g, pattern) // Remove all non-word chars
      .replace(/\s+/g, pattern) // collapse whitespace and replace by -
      .replace(/-+/g, pattern) // collapse dashes
      .replace(/^-+/, '') // trim
      .replace(/-+$/, '') // trim
  )
}

export default slugify
