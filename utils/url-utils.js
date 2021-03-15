const urlUtils = {
    /**
    * Extracts the UUID from the uri
    *
    * Example:
    * extractUUID('this-is-a-seo-friendly-url-e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3')
    * returns 'e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3'
    *
    * @param {string} uri
    */
    extractUUID (uri) {
      return uri.substr(uri.length - 36)
    }
  }
  
  export default urlUtils
  