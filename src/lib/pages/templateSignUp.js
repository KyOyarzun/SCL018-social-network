export const drawSignUp= () =>{
    const draw = document.createElement("div");
  const templatePageSignUp =`
    <section>
      <h1>Registrate</h1>
      <input type="text" placeholder="Ingresa tu nombre">
      <input type="text" placeholder="Ingresa tu correo electrónico">
      <input type="text" placeholder="Ingresa tu clave">
      <button id="buttonSignUp">Registrate</button>
      <a href="lib/pages/templatesWall.js">Inicia sesíon aquí</a>
    </section>
  `
  caca.innerHTML=templatePageSignUp;
  return draw;
};
