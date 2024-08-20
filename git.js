// const btn = document.getElementById("Repobtn");
// btn.addEventListener("click", supdawg);
// function supdawg() {
//   alert("sup dawg");
// }

let gee = new Promise((resolve, reject) => {
  let a = 2 + 23;
  if (a === 5) {
    resolve("donezo");
  } else {
    reject("check your code bruv");
  }
});

gee
  .then((message) => {
    console.log(`well ${message}`);
  })
  .catch((message) => {
    console.log(message);
  });

async function ninja(gee) {
  try {
    const answer = await gee;
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
}
ninja(gee);
