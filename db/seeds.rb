# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fruit.create(name: "apple", description: "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.", sci_name: "Malus Domestica")

Fruit.create(name: "apricot", description: "An apricot is a fruit, or the tree that bears the fruit, of several species in the genus Prunus (stone fruits).
Usually, an apricot tree is from the species P. armeniaca, but the species P. brigantina, P. mandshurica, P. mume, P. zhengheensis and P. sibirica are closely related, have similar fruit, and are also called apricots.", sci_name: "Prunus Armeniaca")

Review.create(user: User.first, fruit: Fruit.find(name: "apple"), rating: 2, body: "There was a worm in my apple, but I still ate it.")
