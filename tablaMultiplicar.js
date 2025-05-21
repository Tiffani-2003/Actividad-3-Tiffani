let numero = prompt("Escribe un número para ver su tabla de multiplicar:");
numero = Number(numero);

console.log(`Tabla del ${numero}:`);
for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
