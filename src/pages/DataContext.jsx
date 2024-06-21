import React, { createContext, useEffect, useReducer } from 'react';
import product1 from '../assets/bread.jpg';
import product2 from '../assets/butter.jpg';
import product3 from '../assets/roasted.jpg';
import product4 from '../assets/peanut.jpg';
import product5 from '../assets/collection.jpg';
import Cookies from '../assets/cookies.jpg';
import Smoothie from '../assets/smoothie.jpg';
import Energyballs from '../assets/energy_balls.jpg';
import Noodles from '../assets/peanut_noodles.jpeg';
import Smoothies from '../assets/peanut_butter_smoothie.jpeg';
import Jelly from '../assets/pbj-s.jpeg';



import useWindowSize from '../components/useWindowSize';

const DataContext = createContext({});

const initialState = {

    products: [
        {
            id: 0,
            src: product1,
            title: {
                item: '1.5 Kg Peanut Butter',
                weight: '1.5Kg',
                price: 1200
            },
            details: [
                "Indulge in our largest jar yet – the 1.5 Kg Peanut Butter, crafted for those who crave an abundance of creamy, nutty goodness.",
                "Perfect for families or avid peanut butter lovers, this jumbo-sized jar ensures you never run out of your favorite spread.",
                "Whether you're spreading it generously on toast, blending it into smoothies, or using it as a versatile ingredient in cooking and baking, our 1.5 Kg Peanut Butter delivers unmatched taste and satisfaction.",
                "Made from the finest quality peanuts, it's a wholesome choice for your everyday snacking and meal needs."
            ]
        },
        {
            id: 1,
            src: product2,
            title: {
                item: '800 grams Peanut Butter',
                weight: '800g',
                price: 600
            },
            details: [
                "Experience the perfect balance of flavor and convenience with our 800g jar of smooth Peanut Butter.",
                "Ideal for regular peanut butter enthusiasts, this medium-sized jar offers ample supply without compromising on freshness or taste.",
                "Enjoy the rich, creamy texture of pure peanuts in every spoonful, whether you're spreading it on toast, using it as a dip for fruits and vegetables, or incorporating it into your favorite recipes.",
                "Packed with protein and essential nutrients, our 800g Peanut Butter is your go-to choice for nutritious and delicious snacking."
            ]
        },
        {
            id: 2,
            src: product3,
            title: {
                item: '400 grams Peanut Butter',
                weight: '400g',
                price: 300
            },
            details: [
                "Elevate your snacking experience with our compact yet mighty 400g jar of delectable Peanut Butter.",
                "Perfectly sized for singles, couples, or anyone craving a taste of pure delight, this jar packs a punch of flavor in every spoonful.",
                "Made from high-quality peanuts, our 400g Peanut Butter is a versatile addition to your pantry – whether you're spreading it on crackers, mixing it into smoothies, or adding it to your favorite dessert recipes.",
                "With its creamy texture and irresistible taste, it's the perfect choice for satisfying cravings and enjoying a guilt-free treat."
            ]
        },
        {
            id: 3,
            src: product4,
            title: {
                item: '250 grams Peanut Butter',
                weight: '250g',
                price: 150
            },
            details: [
                "Discover peanut butter perfection in a petite package with our 250g jar of creamy delight.",
                "Designed for those who appreciate quality in small doses, this jar is the epitome of convenience without compromise.",
                "Enjoy the rich, nutty flavor of pure peanuts, whether you're spreading it on toast, drizzling it over pancakes, or using it as a dip for fruits and vegetables.",
                "With its smooth texture and irresistible taste, our 250g Peanut Butter is an essential pantry staple for busy mornings, quick snacks, and moments of pure indulgence."
            ]
        }
    ],
    recipes: [
        {
            id: 0,
            name: "Peanut Butter Cookies",
            image: Cookies,
            introduction: "These classic peanut butter cookies are a crowd favorite and perfect for any occasion.",
            ingredients: [
                "1 cup peanut butter",
                "1 cup granulated sugar",
                "1 egg",
                "1 teaspoon vanilla extract",
                "1/2 teaspoon baking soda",
                "Pinch of salt"
            ],
            instructions: [
                "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
                "In a mixing bowl, cream together the peanut butter and sugar until smooth.",
                "Add the egg, vanilla extract, baking soda, and salt, and mix until well combined.",
                "Roll the dough into small balls and place them on the prepared baking sheet.",
                "Use a fork to gently flatten each ball, creating a crisscross pattern.",
                "Bake for 10-12 minutes, or until the edges are lightly golden.",
                "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
            ],
            nutritionalInfo: {
                calories: 120,
                fat: 8,
                protein: 4,
                carbohydrates: 10
            },
            variations: [
                "Add chocolate chips for a twist.",
                "Substitute almond butter for peanut butter for a different flavor profile.",
                "Use coconut sugar or honey instead of granulated sugar for a healthier option."
            ],
            tips: [
                "For extra chewy cookies, slightly under-bake them and allow them to cool on the baking sheet.",
                "Store leftovers in an airtight container at room temperature for up to one week."
            ]
        },
        {
            id: 1,
            name: "Peanut Butter Smoothie",
            image: Smoothie,
            introduction: "This creamy peanut butter smoothie is a delicious and nutritious way to start your day.",
            ingredients: [
                "1 banana, frozen",
                "1/4 cup peanut butter",
                "1 cup almond milk",
                "1 tablespoon honey",
                "1/2 teaspoon cinnamon",
                "Handful of ice cubes"
            ],
            instructions: [
                "Combine all ingredients in a blender.",
                "Blend until smooth and creamy.",
                "Pour into glasses and serve immediately."
            ],
            nutritionalInfo: {
                calories: 280,
                fat: 15,
                protein: 7,
                carbohydrates: 30
            },
            variations: [
                "Add a handful of spinach for extra nutrition.",
                "Use Greek yogurt for added creaminess and protein.",
                "Top with a sprinkle of crushed peanuts for texture."
            ],
            tips: [
                "Adjust the sweetness by adding more or less honey, according to your taste preference.",
                "Feel free to customize with your favorite fruits or add-ins."
            ]
        },
        {
            id: 2,
            name: "Peanut Butter Energy Balls",
            image: Energyballs,
            introduction: "These peanut butter energy balls are perfect for a quick and healthy snack on the go.",
            ingredients: [
                "1 cup rolled oats",
                "1/2 cup peanut butter",
                "1/4 cup honey",
                "1/4 cup mini chocolate chips",
                "1/4 cup chopped peanuts",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "In a mixing bowl, combine all ingredients until well mixed.",
                "Roll the mixture into small balls, about 1 inch in diameter.",
                "Place the balls on a baking sheet lined with parchment paper.",
                "Chill in the refrigerator for at least 30 minutes to firm up.",
                "Store in an airtight container in the refrigerator for up to one week."
            ],
            nutritionalInfo: {
                calories: 120,
                fat: 6,
                protein: 3,
                carbohydrates: 15
            },
            variations: [
                "Swap out the chocolate chips for dried fruit for a different flavor.",
                "Add a scoop of protein powder for extra protein.",
                "Coat the balls in shredded coconut or cocoa powder for added texture."
            ],
            tips: [
                "Feel free to customize with your favorite mix-ins, such as chia seeds, flaxseed, or shredded coconut.",
                "These energy balls are great for pre or post-workout snacks."
            ]
        },
        {
            id: 3,
            name: "Thai Peanut Noodles",
            image: Noodles,
            introduction: "These Thai-inspired peanut noodles are packed with flavor and make for a satisfying meal.",
            ingredients: [
                "8 oz (225g) rice noodles",
                "1/4 cup creamy peanut butter",
                "3 tablespoons soy sauce",
                "2 tablespoons lime juice",
                "2 tablespoons brown sugar",
                "1 tablespoon sesame oil",
                "2 cloves garlic, minced",
                "1 teaspoon grated ginger",
                "1/4 cup chopped peanuts, for garnish",
                "2 green onions, sliced, for garnish",
                "1/4 cup chopped cilantro, for garnish"
            ],
            instructions: [
                "Cook the rice noodles according to package instructions. Drain and set aside.",
                "In a small bowl, whisk together the peanut butter, soy sauce, lime juice, brown sugar, sesame oil, garlic, and ginger until smooth.",
                "Toss the cooked noodles with the peanut sauce until evenly coated.",
                "Divide the noodles into serving bowls and garnish with chopped peanuts, sliced green onions, and chopped cilantro.",
                "Serve immediately and enjoy!"
            ],
            nutritionalInfo: {
                calories: 400,
                fat: 15,
                protein: 10,
                carbohydrates: 60
            },
            variations: [
                "Add cooked chicken, shrimp, or tofu for extra protein.",
                "For a spicier kick, add sriracha or red pepper flakes to the peanut sauce.",
                "Use zucchini noodles or spaghetti squash for a low-carb option."
            ],
            tips: [
                "To make ahead, store the peanut sauce separately from the noodles and toss together just before serving.",
                "Feel free to customize with your favorite vegetables, such as bell peppers, carrots, or broccoli."
            ]
        },
        {
            id: 4,
            name: "Peanut Butter Banana Smoothie",
            image: Smoothies,
            introduction: "This creamy and nutritious smoothie is a perfect way to start your day or refuel after a workout.",
            ingredients: [
                "1 ripe banana",
                "2 tablespoons creamy peanut butter",
                "1/2 cup Greek yogurt",
                "1/2 cup milk of your choice",
                "1 tablespoon honey or maple syrup",
                "1/2 teaspoon vanilla extract",
                "Handful of ice cubes"
            ],
            instructions: [
                "In a blender, combine the banana, peanut butter, Greek yogurt, milk, honey or maple syrup, vanilla extract, and ice cubes.",
                "Blend until smooth and creamy, adding more milk if necessary to reach your desired consistency.",
                "Pour into glasses and serve immediately, optionally garnishing with a sprinkle of cinnamon or a drizzle of honey."
            ],
            nutritionalInfo: {
                calories: 300,
                fat: 12,
                protein: 15,
                carbohydrates: 35
            },
            variations: [
                "Add a handful of spinach or kale for an extra nutrient boost.",
                "Include a scoop of protein powder for additional protein.",
                "For a thicker smoothie, use frozen banana slices instead of fresh."
            ],
            tips: [
                "To make it vegan, use plant-based yogurt and milk alternatives.",
                "For added texture, sprinkle with granola or chia seeds before serving."
            ]
        },
        {
            id: 5,
            name: "Peanut Butter and Jelly Sandwich",
            image: Jelly,
            introduction: "A timeless favorite, the peanut butter and jelly sandwich is simple yet satisfying.",
            ingredients: [
                "2 slices bread (white, wheat, or your choice)",
                "2 tablespoons peanut butter",
                "1-2 tablespoons jelly or jam (grape, strawberry, raspberry, etc.)"
            ],
            instructions: [
                "Spread peanut butter evenly on one slice of bread.",
                "Spread jelly or jam evenly on the other slice of bread.",
                "Place the two slices of bread together, peanut butter and jelly sides facing each other.",
                "If desired, use a knife to cut the sandwich diagonally for a classic presentation.",
                "Serve immediately, or pack in a lunchbox for later enjoyment."
            ],
            nutritionalInfo: {
                calories: 350,
                fat: 18,
                protein: 10,
                carbohydrates: 40
            },
            variations: [
                "Use almond butter or cashew butter instead of peanut butter for a different flavor.",
                "Try different types of bread, such as whole grain, multigrain, or gluten-free.",
                "Add sliced bananas, apples, or strawberries for extra flavor and texture."
            ],
            tips: [
                "To prevent the bread from becoming soggy, consider spreading a thin layer of peanut butter on both slices of bread before adding the jelly or jam.",
                "For a fun twist, use cookie cutters to shape the sandwiches into fun shapes for kids."
            ]
        }
    ],
    images: [product1, product2, product3, product4, product5],
    inputs: {},
    cartItems: [],
    profiles: false
};



const reducer = (state, action) => {
    switch (action.type) {
        case 'products':
            return { ...state, products: action.payload };
        case 'newInputs':
            return { ...state, inputs: action.payload };
        case 'images':
            return { ...state, images: action.payload };
        case 'recipes':
            return { ...state, recipes: action.payload };
        case 'addcart':
            const { productId } = action.payload;
            const productToAdd = state.products.find(item => item.id === productId);

            if (!productToAdd) {
                console.error(`Product with ID ${productId} not found.`);
                return state; // Return current state if product is not found
            }

            const existingItem = state.cartItems.find(item => item.id === productId);

            if (existingItem) {
                // If the item exists in the cart, update its quantity
                const updatedCartItems = state.cartItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
                console.log('Updated Cart Items:', updatedCartItems); // Log the updated cart items
                // Emit the cartCountUpdated event here
                EventBus.emit('cartCountUpdated');
                return { ...state, cartItems: updatedCartItems };
            } else {
                // If the item does not exist, add it to the cart with quantity 1
                const updatedCartItems = [...state.cartItems, { ...productToAdd, quantity: 1 }];
                console.log('Updated Cart Items:', updatedCartItems); // Log the updated cart items
                // Emit the cartCountUpdated event here
                EventBus.emit('cartCountUpdated');
                return { ...state, cartItems: updatedCartItems };
            }

        case 'removecart':
            const { itemId } = action.payload;
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== itemId) };

        case 'initializeCart':
            return { ...state, cartItems: action.payload };

        default:
            throw new Error(`Could not handle the action type: ${action.type}`);
    }
};

// Define the EventBus directly in the DataContext file
const EventBus = {
    events: {},
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    },
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
};


export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { width } = useWindowSize();

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    useEffect(() => {
        // Retrieve cart items from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            dispatch({ type: 'initializeCart', payload: JSON.parse(storedCartItems) });
        }
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message sent successfully');
        console.log(state.inputs);
    };

    const handleChange = (event) => {
        dispatch({ type: 'newInputs', payload: event.target.value });
    };

    const handleCart = (productId) => {
        dispatch({ type: 'addcart', payload: { productId } });
        alert('Add Item to cart');
        console.log(state.cartItems)
        EventBus.emit('cartCountUpdated');
    };

    const handleRemove = (itemId) => {
        dispatch({ type: 'removecart', payload: { itemId } });
        alert('Item removed from Cart');
        EventBus.emit('cartCountUpdated');
    };

    const calculateTotalPrice = () => {
        if (state.cartItems.length === 0) {
            return 0; // If cart is empty, return 0
        }

        const totalPrice = state.cartItems.reduce((total, item) => {
            // Ensure both price and quantity are valid numbers
            const itemPrice = typeof item.title.price === 'number' ? item.title.price : 0;
            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;

            return total + itemPrice * itemQuantity;
        }, 0);

        return totalPrice;
    };

    return (
        <DataContext.Provider
            value={{
                state,
                dispatch,
                handleCart,
                handleSubmit,
                handleChange,
                handleRemove,
                calculateTotalPrice,
                width,
                EventBus
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;