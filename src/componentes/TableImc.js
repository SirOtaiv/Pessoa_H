
//Const function para validar a classificação
const imcTabel = (imc) => {
    if (imc >= 18.5 && imc < 30) {
      return {
        text: "Peso Normal",
        colorBg: "#80bf66",
        colorTxt: "#2d501e"
      };
    } else if (imc >= 30 && imc < 35) {
      return {
        text: "Excesso de Peso",
        colorBg: "#fcbd16",
        colorTxt: "#5e470b"
      };
    } else if (imc >= 30 && imc < 35) {
      return {
        text: "Obesidade Grau 1",
        colorBg: "#df1f12",
        colorTxt: "#500807"
      };
    } else if (imc >= 35 && imc < 40) {
      return {
        text: "Obesidade Grau 2",
        colorBg: "#b21d17",
        colorTxt: "#4a0a09"
      };
    } else if (imc >= 40) {
      return {
        text: "Obesidade Mórbida",
        colorBg: "#801711",
        colorTxt: "#e45c54"
      };
    } else {
      return {
        text: "Baixo Peso",
        colorBg: "#1655fc",
        colorTxt: "#072548"
      }
    }
  }

export default imcTabel