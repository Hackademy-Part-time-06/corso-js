"use strict"

let modale= document.createElement("div")
document.body.append(modale)
modale.innerHTML= `<div class="modal" id="modale" tabindex="-1">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Cookie Banner</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae iure corporis commodi maxime in. Quibusdam pariatur ipsum voluptas, voluptatum porro maxime aperiam sint dolorum sit. Voluptatem ipsa necessitatibus ipsam adipisci.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Rifiuta</button>
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="pulsante_accetta">Accetta</button>
    </div>
  </div>
</div>
</div>`
modale= new bootstrap.Modal(document.getElementById('modale'))
modale.show()
let pulsanteAccetta = document.getElementById("pulsante_accetta")
pulsanteAccetta.addEventListener("click",function(evento){
  let paginaNuova = document.createElement("script")
  document.body.append(paginaNuova)
  paginaNuova.setAttribute("src","javas/analytics.js")
})
function stronzo(){
  alert("ciao stronzo")
}