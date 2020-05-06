## Week 10 Homework Due Wednesday May 6 2020 at 6pm

**Monsters Search API Project 8:** counts towards **65%** of the **final grade**

**Week 10 Homework Part 2:** counts toward **20%** of the **final grade**

I have **\*created** the **following files** for **_you_**:

-   `main.js` **file** in `scripts/js/main.js`

-   `main.css` **file** in `styles/css/main.css`

-   `index.html` in the **root** of the `project` **folder**

-   `.gitignore` file **_ignore_** the **potential** `.vscode` which sometimes **appears** if you are **_using_** `VS Code`. For those of you that **_don't want_** to **push** your `README.md` file to `Github` but want to **_keep_** it **locally**, you can **_add_** `README.md` to your `.gitignore`.

-   **_Again_**, `git clone` this `repository` to your computer. Then `rm -rf .git` and **_re-initialize_** it. The `index.html` of this `project` **_has to be_** in the `root` of the `folder` and **_not_** within **another folder** when **_pushed_** to `Github`. **_Otherwise_**, when I **test** it **_out_**, it will not work.

**For those of you on Windows:** If you don't know your way around **Windows Powershell**, **_don't_** `git clone` **_this_** **repository**. Create a **_new_** **stand alone** **_repository_** yourself, and **copy** and **paste** the **_folders_** inside **this repository** into **_yours_**. That way, you **_won't_** be **_inheriting_** the `.git` folder that you **_possibly_** **can't remove**, and can `git init` from a **clean slate**. If you have **_any questions_**, please **contact me** on **Discord**. If you want to **_try_** **removing** a `.git` folder from a **dummy repo**, you can always **use** the following one I have created on **Github**: [test-repo on Github](https://github.com/interglobalmedia/test-repo). Some **helpful articles** on how to **_remove_** **files** and **folders** (and **_other_** helpful `Powershell` commands) on **Windows** in **Powershell**:

-   [How to show hidden files and folders on Windows 10](https://pureinfotech.com/show-hidden-files-folders-windows-10/)

-   [PowerShell equivalents for common Linux/bash commands](https://mathieubuisson.github.io/powershell-linux-bash/)

-   [Powershell Tutorial](https://www.tutorialspoint.com/powershell/index.htm)

## Monsters Search API Project 8:

The **_following_** has been **added** to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Monsters API</title>
        <script defer src="scripts/js/main.js"></script>
    </head>

    <body>
        <button class="monsters-btn">get monsters</button>
        <fieldset>
            <input
                type="text"
                id="search"
                placeholder="search monsters"
                autofocus
            />
        </fieldset>
        <ul id="monsters"></ul>
    </body>
</html>
```

-   You **_have_** to **add** the `main.js` file yourselves to `index.html`. **_Remember_** to **add** the `script` right below the `title` **tag** in the **head**. When the `script` **tag** is **_placed_** in the **head**, it should be the **_last_** **tag** right above the **_closing_** `head` **tag**. In **_addition_**, you should be **adding** the **_defer_** `boolean` **attribute** to the `script` **tag** for the **_reasons_** I **described** in the **slide deck** for this **lecture**.

-   You **_have_** to **add** the `main.css` file to `index.html` yourselves.

-   PLEASE REMEMBER that IF you are **_adding_** `Google Fonts`, they **_should be_** placed ABOVE the `external stylesheet` **link**, NOT BELOW. If you **_place_** the `Google Fonts` **below**, I will **_take off_** **points**.

## The Monsters Search API Project 8: How It Works

### User Story

In **_this_** **application**, we are **building** a little `monsters search application` in which:

-   If the **user** **_types_** **at least** **_one letter_** in the `search input field`, **whichever monsters** **_contain_** that **letter** (or letters) or **special character(s)** within their **personal** `text` **information**, will **_appear_** on the **page** when the **user** **_hits_** the `enter/return` **key** while **_inside_** the `search input field`. If the **user** **_types_** a **complete name**, the `monsters` with **_that name_** (`first` or `last`) will **appear** on the **_page_**.

-   When the **user's** **_cursor_** is **focused** **_inside_** of the `search input field`, and there is `text` **_inside_**, if `he/she` hits the `delete` **key**, the `search input field` is **_cleared_**.

## The Monsters Search API Project 8: How To Build It

### Global Variables

**_First_** we have to **_declare_** and **_initialize_** some **variables**.

-   One is for the `ul` **element** **_containing_** the **list** of **_monsters_**.

We will **_declare_** and **_initialize_** a `const variable` called `ul`. We **_assign_** it a **value** of `document.getElementById('monsters');` Something like **_this_**:

```js
const ul = document.getElementById('monsters')
```

-   One is for the `url` of the `JSONPlaceholder API` **users** **_endpoint_**.

We will **_declare_** and **_initialize_** a `const variable` called `dataUrl`. We **_assign_** it a **value** of `'https://jsonplaceholder.typicode.com/users';`. Something like **_this_**:

```js
const dataUrl = 'https://jsonplaceholder.typicode.com/users'
```

-   One is for the `monsters` **array**.

We will **_declare_** and **_initialize_** a `let variable` called `monsters`. We **_assign_** it a **value** of `[];`. An **_empty_** **array**. Something like **_this_**:

```js
let monsters = []
```

### Declaring and Defining The createNode() (helper) function

-   **_NEXT_**, we have to **_declare_** and **_define_** a `helper` **function** called `createNode()`. It **_initially_** looks like **this**:

```js
function createNode(element) {}
```

We **_pass in_** a `parameter` called `element` to the `createNode()` **function**. **_Then_**, inside the `body` of the `createNode()` **function**, we **create** a `return` **statement** which **_creates_** a **new** `element`.

The `return` **statement** looks **_something_** like the **following**:

```js
return document.createElement(element)
```

**_Basically_**, the `createNode()` `helper` **function** **_creates_** a **new** `element` which will be **subsequently** **_added_** to the `DOM`.

### Declaring and Defining The append() (helper) function

**_NEXT_**, we have to **_declare_** and **_define_** a `helper` **function** called `append()`. It **_initially_** looks like **this**:

```js
function append(parent, el) {}
```

**_Inside_** the `body` of this `append()` **function**, we **add** the **_following_**:

```js
parent.appendChild(el)
```

**_First_** we pass in **two parameters** to the `append()` **function**. The **_first_** is the `parent` **parameter**, and the **_second_** is the `el` **parameter**.

**_Inside_** the `body` of the `append()` **function**, we **set** the `appendChild()` **method** on the `parent` **parameter** (**variable**), and we **_pass in_** the `el` **parameter** (`variable`) in to the `appendChild()` **method**.

**_Basically_**, what this `append()` **helper function** **_does_** is `append` a `child element` of a `parent element` to the `parent element`. `parent` **_represents_** the `parent element`, and `el` **represents** the `child element`. `appendChild()` is a **_built in_** **JavaScript** **_method_** which `appends` a `child element` to a `parent element`. In **_our case_**, we **need** to **_append_** the `child element` to the `parent element`, because it is a **_newly_** **created** `element`. In **_addition_**, the **parent** `li` **element** is **_also_** a **_newly_** **created** `element`, so it **_also_** has to be **appended** to its **_parent_**, the `ul` **element**.

### Declaring and Defining The fetchMonsters() function

-   **_NEXT_**, we have to **_declare_** and **_define_** a **function** called `fetchMonsters()`. **_Initially_**, it looks something like **_this_**:

```js
function fetchMonsters() {}
```

-   **_NEXT_**, inside of the `body` of the **function**, at the **_top_**, we make a `call` to the `fetch()` method and **_pass in_** the `dataUrl` **variable** whose **value** is the `url` of the `JSONPlaceholder API`. It looks something like **_this_**:

```js
fetch(dataUrl)
```

-   **_NEXT_**, we `chain` our **_first_** `.then()` **block** to the `fetch()` **method**, and **_pass in_** the `HTTP` `res` **object** **_received_** in **response** to the `fetch` **request** to the `JSONPlaceholder API`. This `res` **object** **_contains_** the `JSONPlaceholder` **data** **_requested_** from the `API`. Then we **set** the `.json()` **method** on the `res` **object** to **_transform_** it into **readable** `json` **text**. It looks something like **_this_**:

```js
.then(res => res.json())
```

-   **_NEXT_**, we `chain` a **_second_** `.then()` **block** to the **_first_** `.then()` **block**. We **_pass in_** a **new** `parameter` to this **_second_** `.then()` **block** called **users**. This **_second_** `parameter` **contains** the `JSONPlaceholder` **data** **_retrieved_** from the `API` as **_well_**. The `raw` **data** was **passed** into the **_first_** `.then()` **block**, **_implicitly_** `returned` and **set** on the `.json()` **method**. Then the **_transformed_** **data** is **_passed_** into the **second** `.then()` **block** in the **form** of the **_new_** `users` **parameter**. As we **_did_** with the `Geo IP App`, we **set** this **_new_** **parameter** called **_users_** as the **_re-assigned_** **value** of our `monsters` **variable** we **_declared_** and **_initialized_** earlier. The `JSONPlaceholder` **data** is in the **form** of `JSON` **objects** **_within_** an **array**. Check out the `data` on the [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users) **website**.

-   **_NEXT_**, we want to **_append_** some `li` **elements** to our `ul` **element**. Inside **_each_** `li` will be a `monster` **image** and a `div` **element** containing `monster` **data**.

In **_order_** to be **able** to **_render_** a `list` of **elements** which are **_inside_** an **array**, the **_best_** and most **_efficient_** way to do this is to `map` over `each element` in the **array** using the `.map()` **method**.

The **value** of the `monsters` **variable** is an **array**. **_Initially_** it was **set** to an **empty array**, but when we **_receive_** the **data** from the `JSONPlaceholder API` and **_convert_** it to **readable** `JSON` by **setting** the `.json()` **method** on the `res` **object** **_received_** from the `API`, and then **re-assign** the `monsters` **variable** with the **value** of the `users` **parameter** **_representing_** the **transformed** `data` **_passed_** into the **second** `.then()` **block**, the **value** **_stored_** in the `monsters` **variable** **_consists_** of an **array** of **_objects_**.

**.map() method definition**: creates a **_new_** **array** resulting from the `call` of a **function** on `each` **element** in the **_array_**. The `.map()` **method** calls the **provided function** **_once_** for `each` **element** in an **array**, and **_in order_**. The `.map()` **method** does **_not_** **execute** the **function** for `array` **elements** **_without_** **values**. the `.map()` **method** does **_not_** **change/mutate** the **_original_** **array**.

**.map() method Syntax:**

```js
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

**Parameters:**

**callback:** **function** that is **_called_** for `every` **element** of the **_array_**. **_Each_** **time** `callback` **_executes_**, the `returned` **value** is **_added_** to the **new array**.

The `callback` **function** **_accepts_** the following **arguments**:

**currentValue:** the `current` **element** being **_processed_** in the **array**.

**index** (optional): the `index` of the `current` **element** being **_processed_** in the **array**.

**array** (optional): the `array` **map** is **_called_** upon.

**thisArg** (optional): **value** to **_use_** as `this` when **executing** `callback`.

**Return value:** a **new array** with `each` **element** being the **_result_** of the `callback` **function**.

**when not to use .map():** Since `map` **builds** a **_new_** **array**, you should **_not_** **use** it when you **_aren't_** **using** the **_returned_** **array**.

Our `.map()` **method**, which comes right **_after_** `console.log(monsters);`, should look something like the **_following_**:

```js
return monsters.map((monster) => {
    console.log(monster)
    let li = createNode('li')
    let img = createNode('img')
    let div = createNode('div')
    const imageUrl = `https://robohash.org/${monster.id}?set=set3&size=300x300`
    img.src = `${imageUrl}`
    div.innerHTML = `${monster.name} ${monster.email}<br/> 
${monster.address.street} ${monster.address.suite}<br/>
${monster.address.city} ${monster.address.zipcode}`
    append(li, img)
    append(li, div)
    append(ul, li)
})
```

Please refer to the adjusted .map() method towards the bottom of the README.md right before the completed application screenshots.

We are **returning** the **_whole_** `.map()` **method** **_instead of_** **creating** a **variable** which **stores** the `.map()` **method** as its **value** **_containing_** a `return` **statement** inside the `body` of the **method**. It just makes **more sense** **_given_** the **structure** of our `fetchMonsters()` **function**. We can `return` the **method** because that is the **_last_** **block** of **_code_** inside the `fetchMonsters()` **function**, and there would be **_no more_** **code** to **_execute_** inside the **function** **_after_** the `.map()` **method** is `returned`, which ends `function` **execution** **_after_** the `.map()` **method** is **_returned_**.

**return statement definition:** when **_present_**, **ends** `function execution`, and **_specifies_** a **value** to be **_returned_** to the **function** `caller`. In **_our case_**, the **value** to be **_returned_** is a `list` of `monster` **images** and their **_associated_** `monster` **data** **_rendered_** by the `.map()` **method**. This also **ensures** that we are **_using_** the **returned** **_array_**. The **function** `caller` is the `monsters array` the **_ map method_** is being **called** **_upon_**.

**_Inside_** the `.map()` **method**, we **_first_** will **create** a `console.log(monster)`, **_passing in_** a `single` **monster**, to **_check_** what will be **printed** to the `console` for `each` **monster**. I will **_leave_** you all to let me **know** what that **_is_**, in **one** of the **_answers_** in `Part 2` of this `homework`.

After we **add** `console.log(monster);`, we **_create_** a **new** `li` **element** using the `createNode("li")` **helper function**, **_passing in_** the `"li"` **element**. We **_declare_** and **_initialize_** the `li` **variable**, and **_assign_** it the **value** of `createNode("li")`.

Next we **create** a **_new_** `img` **element** using the `createNode("img")` `helper` **function,** **_passing in_** the `"img"` **element**. We **_declare_** and **_initialize_** the `img` **variable** and **_assign_** it the **value** of `createNode("img");`.

**_Next_** we **create** a `div` **element** using the `createNode("div")` `helper` **function,** **_passing in_** the `"div"` **element**. We **_declare_** and **_initialize_** the `div` **variable** and **_assign_** it the **value** of `createNode("div");`.

**_Next_** we have to **_declare_** and **_initialize_** a `const variable` called `imageUrl`. We **_assign_** it the **value** of the `Robohash monster image API` **url**. We do something **_similar_** to what we **_did_** in our `OMDB API movie app`. We want this `url` to be **_dynamic_**, because we have `10` **monsters** in our `monster` **list**, and we **_don't_** want to be **rendering** `10` **images** and **data** of the **_same_** monster!

We **ensure** that our `url` is **_dynamic_** by `interpolating` the `monster` **id** in the `url`. We **_place_** it **right after** the `base url` and the `/` **following** it. And since we are **using** `string interpolation`, we have to **make sure** that we are **using** a `template literal`! That means using **back ticks** **_instead of_** **quotes**. The `monster` **id** becomes **part** of the `url`.

The `monster` **id** is **_followed by_** the `Robohash image set` **query** **_following_** the `?`:

```js
?set=set3
```

We had the same kind of **set up** with our `OMDB API movie app`. Our `query` **parameters** came **_after_** the `?` in the `OMDB` **url**. Here we also have `2` **parameters**. The **_first_** is the `set` **parameter** with the **value** of `set3` and the **_second_**, which comes **after** the `ampersand` (& symbol), is the `size` **parameter**. It has the **value** of `300x300`.

Once we have **established** the `imageUrl`, we can **set** it as the **value** of `img.src`.

As we **_did_** in the `Note App project`, we can **simply set** the `src` **attribute** **_directly_** on the **newly created** `img` **element** **_instead_** of **setting** the `.setAttribute()` **method** on `img`. **_However_**, you can **also** set the `src` **attribute** of the `img` **element** **_dynamically_** by doing the **following**:

```js
img.setAttribute('src', `${imageUrl}`)
```

The `.setAttribute()` **method** takes **two arguments**. The **first** is the `name` of the **attribute** you want to **set** on the `img` **element**. The **second** is the **value** of the **attribute**. The **value** is the `path` to the `image` or the `url` to the `image`. **_Both_** **approaches** **achieve** the **_same_** **thing**.

**_Next_** we have to make sure to **render** `each monster's` **data** to the **page**. That is what the `div` **element** is **_for_**! We **set** the `.innerHTML` **property** on the `div` **element**, **_represented by_** the `div` **variable** we **_created_**, and **assign** it the **value** of **_all_** the `monster` **object** `properties` we **want** to **_include_**. Visit the [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) **link** to **_see_** what `properties` and their **_associated_** `values` are **available** to you to **set** on the `monster` **object**. I **use** quite a few `properties`, **_including_** **nested ones**, in the `.map()` **method**. You can **use** what is **_there_** or **choose** your **_own_**!

**_Last_** of all, we have to **append** the **_newly created_** **elements** to the `DOM`. These **new elements** are **_also_** **children** of the **already existing** `ul` **element**, so we **use** the `appendChild()` **implemented** in the `append()` `helper` **function**, to **append** these **_children_** of `ul` to `ul`.

**Order** **_matters_** **here**. Since we **_want_** the **image** to **appear** **before** the `text` **data**, we **first append** the `img` **element** to the `li` **element**. This is **_represented_** by:

```js
append(li, img)
```

Since we want the `text data` to **appear** **_after_** the `img`, **_next_**, we **append** the `div` **element** to the `li` **element**. This is **_represented_** by:

```js
append(li, div)
```

**_Last_** of all, we need to **append** the **newly created** `li`, `img`, and `div` **elements** to an **_already_** **existing element** in the `DOM`. All we **need** to **_do_**, **however**, is **append** `li` to `ul`. We **_already_** have **appended** the `img` and `div` **elements** to `li`! **Appending** `li` to `ul` is **_represented_** by:

```js
append(ul, li)
```

### Note Wednesday, April 29, 2020:

I had to make a **couple** of **_adjustments_** to the `Monsters API` **code**. **_One_** was to **make sure** that the `JavaScript` **_didn't_** **execute** before the **whole page** was **_parsed_** and **rendered** in the **browser**. The **_other_** was to **make sure** that my **images** loaded AFTER the **image** **_elements_** were **created**.

I removed the following code:

```js
window.addEventListener('load', (e) => {
    e.preventDefault()
    fetchMonsters()
})
```

This meant that I could make a call to the `fetchMonsters()` function like so:

```js
fetchMonsters()
```

I did this right below the **declaration** and **definition** of the `fetchMonsters()` **function** itself.

-   **_Next_**, I wanted to make sure that my `images` **_rendered_** to the page AFTER the `image` **elements** had **_already_** been **created**, so I did the **_following_** right **before** **_setting_** the **value** of the `image` `src` **attribute**:

```js
img.addEventListener('load', function () {
    console.log(`Image has completed loading!`)
    div.innerHTML = `${monster.name} ${monster.email}<br/>
${monster.address.street} ${monster.address.suite}<br/>
${monster.address.city} ${monster.address.zipcode}`
    append(li, img)
    append(li, div)
    append(ul, li)
})
const imageUrl = `https://robohash.org/${monster.id}?set=set3&size=300x300`
img.src = `${imageUrl}`
```

What is **_going_** on with the **change** **_above_** is that I am **making sure** that my **_newly created_** `img` **element** is **_loaded_** before I **set** the `value` of the **image** `src` **attribute**.

**_Addressing_** the `image` **load issue** (and that makes up a **_majority_** of the **application** **_content_**) meant that I could also **remove** my `get monsters` **button** and the associated `refresh()` **function** which I had **created** to **_refresh_** the **page** in case if **_no content_** **rendered** to the **page**. The **_problem_** had **been** that the `Javascript` was **_executed_** **before** `HTML` was **parsed** and **_loaded_** in the **browser**, thereby **_resulting_** in a **virtually** **_empty_** **page**!

### Declaring and Defining the searchMonsters() function

-   **_NEXT_**, we **need** to **_declare_** and **_initialize_** a **function** that will **_search_** for `monsters` within the `list` of **monsters**. This is the **function** that will **_allow_** a **user** to `type` some `text` in the `search input field`. When the **user** **_hits_** the `return` **key**, **_only_** `monsters` **containing** **_that_** `text` will **appear** on the **page**. If **_none_** **contain** that `text`, then **_none_** will **appear**.

**_First_** we have to **_declare_** and **_define_** this **function**. It will look something like **_this_**:

```js
function searchMonsters() {}
```

**_Inside_** the **function** `body` at the **top**, we have to **_declare_** and **_initialize_** **several** **_variables_**.

**_First_**, we **_declare_** and **_initialize_** a `let variable` called `input`. We **_assign_** it a **value** of `document.getElementById('search');`. This **_represents_** the `search input field` where the **user** will `type` in his/her `search` **query**.

**_Next_** we **_declare_** and **_initialize_** a `let variable` called `filter`. We **_assign_** it a **value** of `input.value.toLowerCase();`. This will **_permit_** us to **extract** the **value** of the `input field` **created** from the **user's** **_typing_**. We also **want** to **_make it_** `case insensitive`, so we **transform** the `typed text` to `lower-case` by **setting** the `.toLowerCase()` built-in **method** on the `input field` **value** **_represented by_** `input.value;`, the **value** of the `input` **variable** being `getElementById('search');`.

**_Next_** we **_declare_** and **_initialize_** a `let variable` called `ul`. We **_assign_** it the **value** of `document.getElementById('monsters');`.

**_Next_** we **_declare_** and **_initialize_** a `let variable` called `li`. We **_assign_** it the **value** of `ul.getElementsByTagName('li');`. This **indicates** we are **_querying_** the `lis` which are **children** of the `ul` **element** and are **_located_** within the `ul` **tag**.

**_Next_** we have to **create** a `for loop` which **iterates** over **_all_** the **monster** `lis` **_within_** the `ul` **element**. And within **_that_** `for loop`, we **have** to **add** an `if/else` **statement**. This will **_target_** the `condition` for `filtering content` **_stylistically_** **based** on the `text` **_typed_** into the `search input field`. The `for loop` **looks** something like **_this_**:

```js
for (let i = 0; i < li.length; i++) {
    let div = li[i].getElementsByTagName('div')[0]
    let txtValue = div.textContent || div.innerText
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = ''
        input.addEventListener('keydown', function (e) {
            const chord = e.keyCode || e.which
            if (chord === 8) {
                e.preventDefault()
                e.currentTarget.value = ''
                window.location.reload()
            }
        })
    } else {
        li[i].style.display = 'none'
    }
}
```

We **set** the **_initialization_**, then the **_condition_**, and the **final expression** of the `for loop` **inside** the `()`. **_Remember_** this from the [loops-arrays](https://interglobalmedia.github.io/loops-arrays/#/3) **slide deck**?

The **initialization** here is **_represented_** by `let i = 0;`. **i** will be `0` **_only_** at the **beginning**, so the **loop** will **_not_** **revisit** it.

The `condition` is **_represented by_** `i < li.length;`. The **loop** will **_continue_** as long as the `length` of `li` is **_greater_** than `i`. In **_other words_**, **as long as** there are `lis` to **_iterate_** over.

The `final expression` is **_represented by_** `i++`. This **increments** `i` by `1`. It is **_short_** for `i = i + 1` or `i += 1`. **_Basically_**, it **propels** the **loop** **_through_** the `lis`.

**_Next_**, **inside** the `for loop` **block**, at the **top**, we **_declare_** and **_initialize_** a `let variable` and call it `div`. We **_assign_** it the **value** of `let div = li[i].getElementsByTagName('div')[0];`. This **_means_** that we are **querying** the **_first_** `div` which **exists** **_inside_** **each** `li` **element** **_present inside_** our `ul` **element**. We **_know_** we are **targeting** the **first div** because of the `[0]`, which **indicates** an `index` of `0`.

**_Next_**, we **_declare_** and **_initialize_** a `let variable` called `txtValue`. We **_assign_** it the **value** of `div.textContent || div.innerText;`. What does this **_mean_**? It **means** that we can **set** **_either_** the `.textContent` **property** to the `div` **element** **_containing_** the **monster** `text` **data**, or the `.innerText` **property**. We **_don't_** just use `.textContent` because of `browser compatibility issues`. `div.innerText` **targets** `IE Explorer` **_pre_** `IE9`. To **_learn more_**, please **visit** the **article** [INNERTEXT VS. TEXTCONTENT](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/).

**_Next_**, we **create** an `if/else` **statement** that **sets** the `condition` that **_results in_** `listing` the `monsters` which **match** the `search query` and **hides** those that **_don't_**.

Let's **break** it **_down_**, as there is a **lot** going on **_here_**.

```js
if (txtValue.toLowerCase().indexOf(filter) > -1) {
    li[i].style.display = ''
    input.addEventListener('keydown', function (e) {
        const chord = e.keyCode || e.which
        if (chord === 8) {
            e.preventDefault()
            e.currentTarget.value = ''
            window.location.reload()
        }
    })
} else {
    li[i].style.display = 'none'
}
```

**_What does this code mean_**? **First** let's take a **look** at the `condition` **_passed_** to the **top** `if statement`. We have a **_nested_** `if` **statement** **_inside_** the `.addEventListener()` **method** **_set_** on the `input` **element** **_represented_** by the `input` **variable** as well.

By **setting** the `.indexOf()` **_built-in_** **method** on the `input` **element's** **_value_** **represented by** the `txtValue` **variable**, we are **_stating_** that if the **method** **_returns_** a **value** **_larger_** than `-1`, that **means** that the `text` **typed** into the `input field` **_matches_** `text` **present** in **one or more** `monster's` **text data** **_residing_** in the `div` **elements**.

If, **_however_**, the `.indexOf()` **_built-in_** **method** **_returns_** `-1`, that **means** that the `text` **typed** into the `input field` does **_not_** match any `text` **present** in **one or more** `monster's` **text data** **_residing_** in the `div` **elements**. This **result** is **_achieved_** by the **code** **_inside_** the `else` **statement**.

If the `search query` is **successful** as represented by `if (txtValue.toLowerCase().indexOf(filter) > -1)`, then `li[i].style.display = '';`. This **means** that the `lis` **matching** the `text query` should be **_rendered_** to the **page**. **_No_** **changes** should be **made** to their `style.display` **property's** **_value_**.

If the `search query` is _NOT_ **successful**, as **_represented_** by the `else` **statement**, then `li[i].style.display = 'none';`. This **means** that **_all_** the `lis` should be **hidden**, and their `style.display` **property** **_value_** should be **set** to `none`.

But it does **_not_** **end** **_there_**. We **still** have **_another_** `if` **statement** to **deal with**, **_nested_** **inside** our **top** `if` **statement**. This `if` **statement** **_targets_** the **value** of the `input field` **_itself_**. We want to be able to **let** the **user** **_clear_** the `input field` with **little effort**. So we **set** the `.addEventListener()` **method** on the `input` **element** **_used_** for our `search queries` to **_listen for_** a `keydown` **event**.

**keydown event:** this `event` is **_fired_** when a `key` is **_pressed_**. **Unlike** a `keypress` **event**, the `keydown` **event** is **_fired_** for **all keys**, **_regardless_** of whether they **produce** a `character` **value**. We **need** `keydown` for the `key` **_we_** are **_targeting_**, which is the `delete` **key**. The `keyCode` for the `delete` **key** is `8`. To **_recap_**, the `event listener` **_targeting_** a `keydown` **event** on the `delete` **key** is:

```js
input.addEventListener('keydown', function (e) {
    const chord = e.keyCode || e.which
    if (chord === 8) {
        e.preventDefault()
        e.currentTarget.value = ''
        window.location.reload()
    }
})
```

**_Inside_** the `.addEventListener()` **method**, **_within_** the `anonymous function`, we **_first_** **declare** and **initialize** a `const variable` called `chord`. We **_assign_** it a **value** of `e.keyCode || e.which;` Why? Because **older browsers** will **_only recognize_** the **deprecated** `e.keyCode`, and **newer browsers** will **_only recognize_** `e.which`.

The **condition** `if (chord === 8)` **means** that if `e.keyCode` or `e.which`, **depending** on the **browser**, is `strict equal` to the `keyCode 8`, which **represents** the `delete` **key**, then the `target element`, **meaning** the `search input field`, **_should be_** `cleared` **after** the `delete key` is **pressed**. This is **achieved** with `e.currentTarget.value = '';`. Then **_afterwards_**, we should **execute** a `page refresh` with `window.location.reload();`. **Why** do we **_need_** this **refresh**? Because **simply clearing** the `input field` is **_not enough_** to **reset** the **page** to its **_default state_** of the `list` of **monsters**. We **have** to **refresh** the **page** as **_well_** in order to **achieve** that.

### Declaring and Initializing a const variable called input and setting the addEventListener() method on it

-   **_Last_** of all, we **need** to **_declare_** and **_initialize_** a `const variable` called `input`. We **_assign_** it the **value** of `document.getElementById('search');`.

Then we **set** the `,addEventListener()` **method** on `input`, which **_represents_** the `search input element` with the `id` **name** of `search` that we **just created**. The **first argument** we **_pass in_** to the `.addEventListener()` **method** is the `change` **event**, and the **second argument** we **_pass in_** to the `.addEventListener()` **method** is a **_reference_** to the `searchMonsters()` **function**. I will **_leave_** you to **implement** **_this_**.

And that is **_it_**!

What my **_completed_** **Monsters Search API Project 8** **_looks_** like:

![Monsters Search API Application without footer](/images/FireShot-Capture-018-Monsters-API-interglobalmedia.github.io.png)

What my **_completed_** **Monsters search API Project 8** **looks** like with a **_footer_**:

![Monsters Search API Application with footer](images/FireShot-Capture-032-Monsters-API-interglobalmedia.github.io.jpg)

## Week 10 Homework Part 2: Questions

1. What **_built-in_** **JavaScript** **_method_** **creates** an `HTML` **element** on the DOM? Please **_explain_** what it **does**. What is its **syntax**? What are the **parameters**? What is its **return value**? Please **provide** **_code_** from your `Monsters Search API` **app** as an **_example_** of **using** this **_built-in_** **method**.

2. What **_built-in_** **JavaScript** **_method_** **_sets_** the **value** of an **attribute** on a **_specified_** **element**? Please **_explain_** what it **does**. What is its **syntax**? What are its **parameters**? What **_exceptions_** can it **throw**? Please **provide** **_code_** used in the **Week 10 Homework** `README.md` as an **_example_** of how it **could** be **_used_** **dynamically** **_instead_** of the **approach** **_used_** in the **actual project** **_code_**.

3. What is the **_built-in_** **method** that allows you to **_add_** a `child node` to a `parent node`? Please explain what it does. What is its **syntax**? What are its **parameters**? What is its **return value**? Please **_provide_** **code** from your `Monsters Search API` **app** as an **_example_** of **using** this **_built-in_** **method**.

4. What is the **_built-in_** **method** that **_creates_** `text` **_inside_** an `Element Node`? Please explain what it does. What is its **syntax**? What are its **parameters**? What is its **return value**? Please provide a **code example** from the [Manipulating The DOM: Creating Elements, Setting Attributes, Appending Children](https://interglobalmedia.github.io/dom-create-elements-attributes/#//) **_slide deck_**.

5. **_Provide_** a **code example** that **_uses_** the `.createElement()` **method**, the `.createTextNode()` **method**, and the `.appendChild()` **method**, **_altogether_**. Explain what is **_going on_** with the **code**.

6. What `properties` do the **_same thing_** as the `.createTextNode()` **method**? And what is the **_difference_** between the **two properties**?

7. When is `.createTextNode()` **_preferable_** over `.innerHTML`?

8. Does order **_matter_** when **appending** child `nodes/elements` to their parent `node/element`? **_Why_**?

9. What does the `return statement` **_do_**?

10. What does the `console.log(monsters)` **called** **_right before_** the `monsters.map()` **method**, **print** out to the `Chrome Developer Tools` **console**? Please **copy** and **paste** it as your **_answer_** to this **question**.

11. What does the `console.log(monster)` **called** inside the `monsters.map()` **method**, at the **top**, **print** out to `Chrome Developer Tools` **console**? Please **copy** and **paste** it as your **_answer_** to this **question**.

## Related Resources

-   [JavaScript appendChild](https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/)

-   [Code Execution in Promise and using return statements: duplicate](https://stackoverflow.com/questions/42060975/code-execution-in-promise-and-using-return-statements)

-   [How to Use the JavaScript Fetch API to Get Data](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)

-   [Array.prototype.map() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

-   [JavaScript Array map() Method](https://www.w3schools.com/jsref/jsref_map.asp)

-   [Javascript set img src on stackoverflow](https://stackoverflow.com/questions/1232793/javascript-set-img-src)

-   [HTML DOM setAttribute() Method on W3Schools](https://www.w3schools.com/jsref/met_element_setattribute.asp)

-   [Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

-   [Event.preventDefault() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

-   [Browser default actions on JavaScript.info](https://javascript.info/default-browser-action)

-   [Handling Events: EJS Chapter 15](https://eloquentjavascript.net/15_event.html)

-   [JavaScript HTML DOM Node Lists on W3Schools](https://www.w3schools.com/js/js_htmldom_nodelist.asp)

-   [Difference between textContent vs innerText on stackoverflow](https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext)

-   [INNERTEXT VS. TEXTCONTENT](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)

-   [JavaScript String indexOf() Method on W3Schools](https://www.w3schools.com/jsref/jsref_indexof.asp)

-   [Should e.which be checked before e.keyCode or vice-versa? on stackoverflow](https://stackoverflow.com/questions/17478156/should-e-which-be-checked-before-e-keycode-or-vice-versa)

-   [Window: load event on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
