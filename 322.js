let input = document.getElementById("input");
let value;
let dataContent = document.getElementById("datacontent");
let result = document.getElementById('accordion');
let temp = 0;

function clearAll(){
    input.value = "";
    input.focus();
}

function search(){
    value = input.value.toLowerCase();
    content = dataContent.innerText;
    temp = 0;
    result.innerHTML += ``;

    while(content.indexOf(value) != -1){
        temp++;
        result.innerHTML += `
        <div class="card">
          <div class="card-header p-0" id="heading${temp}">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed w-100 p-2" data-toggle="collapse" data-target="#collapse${temp}" aria-expanded="false" aria-controls="collapse${temp}">
                Collapsible Group Item #${temp}
              </button>
            </h5>
          </div>
      
          <div id="collapse${temp}" class="collapse" aria-labelledby="heading${temp}" data-parent="#accordion">
            <div class="card-body"><pre id="resultData${temp}">
            ${content.substr(content.indexOf(value)-50,30000)}
            </pre></div>
          </div>
        </div>
        
        `;
        // let shine = new Mark(document.getElementById(`resultData${temp}`))
        // shine.unmark();
        // shine.mark(
        //     value,{className:"highlight"}
        // )

        content = content.substr(content.indexOf(value)+1)
    }

}