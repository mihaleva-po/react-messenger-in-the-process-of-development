
import profilePageReducer, {deletePost} from "./profilePageReducer";

// Подготовка исходных данных

let state = {
    posts: [
        {id: 1, post: "Hi, how are you?", countLike: 8},
        {id: 2, post: "It's first post!", countLike: 4},
    ]
};

// action

test('Проверка длины массива после удаления', () => {
    let action = deletePost(1);
    let newState = profilePageReducer(state, action);
    // Ожидается
    expect(newState.posts.length).toBe(1);
});

test('Проверка длины массива при некорректном id поста', () => {
    let action = deletePost(10);
    let newState = profilePageReducer(state, action);
    // Ожидается
    expect(newState.posts.length).toBe(2);
});



