const replaceVar = (obj, html) => {
  html = html.replaceAll('{nombre}', obj.name);
  html = html.replaceAll('{fechaNacimiento}', obj.birthdate);
  html = html.replaceAll('{imgurl}', obj.profilePic);
  return html;
}

module.exports = {
  replaceVar
}