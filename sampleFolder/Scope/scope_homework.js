{
  // Ámbito de bloque
  var blockVar = "Soy un var con ámbito de bloque";
  let blockLet = "Soy un let con ámbito de bloque";
  const blockConst = "Soy un const con ámbito de bloque";
  
  blockVar = "ser reasignada";
  blockLet = "yo también";
  // blockConst = "piénsalo dos veces";
}

// Ámbito global
blockVar = "Soy una variable global";
blockLet = "También soy global, pero con ámbito de let";
blockConst = "Soy una constante global";
