const hoje = new Date()
const dataNasc = new Date('01/04/1994')
let idade
if (hoje.getMonth() > dataNasc.getMonth()) {
    idade = hoje.getFullYear() - dataNasc.getFullYear()
} else {
    idade = hoje.getFullYear() - dataNasc.getFullYear() - 1
}
document.getElementById('anos').innerHTML = idade + ' Anos'


