
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let genBtn = document.querySelector("#gen-btn");

genBtn.addEventListener("click", (e) => {
  genBtn.style.boxShadow = "none";
  let Inpvalue;
  let duplicateVal = [];
  let xml;

  try {
    Inpvalue = JSON.parse(input.value);
  } catch (error) {
    alert("Please enter valid JSON data");
  }
  if (Inpvalue) {
    xml = Inpvalue.map((obj, i, arr) => {
      duplicateVal.push(obj.id);
      let { id, username, video_name, action } = obj;
      return `<div class="root" data-id=${id}>
            <span class="username">${username}</span>
            <span class="video_name">${video_name}</span>
            <span class="additional_details">
              <span class="type">${action}</span>
            </span>
          </div>
          `;
    });
  }
  let set = new Set(duplicateVal);
  if (duplicateVal.length != set.size) {
    alert("JSON data has duplicate values");
  } else {
    output.innerHTML = xml;
  }
});
