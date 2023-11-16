let guerreiro = prompt('Digite o nome do seu Guerreiro')
let xp = parseInt(prompt('Digite o xp do Guerreiro entre 0 e 6000'))
let titulo = ''

if(xp <=1000){
    titulo = 'Ferro'
}else if(xp>=1001 || xp<= 2000){
    titulo = 'bronze'
}else if(xp>=2001 || xp<= 3000){
    titulo = 'prata'
}else if(xp>=3001 || xp<= 4000){
    titulo = 'ouro'
}else if(xp>=5001 || xp<= 6000){
    titulo = 'Platino'
}

console.log(`O guerreiro tem o nome de ${guerreiro} seu xp é ${xp}pts e ele é um guerreiro ${titulo}`)

