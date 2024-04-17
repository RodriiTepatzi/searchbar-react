const products = [
    {
        id: 1,
        name: 'Pizza',
        description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Empanada',
        description: 'An empanada is a type of baked or fried turnover consisting of pastry and filling, common in Southern European, Latin American, Indonesian, and Filipino cultures.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Pasta',
        description: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Hamburger',
        description: 'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Hot Dog',
        description: 'A hot dog is a cooked sausage, traditionally grilled or steamed and served in a sliced bun as a sandwich.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: 'Sushi',
        description: 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        name: 'Taco',
        description: 'A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        name: 'Salad',
        description: 'A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit.',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        name: 'Ice Cream',
        description: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 10,
        name: 'Cake',
        description: 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1601126217456-1744cdad7211?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default products;