type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/pizza-menu/sicilian.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Bacon Deluxe",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/pizza-menu/crunchyrole.png",
        price: 29.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/pizza-menu/mushroom.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Spicy Arrabbiata",
        desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
        img: "/pizza-menu/pepperoni.png",
        price: 26.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: " Fiesta",
        desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
        img: "/pizza-menu/tomato-mix.png",
        price: 29.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: "vegies Magic",
        desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
        img: "/pizza-menu/vegies-pizza.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 7,
        title: "Mushroom delight",
        desc: "A mushroom lover's delight, featuring linguine smothered in a healthy mushroom sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
        img: "/pizza-menu/mushroom.png",
        price: 28.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 8,
        title: "zesty Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of parsley.",
        img: "/pizza-menu/parsley.png",
        price: 32.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 9,
        title: "Seafood",
        desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy Seafood sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
        img: "/pizza-menu/seafood.png",
        price: 29.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
];




export const pizzas: Products = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p3.png",
        price: 26.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Pesto Primavera",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p10.png",
        price: 28.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Veggie Supreme",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p11.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: "Four Cheese Fantasy",
        desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
        img: "/temporary/p12.png",
        price: 22.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
];

export const singleProduct: Product = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
        {
            title: "Small",
            additionalPrice: 0,
        },
        {
            title: "Medium",
            additionalPrice: 4,
        },
        {
            title: "Large",
            additionalPrice: 6,
        },
    ],
};


type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export const menu: Menu = [
    {
        id: 1,
        slug: "pastas",
        title: "Italian Pastas",
        desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
        img: "/menu/spag.png",
        color: "white",
    },
    {
        id: 2,
        slug: "burgers",
        title: "Juicy Burgers",
        desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
        img: "/offer/burger.png",
        color: "black",
    },
    {
        id: 3,
        slug: "pizzas",
        title: "Cheesy Pizzas",
        desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
        img: "/menu/pizza-slice.png",
        color: "white",
    },
];