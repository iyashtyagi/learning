import {atom, selector} from 'recoil'

export const todosArrayAtom = atom({
    key : "todosAtom",
    default : [
        {
            "id": 1,
            "title": "Grocery Shopping",
            "description": "Buy vegetables, fruits, milk, and bread.",
            "completed": false
        },
        {
            "id": 2,
            "title": "Finish Book",
            "description": "Read the last three chapters of the novel.",
            "completed": false
        },
        {
            "id": 3,
            "title": "Workout",
            "description": "Complete a 30-minute cardio session.",
            "completed": false
        },
        {
            "id": 4,
            "title": "Clean Kitchen",
            "description": "Wash dishes, clean countertops, and sweep the floor.",
            "completed": false
        },
        {
            "id": 5,
            "title": "Email Boss",
            "description": "Send the weekly report to your boss.",
            "completed": false
        },
        {
            "id": 6,
            "title": "Doctor Appointment",
            "description": "Attend the annual check-up at 10 AM.",
            "completed": false
        },
        {
            "id": 7,
            "title": "Pay Bills",
            "description": "Pay electricity, water, and internet bills online.",
            "completed": false
        },
        {
            "id": 8,
            "title": "Call Parents",
            "description": "Catch up with parents over the phone.",
            "completed": false
        },
        {
            "id": 9,
            "title": "Laundry",
            "description": "Wash and fold clothes.",
            "completed": false
        },
        {
            "id": 10,
            "title": "Study for Exam",
            "description": "Review chapters 5 to 8 for the upcoming exam.",
            "completed": false
        },
        {
            "id": 11,
            "title": "Car Maintenance",
            "description": "Get the oil changed and tires checked.",
            "completed": false
        },
        {
            "id": 12,
            "title": "Plan Vacation",
            "description": "Research destinations and book flights for the trip.",
            "completed": false
        },
        {
            "id": 13,
            "title": "Write Blog Post",
            "description": "Draft a new post for the blog on travel tips.",
            "completed": false
        },
        {
            "id": 14,
            "title": "Meditation",
            "description": "Practice meditation for 15 minutes.",
            "completed": false
        },
        {
            "id": 15,
            "title": "Prepare Dinner",
            "description": "Cook a healthy meal for the family.",
            "completed": false
        },
        {
            "id": 16,
            "title": "Update Resume",
            "description": "Add recent work experience and skills to the resume.",
            "completed": true
        },
        {
            "id": 17,
            "title": "Visit Library",
            "description": "Return borrowed books and check out new ones.",
            "completed": false
        },
        {
            "id": 18,
            "title": "Attend Workshop",
            "description": "Participate in the online skill development workshop.",
            "completed": false
        },
        {
            "id": 19,
            "title": "Garden Work",
            "description": "Weed the garden and water the plants.",
            "completed": false
        },
        {
            "id": 20,
            "title": "Organize Closet",
            "description": "Sort and organize clothes in the closet.",
            "completed": false
        }
    ]
});

export const filterAtom = atom({
    key : "filterAtom",
    default : ""
})

export const filteredTodos = selector({
    key : "filteredTodos",
    get : ({get})=>{
        const todos = get(todosArrayAtom);
        const filter = get(filterAtom).toLowerCase();
        const filteredTododsArray = filter?todos.filter(todo => todo.title.toLowerCase().includes(filter) || todo.description.toLowerCase().includes(filter)):null;
        return filteredTododsArray;
    }
})