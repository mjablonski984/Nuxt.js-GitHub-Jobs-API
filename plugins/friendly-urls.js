import Vue from 'vue'

Vue.prototype.$slugify = slugify

/**
 * Receives a string and a uuid and returns the slugyfied url.
 *
 * Example:
 * slugify('This is a seo friendly url', 'e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3')
 * returns: 'this-is-a-seo-friendly-url-e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3'
 *
 * @param {string} title
 * @param {string} uuid
 */
function slugify (title, uuid) {
  const fullUrl = title + '-' + uuid
  return slugifyStr(fullUrl)
}

/**
 * Receives a string and returns the slugyfied version of it.
 *
 * Example:
 * slugifyStr('This is a seo friendly url')
 * returns: 'this-is-a-seo-friendly-url'
 * @author Matthias Hagemann - https://matthiashagemann.com
 * @param {String} value
 */
function slugifyStr (value) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return value.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
