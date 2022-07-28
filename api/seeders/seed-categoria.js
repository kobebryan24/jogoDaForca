module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('categoria', [{
				id: 1,
				nome: 'animal',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				nome: 'fruta',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				nome: 'carro',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 4,
				nome: 'personagem',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 5,
				nome: 'bebida',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('categoria', null, {})
	}
}