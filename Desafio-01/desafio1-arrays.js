let pessoas = [
	{nome: "Marcus", idade: 21},
	{nome: "Renato", idade: 22},
	{nome: "Antonio", idade: 22},
	{nome: "Yuri", idade: 20},
	{nome: "Yvolanda", idade: 500},
	{nome: "Bianca", idade: 19},
	{nome: "Bernardo",idade:10},
	{nome: "Matheus", idade:26},
	{nome:"João", idade:19 },
	{nome:"Jonas",idade:13},
	{nome:"Gabriel", idade:20},
	{nome:"Gabriela",idade: 24},
	{nome:"Isabelle", idade: 19},
	{nome:"Isaac", idade: 22},
	{nome: "Jefferson", idade: 54},
	{nome:"Ronaldo", idade: 29},
	{nome:"Jonathan", idade: 15}
]

function Myname(){
	var soma = 0
	let peopleFilter = pessoas.filter(pessoas => {
		if(pessoas.nome[0] == "J"){
			soma += pessoas.idade
			return true
		}
		else{
			return false
		}
	})
	let maping = peopleFilter.map(peopleFilter => (peopleFilter.nome))
	let media = soma / peopleFilter.length
	console.log(maping)
	console.log(`Média das idades: ${media.toFixed(0)}`)
}
Myname()


