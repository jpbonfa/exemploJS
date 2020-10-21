function gerarTela(div) {
	var newDiv = document.createElement('div');
	newDiv.innerHTML = 'CPF: ';
	newDiv.innerHTML += '<input type="text" name="cpf" onkeyup="masc_cpf(this)"> <br/>'
	newDiv.innerHTML += 'CNPJ: ';
	newDiv.innerHTML += '<input type="text" name="cnpj" onkeyup="masc_cnpj(this)"> <br/>'
	newDiv.innerHTML += 'RG: ';
	newDiv.innerHTML += '<input type="text" name="rg" onkeyup="masc_rg(this)"> <br/>'
	newDiv.innerHTML += 'IE: ';
	newDiv.innerHTML += '<input type="text" name="ie" onkeyup="masc_ie(this)"> <br/>'
	newDiv.innerHTML += 'NUMERO:';
	newDiv.innerHTML += '<input type="text" name="numero" onkeyup="masc_numero(this)"> <br/>'
	newDiv.innerHTML += 'CEP: ';
	newDiv.innerHTML += '<input type="text" name="cep" onkeyup="masc_cep(this)"> <br/>'
	newDiv.innerHTML += 'TELEFONE:';
	newDiv.innerHTML += '<input type="text" name="telefone" onkeyup="masc_telefone(this)"> <br/>'
	newDiv.innerHTML += 'CELULAR: ';
	newDiv.innerHTML += '<input type="text" name="celular" onkeyup="masc_celular(this)"> <br/>'
	newDiv.innerHTML += 'MOEDA: ';
	newDiv.innerHTML += '<input type="text" name="moeda" onkeyup="masc_moeda(this)"> <br/>'
	newDiv.innerHTML += 'DATA: ';
	newDiv.innerHTML += '<input type="text" name="data" onkeyup="masc_data(this)"> <br/>'
	document.getElementById(div).appendChild(newDiv);
	document.getElementById('input').style.display = 'none';
}
