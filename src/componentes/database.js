import * as SQLite from 'expo-sqlite';

const dbCon = SQLite.openDatabase('historico.db');

export const criarTabela = () => {
  dbCon.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS hist (id INTEGER PRIMARY KEY autoincrement, nome TEXT, peso REAL, altura REAL, imc REAL);'
    );
  });
  closeAsync();
};

export const addDados = (nome, peso, altura, imc) => {
  dbCon.transaction(tx => {
    tx.executeSql('INSERT INTO hist (nome, peso, altura, imc) VALUES (?, ?, ?, ?);', [nome, peso, altura, imc]);
  });
};

export function rmvDados() {
  return new Promise((resolve, reject) => {
    dbCon.transaction((tx) => {
      tx.executeSql('DELETE FROM hist;', [], (_, resultado) => {
        resolve(resultado)
      }, (_, error) => {
        reject(error)
      });
    });
  });
  closeAsync();
}

export const listarHist = () => {
  return new Promise((resolve, reject) => {
    dbCon.transaction(tx => {
      tx.executeSql('SELECT * FROM hist;', [], (info,{rows}) => {
        resolve(rows);
      });
    });
  });
};

export function baseData() {
  listarHist().then(lista => {
    for(let i = 0; i < lista.length - 1; i++){
      console.log(lista._array[i].nome)
    }
  })
}
