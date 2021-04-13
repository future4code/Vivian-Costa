import { app } from "./app"
import login from "./endpoints/users/login"
import getProfile from "./endpoints/users/getProfile"
import signup from "./endpoints/users/signup"
import getUserById from "./endpoints/users/getUserById"
import createRecipe from "./endpoints/recipes/createRecipe"
import getRecipeById from "./endpoints/recipes/getRecipeById"

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id/profile', getUserById)
app.post('/recipe', createRecipe)
app.get('/user/recipe/:id', getRecipeById)


