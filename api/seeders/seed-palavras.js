module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('palavras', [{
			id: 3,
			nome: 'burro',
			descricao: 'animal híbrido, estéril, produto do cruzamento do cavalo com a jumenta',
			categoria_id_categoria: 1,
			createdAt: new Date(),
			updatedAt: new Date()

		}, {
			id: 4,
			nome: 'cavalo',
			descricao: 'animal ultilizado pra corridas',
			categoria_id_categoria: 1,
			createdAt: new Date(),
			updatedAt: new Date()

		}, {
			id: 5,
			nome: 'uva',
			descricao: 'fruta roxa',
			categoria_id_categoria: 1,
			createdAt: new Date(),
			updatedAt: new Date()

		},
		{
			id: 6,
			nome: 'fusca',
			descricao: 'fruta roxa',
			categoria_id_categoria: 1,
			createdAt: new Date(),
			updatedAt: new Date()

		}], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('palavras', null, {})
	}
}