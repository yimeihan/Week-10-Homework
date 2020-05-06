const ul = document.getElementById("monsters");
const dataUrl = "https://jsonplaceholder.typicode.com/users";

function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  parent.appendChild(el);
}

function fetchMonsters() {
  fetch(dataUrl)
    .then(res => res.json())
    .then(users => {
      users.map(monster => {
        console.log(monster);
        let li = createNode("li");
        let img = createNode("img");
        let div = createNode("div");

        img.addEventListener("load", function() {
          console.log(`Image has completed loading!`);
          div.innerHTML = `${monster.name} ${monster.email}<br/> 
                ${monster.address.street} ${monster.address.suite}<br/>
                ${monster.address.city} ${monster.address.zipcode}`;
          append(li, img);
          append(li, div);
          append(ul, li);
        });
        const imageUrl = `https://robohash.org/${monster.id}?set=set3&size=300x300`;
        img.src = `${imageUrl}`;
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function searchMonsters() {
  let input = document.getElementById("search");
  let filter = input.value.toLowerCase();
  let items = document.querySelectorAll("#monsters li");
  for (let i = 0; i < items.length; i++) {
    let div = items[i].getElementsByTagName("div")[0];
    let txtValue = div.textContent || div.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    //   input.addEventListener("keydown", function(e) {
    //     const chord = e.keyCode || e.which;
    //     if (chord === 8) {
    //       e.preventDefault();
    //       e.currentTarget.value = "";
    //       window.location.reload();
    //     }
    //   });
    } else {
      items[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchMonsters();

  const input = document.getElementById("search");
  input.addEventListener("change", searchMonsters);
});
