const recipes = {
    breakfast: [
        {
            name: "Scrambled Eggs",
            ingredients: ["eggs", "milk", "butter", "salt"],
            preparation: [
                "Beat the eggs with a pinch of salt and milk until well combined.",
                "Melt butter in a non-stick pan over medium heat.",
                "Pour in the egg mixture and stir gently with a spatula until softly set."
            ]
        },
        {
            name: "Pancakes",
            ingredients: ["flour", "eggs", "milk", "sugar", "baking powder"],
            preparation: [
                "In a bowl, mix flour, sugar, and baking powder.",
                "In another bowl, whisk together the eggs and milk.",
                "Combine wet and dry ingredients and stir until just combined.",
                "Heat a non-stick pan, pour in batter, and flip when bubbles form."
            ]
        },
        {
            name: "Masala Dosa",
            ingredients: ["rice", "urad dal", "potato", "onion", "spices"],
            preparation: [
                "Soak rice and urad dal overnight, then grind to a batter.",
                "Ferment the batter for 8 hours.",
                "Cook boiled potatoes with spices and onion to make filling.",
                "Spread batter on a hot griddle, fill with potato mixture, and fold."
            ]
        },
        {
            name: "Upma",
            ingredients: ["semolina", "onion", "mustard seeds", "vegetables", "water"],
            preparation: [
                "Heat oil in a pan and add mustard seeds until they splutter.",
                "Sauté chopped onions and vegetables until soft.",
                "Add semolina and toast for a few minutes.",
                "Pour in water and cook until the mixture thickens."
            ]
        },
        {
            name: "Idli",
            ingredients: ["rice", "urad dal", "salt"],
            preparation: [
                "Soak rice and urad dal separately for 6 hours.",
                "Grind to a smooth batter and ferment overnight.",
                "Pour batter into idli molds and steam for 10-15 minutes."
            ]
        }
    ],
    salads: [
        {
            name: "Caesar Salad",
            ingredients: ["lettuce", "croutons", "parmesan", "Caesar dressing"],
            preparation: [
                "Wash and chop the lettuce into bite-sized pieces.",
                "In a large bowl, combine the chopped lettuce with croutons and grated parmesan.",
                "Drizzle Caesar dressing over the salad and toss well before serving."
            ]
        },
        {
            name: "Greek Salad",
            ingredients: ["tomato", "cucumber", "feta", "olive", "onion"],
            preparation: [
                "Chop the tomatoes, cucumber, and onion into bite-sized pieces.",
                "In a bowl, combine the chopped vegetables with olives and cubed feta.",
                "Drizzle with olive oil, season with salt, and serve chilled."
            ]
        },
        {
            name: "Chickpea Salad",
            ingredients: ["chickpeas", "cucumber", "tomato", "onion", "lemon juice"],
            preparation: [
                "Rinse and drain canned chickpeas.",
                "Chop cucumber, tomato, and onion.",
                "Mix all ingredients in a bowl and drizzle with lemon juice."
            ]
        },
        {
            name: "Pasta Salad",
            ingredients: ["pasta", "bell pepper", "olive oil", "basil", "parmesan"],
            preparation: [
                "Cook pasta according to package instructions and let cool.",
                "Chop bell peppers and mix with pasta.",
                "Drizzle with olive oil, add basil and grated parmesan, then toss."
            ]
        },
        {
            name: "Fruit Salad",
            ingredients: ["apple", "banana", "orange", "grapes"],
            preparation: [
                "Chop all fruits into bite-sized pieces.",
                "Mix in a bowl and serve fresh."
            ]
        }
    ],
    appetizers: [
        {
            name: "Bruschetta",
            ingredients: ["bread", "tomato", "garlic", "basil", "olive oil"],
            preparation: [
                "Toast slices of bread until golden brown.",
                "In a bowl, mix chopped tomatoes, minced garlic, and chopped basil with olive oil.",
                "Top each slice of toasted bread with the tomato mixture and serve immediately."
            ]
        },
        {
            name: "Stuffed Mushrooms",
            ingredients: ["mushrooms", "cheese", "breadcrumbs", "garlic"],
            preparation: [
                "Preheat the oven to 375°F (190°C).",
                "Remove the stems from the mushrooms and finely chop them.",
                "In a bowl, mix chopped stems with cheese, breadcrumbs, and minced garlic.",
                "Stuff the mushroom caps with the mixture and bake for 20 minutes until golden."
            ]
        },
        {
            name: "Paneer Tikka",
            ingredients: ["paneer", "yogurt", "spices", "bell peppers", "onion"],
            preparation: [
                "Marinate paneer and chopped vegetables in yogurt and spices for 30 minutes.",
                "Skewer the paneer and vegetables, and grill or bake until cooked through.",
                "Serve with mint chutney."
            ]
        },
        {
            name: "Aloo Tikki",
            ingredients: ["potato", "peas", "spices", "bread crumbs"],
            preparation: [
                "Boil and mash potatoes, then mix with cooked peas and spices.",
                "Form into patties and coat with breadcrumbs.",
                "Fry in hot oil until golden brown and crispy."
            ]
        },
        {
            name: "Samosa",
            ingredients: ["potato", "peas", "flour", "spices"],
            preparation: [
                "Make a dough with flour, water, and a pinch of salt; rest for 30 minutes.",
                "Boil and mash potatoes, mix with peas and spices.",
                "Roll out dough, fill with potato mixture, and shape into triangles.",
                "Deep fry until golden brown."
            ]
        }
    ],
    soups: [
        {
            name: "Tomato Soup",
            ingredients: ["tomato", "onion", "garlic", "broth", "cream"],
            preparation: [
                "Chop the onion and garlic, then sauté in a pot until softened.",
                "Add chopped tomatoes and broth, then simmer for 20 minutes.",
                "Blend the mixture until smooth, then stir in cream before serving."
            ]
        },
        {
            name: "Chicken Soup",
            ingredients: ["chicken", "carrot", "celery", "onion", "broth"],
            preparation: [
                "Sauté diced onions, carrots, and celery in a large pot.",
                "Add the chicken and broth, then bring to a boil.",
                "Simmer until chicken is cooked through, shred the chicken, and serve hot."
            ]
        },
        {
            name: "Lentil Soup",
            ingredients: ["lentils", "carrot", "onion", "celery", "spices"],
            preparation: [
                "Rinse lentils and add to a pot with chopped vegetables and spices.",
                "Cover with water and bring to a boil, then reduce heat and simmer until lentils are tender.",
                "Blend if desired and serve warm."
            ]
        },
        {
            name: "Mulligatawny Soup",
            ingredients: ["chicken", "lentils", "curry powder", "coconut milk"],
            preparation: [
                "Sauté onions, carrots, and celery in a pot.",
                "Add chicken and lentils, and cover with broth.",
                "Stir in curry powder and coconut milk, and simmer until chicken is cooked."
            ]
        },
        {
            name: "Pumpkin Soup",
            ingredients: ["pumpkin", "onion", "broth", "cream"],
            preparation: [
                "Sauté chopped onion until translucent.",
                "Add cubed pumpkin and broth, and simmer until pumpkin is tender.",
                "Blend until smooth and stir in cream before serving."
            ]
        }
    ],
    desserts: [
        {
            name: "Chocolate Cake",
            ingredients: ["flour", "sugar", "cocoa", "butter", "eggs"],
            preparation: [
                "Preheat the oven to 350°F (175°C) and grease a cake pan.",
                "Mix flour, sugar, cocoa powder, and baking powder in a bowl.",
                "Add melted butter and eggs, mix until smooth, and pour into the prepared pan.",
                "Bake for 30-35 minutes or until a toothpick comes out clean."
            ]
        },
        {
            name: "Apple Pie",
            ingredients: ["apple", "flour", "butter", "sugar", "cinnamon"],
            preparation: [
                "Preheat the oven to 425°F (220°C).",
                "Make the pie crust by mixing flour and butter, then roll it out.",
                "Slice apples and mix with sugar and cinnamon, then fill the crust.",
                "Cover with another crust, cut slits, and bake for 45 minutes until golden."
            ]
        },
        {
            name: "Gulab Jamun",
            ingredients: ["milk powder", "flour", "sugar", "rose water", "oil"],
            preparation: [
                "Mix milk powder, flour, and a little water to form a dough.",
                "Shape into small balls and fry in oil until golden.",
                "Soak in sugar syrup flavored with rose water for a few hours."
            ]
        },
        {
            name: "Pudding",
            ingredients: ["milk", "sugar", "cornstarch", "vanilla"],
            preparation: [
                "In a saucepan, combine milk, sugar, and cornstarch.",
                "Cook over medium heat, stirring until thickened.",
                "Remove from heat and add vanilla; pour into serving dishes to cool."
            ]
        },
        {
            name: "Ice Cream",
            ingredients: ["cream", "sugar", "vanilla", "milk"],
            preparation: [
                "Mix cream, sugar, and vanilla in a bowl.",
                "Pour the mixture into an ice cream maker and churn until thick.",
                "Transfer to a container and freeze until solid."
            ]
        }
    ],
    beverages: [
        {
            name: "Mango Lassi",
            ingredients: ["mango", "yogurt", "sugar", "milk"],
            preparation: [
                "Blend mango pulp with yogurt, sugar, and a splash of milk until smooth.",
                "Serve chilled, garnished with a sprinkle of cardamom."
            ]
        },
        {
            name: "Masala Chai",
            ingredients: ["tea leaves", "milk", "spices", "sugar"],
            preparation: [
                "Boil water with spices, add tea leaves and simmer.",
                "Strain and add milk and sugar to taste before serving."
            ]
        },
        {
            name: "Lemonade",
            ingredients: ["lemon", "water", "sugar", "mint"],
            preparation: [
                "Squeeze lemon juice into a pitcher, add sugar, and mix.",
                "Dilute with water and stir well, garnish with mint leaves before serving."
            ]
        },
        {
            name: "Fruit Smoothie",
            ingredients: ["banana", "berries", "yogurt", "honey"],
            preparation: [
                "Blend banana, mixed berries, yogurt, and honey until smooth.",
                "Serve immediately in chilled glasses."
            ]
        },
        {
            name: "Iced Coffee",
            ingredients: ["coffee", "milk", "sugar", "ice"],
            preparation: [
                "Brew coffee and let it cool.",
                "Fill a glass with ice, pour in the coffee, add milk and sugar to taste."
            ]
        }
    ],
    mainDishes: [
        {
            name: "Biryani",
            ingredients: ["rice", "chicken", "spices", "yogurt", "onion"],
            preparation: [
                "Marinate chicken with yogurt and spices for a few hours.",
                "Fry onions until golden, add chicken, and cook until done.",
                "Layer with partially cooked rice and simmer until fully cooked."
            ]
        },
        {
            name: "Paneer Butter Masala",
            ingredients: ["paneer", "tomato", "cream", "spices"],
            preparation: [
                "Blend tomatoes to make a smooth puree.",
                "Cook the puree with spices, add paneer, and finish with cream."
            ]
        },
        {
            name: "Palak Paneer",
            ingredients: ["spinach", "paneer", "onion", "spices"],
            preparation: [
                "Blanch spinach and blend to a paste.",
                "Sauté onions and spices, add spinach and paneer, and cook through."
            ]
        },
        {
            name: "Chole Bhature",
            ingredients: ["chickpeas", "flour", "spices"],
            preparation: [
                "Soak chickpeas overnight and cook until tender.",
                "Prepare dough for bhature, roll, and fry until puffed and golden.",
                "Serve chickpeas with bhature and onions."
            ]
        },
        {
            name: "Khichdi",
            ingredients: ["rice", "dal", "spices", "vegetables"],
            preparation: [
                "Combine rice and dal in a pot with chopped vegetables and spices.",
                "Add water, bring to a boil, and simmer until cooked and soft."
            ]
        }
    ],
    snacks: [
        {
            name: "Samosa",
            ingredients: ["potatoes", "peas", "spices", "flour"],
            preparation: [
                "Make a dough with flour, water, and salt; rest for 30 minutes.",
                "Prepare filling with boiled potatoes, peas, and spices.",
                "Shape the dough into triangles, fill with the mixture, and deep fry until golden."
            ]
        },
        {
            name: "Pakoras",
            ingredients: ["gram flour", "potatoes", "onions", "spices"],
            preparation: [
                "Mix gram flour with water and spices to make a batter.",
                "Dip sliced vegetables in the batter and deep fry until crispy."
            ]
        },
        {
            name: "Murukku",
            ingredients: ["rice flour", "dal flour", "spices"],
            preparation: [
                "Mix rice flour, dal flour, and spices with water to form a dough.",
                "Shape into spirals using a murukku press and deep fry until golden."
            ]
        },
        {
            name: "Bhel Puri",
            ingredients: ["puffed rice", "vegetables", "chutneys", "spices"],
            preparation: [
                "Mix puffed rice with chopped vegetables and chutneys.",
                "Serve immediately, garnished with sev and chopped coriander."
            ]
        },
        {
            name: "Paneer Tikka",
            ingredients: ["paneer", "yogurt", "spices"],
            preparation: [
                "Marinate paneer cubes in yogurt and spices for 30 minutes.",
                "Skewer and grill or bake until charred and serve with mint chutney."
            ]
        }
    ]
};
export default recipes;