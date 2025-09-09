function criptografar(texto, chave){
    chave = chave % 26;
    let resultado= "";
    for (let char of texto){
          if (char.match(/[a-z]/)) {
      resultado += String.fromCharCode((char.charCodeAt(0) - 97 + chave + 26) % 26 + 97);
    } else if (char.match(/[A-Z]/)) {
      resultado += String.fromCharCode((char.charCodeAt(0) - 65 + chave + 26) % 26 + 65);
    } else {
      resultado += char;
    }
  }
  return resultado;
}
function descriptografar(texto, chave) {
  return criptografar(texto, -chave);
}

module.exports = { criptografar, descriptografar };
