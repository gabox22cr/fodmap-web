const snackData = {
  "ligera": {
    bases: {
      "Fruta baja en FODMAP": [],
      "Yogur sin lactosa": [
        "Fresas frescas",
        "Uvas",
        "Semillas de chía",
        "Jalea casera de fresa"
      ],
      "Batido con fruta baja en FODMAP y agua": [
        "Semillas de chía"
      ]
    }
  },
  "pre-entreno": {
    bases: {
      "Fruta baja en FODMAP": [],
      "Panqueques sin gluten (1–2 unidades pequeñas)": [
        "Jalea casera de fresa",
        "Jalea casera de piña",
        "Jalea casera de arándanos",
        "Jalea casera de naranja",
        "Jalea casera de kiwi",
        "Jalea de banano (según tolerancia)",
        "Mantequilla de maní (1 cucharada)",
        "Fresas frescas"
      ],
      "Galletas de arroz": [
        "Mantequilla de maní (1 cucharada)",
        "Jalea casera de fresa",
        "Jalea casera de piña"
      ]
    }
  },
  "saciedad": {
    bases: {
      "Yogur sin lactosa": [
        "Fresas frescas",
        "Uvas",
        "Semillas de chía",
        "Linaza"
      ],
      "Panqueques sin gluten (1–2 unidades pequeñas)": [
        "Jalea casera de fresa",
        "Jalea casera de piña",
        "Jalea casera de arándanos",
        "Jalea casera de naranja",
        "Jalea casera de kiwi",
        "Mantequilla de maní (1 cucharada)"
      ],
      "Tortillas pequeñas": [
        "Queso sin lactosa",
        "Mantequilla de maní (1 cucharada)"
      ]
    }
  }
};

function llenarOpciones(select, opciones, placeholder) {
  select.innerHTML = "";

  const optionInicial = document.createElement("option");
  optionInicial.value = "";
  optionInicial.textContent = placeholder;
  select.appendChild(optionInicial);

  opciones.forEach(opcion => {
    const option = document.createElement("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
  });
}

function actualizarBasesSnack() {
  const tipo = document.getElementById("snack-type").value;
  const baseSelect = document.getElementById("snack-base");
  const extraSelect = document.getElementById("snack-extra");
  const resultado = document.getElementById("resultado-snack");

  extraSelect.disabled = true;
  extraSelect.innerHTML = '<option value="">Primero selecciona una base</option>';

  if (!tipo) {
    baseSelect.disabled = true;
    baseSelect.innerHTML = '<option value="">Primero selecciona un tipo</option>';
    resultado.textContent = "Selecciona un tipo de merienda para comenzar.";
    return;
  }

  const bases = Object.keys(snackData[tipo].bases);
  llenarOpciones(baseSelect, bases, "Selecciona una base");
  baseSelect.disabled = false;

  resultado.textContent = "Ahora selecciona una base de merienda.";
}

function actualizarExtrasSnack() {
  const tipo = document.getElementById("snack-type").value;
  const base = document.getElementById("snack-base").value;
  const extraSelect = document.getElementById("snack-extra");
  const resultado = document.getElementById("resultado-snack");

  if (!tipo || !base) {
    extraSelect.disabled = true;
    extraSelect.innerHTML = '<option value="">Primero selecciona una base</option>';
    resultado.textContent = "Selecciona una base de merienda.";
    return;
  }

  const extras = snackData[tipo].bases[base];

  if (!extras || extras.length === 0) {
    extraSelect.disabled = true;
    extraSelect.innerHTML = '<option value="">Sin acompañamiento sugerido</option>';
    resultado.textContent = `Tu merienda: ${base}.`;
    return;
  }

  llenarOpciones(extraSelect, extras, "Selecciona un acompañamiento");
  extraSelect.disabled = false;
  resultado.textContent = `Has elegido como base: ${base}. Ahora puedes agregar un acompañamiento.`;
}

function actualizarSnack() {
  const tipo = document.getElementById("snack-type").value;
  const base = document.getElementById("snack-base").value;
  const extra = document.getElementById("snack-extra").value;
  const resultado = document.getElementById("resultado-snack");

  if (tipo && base && extra) {
    resultado.textContent = `Tu merienda ideal: ${base} acompañado de ${extra}.`;
  } else if (tipo && base) {
    resultado.textContent = `Tu merienda ideal: ${base}.`;
  } else if (tipo) {
    resultado.textContent = "Selecciona una base de merienda.";
  } else {
    resultado.textContent = "Selecciona un tipo de merienda para comenzar.";
  }
}

function actualizarDesayuno() {
  const harina = document.getElementById("desayuno-harina").value;
  const proteina = document.getElementById("desayuno-proteina").value;
  const grasa = document.getElementById("desayuno-grasa").value;
  const bebida = document.getElementById("desayuno-bebida").value;
  const resultado = document.getElementById("resultado-desayuno");

  if (harina && proteina && grasa && bebida) {
    resultado.textContent = `Tu desayuno elegido: ${harina} + ${proteina} + ${grasa} + ${bebida}.`;
  } else {
    resultado.textContent = "Selecciona opciones para armar tu desayuno.";
  }
}





const almuerzoData = {
  pollo: [
    "Pechuga de pollo a la plancha (150 g)",
    "Pollo mechado en salsa de tomate casera (sin ajo ni cebolla)",
    "Pollo al horno con condimentos suaves (150 g)",
    "Fajitas de pollo con condimentos suaves (150 g)",
    "Pollo mechado en salsa de tomate casera sin ajo ni cebolla (150 g)"
  ],
  res: [
    "Carne magra de res asada (150 g)",
    "Carne en salsa de tomate casera (sin ajo ni cebolla)",
    "Posta de res a la plancha (150 g)",
    "Filet de lomito a la plancha (100 g)",
    "Fajitas de res plancha (100 g)",
    "Carne molida magra bien cocida (150 g)"
  ],
  pescado: [
    "Pescado a la plancha (150 g)",
    "Pescado al horno con hierbas suaves (150 g)",
    "Filete de pescado al sartén (150 g)"
  ]
};

function actualizarProteinasAlmuerzo() {
  const tipo = document.getElementById("almuerzo-tipo-proteina").value;
  const proteinaSelect = document.getElementById("almuerzo-proteina");
  const resultado = document.getElementById("resultado-almuerzo");

  if (!tipo) {
    proteinaSelect.disabled = true;
    proteinaSelect.innerHTML = '<option value="">Primero selecciona un tipo</option>';
    resultado.textContent = "Selecciona un tipo de proteína para comenzar.";
    return;
  }

  const opciones = almuerzoData[tipo];
  llenarOpciones(proteinaSelect, opciones, "Selecciona una proteína");
  proteinaSelect.disabled = false;

  resultado.textContent = "Ahora selecciona la proteína principal de tu almuerzo.";
}

function actualizarAlmuerzo() {
  const proteina = document.getElementById("almuerzo-proteina").value;
  const almidon = document.getElementById("almuerzo-almidon").value;
  const vegetales = document.getElementById("almuerzo-vegetales").value;
  const grasa = document.getElementById("almuerzo-grasa").value;
  const resultado = document.getElementById("resultado-almuerzo");

  if (proteina && almidon && vegetales && grasa) {
    resultado.textContent = `Tu almuerzo ideal: ${proteina} + ${almidon} + ${vegetales} + ${grasa}.`;
  } else if (proteina && almidon && vegetales) {
    resultado.textContent = `Tu almuerzo va muy bien: ${proteina} + ${almidon} + ${vegetales}. Solo falta elegir una grasa.`;
  } else if (proteina && almidon) {
    resultado.textContent = `Llevas: ${proteina} + ${almidon}. Ahora agrega vegetales y una grasa.`;
  } else if (proteina) {
    resultado.textContent = `Has elegido: ${proteina}. Ahora selecciona el acompañamiento de tu almuerzo.`;
  } else {
    resultado.textContent = "Selecciona un tipo de proteína para comenzar.";
  }
}

document.getElementById("almuerzo-tipo-proteina").addEventListener("change", () => {
  actualizarProteinasAlmuerzo();
});

document.getElementById("almuerzo-proteina").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-almidon").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-vegetales").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-grasa").addEventListener("change", actualizarAlmuerzo);





const cenaData = {
  res: [
    "Carne magra de res asada (100 g)",
    "Carne en salsa de tomate casera (sin ajo ni cebolla)",
    "Posta de res a la plancha (100 g)",
    "Filet de lomito a la plancha (100 g)",
    "Fajitas de res plancha (100 g)",
    "Lasagna de carne molida (150 g) con Zucchini (100g)"
  ],
  pollo: [
    "Pollo a la plancha (100 g)",
    "Pollo mechado en salsa de tomate casera (sin ajo ni cebolla)",
    "Pollo al horno con condimentos suaves (100 g)",
    "Fajitas de pollo con condimentos suaves (150 g)",
    "Pollo mechado en salsa de tomate casera sin ajo ni cebolla (150 g)",
    "Lasagna de pollo (150 g) con Zucchini (100g)"
  ],
  pescado: [
    "Pescado al horno (100 g)",
    "Filete de pescado a la plancha (100 g)",
    "Pescado con hierbas suaves (100 g)"
  ]
};

function actualizarProteinasCena() {
  const tipo = document.getElementById("cena-tipo-proteina").value;
  const proteinaSelect = document.getElementById("cena-proteina");
  const resultado = document.getElementById("resultado-cena");

  if (!tipo) {
    proteinaSelect.disabled = true;
    proteinaSelect.innerHTML = '<option value="">Primero selecciona un tipo</option>';
    resultado.textContent = "Selecciona un tipo de proteína para comenzar.";
    return;
  }

  const opciones = cenaData[tipo];
  llenarOpciones(proteinaSelect, opciones, "Selecciona una proteína");
  proteinaSelect.disabled = false;

  resultado.textContent = "Ahora selecciona la proteína principal de tu cena.";
}

function actualizarCena() {
  const proteina = document.getElementById("cena-proteina").value;
  const harina = document.getElementById("cena-harina").value;
  const vegetal = document.getElementById("cena-vegetal").value;
  const resultado = document.getElementById("resultado-cena");

  if (proteina && harina && vegetal) {
    resultado.textContent = `Tu cena ideal: ${proteina} + ${harina} + ${vegetal}.`;
  } else if (proteina && harina) {
    resultado.textContent = `Llevas: ${proteina} + ${harina}. Ahora agrega un vegetal.`;
  } else if (proteina) {
    resultado.textContent = `Has elegido: ${proteina}. Ahora selecciona el acompañamiento de tu cena.`;
  } else {
    resultado.textContent = "Selecciona un tipo de proteína para comenzar.";
  }
}

document.getElementById("cena-tipo-proteina").addEventListener("change", () => {
  actualizarProteinasCena();
});

document.getElementById("cena-proteina").addEventListener("change", actualizarCena);
document.getElementById("cena-harina").addEventListener("change", actualizarCena);
document.getElementById("cena-vegetal").addEventListener("change", actualizarCena);




document.getElementById("snack-type").addEventListener("change", () => {
  actualizarBasesSnack();
});
document.getElementById("snack-base").addEventListener("change", () => {
  actualizarExtrasSnack();
  actualizarSnack();
});
document.getElementById("snack-extra").addEventListener("change", actualizarSnack);

document.getElementById("desayuno-harina").addEventListener("change", actualizarDesayuno);
document.getElementById("desayuno-proteina").addEventListener("change", actualizarDesayuno);
document.getElementById("desayuno-grasa").addEventListener("change", actualizarDesayuno);
document.getElementById("desayuno-bebida").addEventListener("change", actualizarDesayuno);

document.getElementById("almuerzo-proteina").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-almidon").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-vegetales").addEventListener("change", actualizarAlmuerzo);
document.getElementById("almuerzo-grasa").addEventListener("change", actualizarAlmuerzo);

document.getElementById("cena-proteina").addEventListener("change", actualizarCena);
document.getElementById("cena-harina").addEventListener("change", actualizarCena);
document.getElementById("cena-vegetal").addEventListener("change", actualizarCena);

const recipeTabButtons = document.querySelectorAll(".recipe-tab-btn");
const recipeTabPanels = document.querySelectorAll(".recipe-tab-panel");

recipeTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    recipeTabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    recipeTabPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const activePanel = document.getElementById(`tab-${selectedTab}`);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});