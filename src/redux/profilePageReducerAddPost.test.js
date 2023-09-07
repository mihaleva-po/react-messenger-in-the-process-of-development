
import profilePageReducer, {addPost} from "./profilePageReducer";

// Подготовка исходных данных
let action = addPost("it-react");
let state = {
    posts: [
        {id: 1, post: "Hi, how are you?", countLike: 8},
        {id: 2, post: "It's first post!", countLike: 4},
    ]
};

// action
let newState = profilePageReducer(state, action);
test('Проверка длины массива постов', () => {
    // Ожидается
    expect(newState.posts.length).toBe(3);
});

test('Проверка текста добавленного поста', () => {
    expect(newState.posts[2].post).toBe("it-react");
});

test('Проверка количества лайков на новом посте', () => {
    expect(newState.posts[2].countLike).toBe(0);
});

