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
<<<<<<< HEAD

Fruit.create(name: "banana", description: "A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called \"plantains\", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana.", sci_name: "Musa Acuminata")

Review.create(user: User.first, fruit: Fruit.first, rating: 2, body: "There was a worm in my apple, but I still ate it.")
Review.create(user: User.first, fruit: Fruit.first, rating: 2, body: "There was a worm in my apple, but I still ate it.")
=======
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
