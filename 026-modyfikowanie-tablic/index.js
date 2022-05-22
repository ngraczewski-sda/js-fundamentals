const luckyNames = ["Zbigniew", "Jadwiga", "Ferdynanda"];

luckyNames.push("Antoni", "Maksymiliana");

const jadwigasIndex = luckyNames.indexOf("Jadwiga");

luckyNames[jadwigasIndex] = "Genowefa";

console.log(luckyNames);
