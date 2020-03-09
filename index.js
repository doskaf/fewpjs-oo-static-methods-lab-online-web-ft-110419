class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
  
  static titleize(string) {
    let shouldBeLowercase = ["the", a, an, but, of, and]
    return string.split(" ").map(function(e) {
      if (e !== /[]/)
    }).join()
  }
}