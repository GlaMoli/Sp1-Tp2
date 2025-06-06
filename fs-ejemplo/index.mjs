
import fs from 'fs';

// Leer un archivo de manera asincrona
fs.readFile('./fs-ejemplo/data/example.txt', 'utf8', (err,data) => {
    if (err) throw err;
    console.log('Contenido del archivo:',data);
});

// Escribir en un nuevo archivo
fs.writeFile('./fs-ejemplo/data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});

// Renombrar un archivo 
fs.rename('./fs-ejemplo/data/newfile.txt', './fs-ejemplo/data/renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});
