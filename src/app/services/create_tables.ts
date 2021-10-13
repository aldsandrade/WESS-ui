// import { Connect, Query } from './db';
import { Connect, queryVolumes } from './db';

function createMonitoringTable() {
    console.log('Criando tabela **MONITORING**');

    Connect().then(connection => {
        queryVolumes(connection)
            .then(results => {
                console.log('TABELA **MONITORING** CRIADA COM SUCESSO');
            }).catch(error => {
                console.log('Erro ao criar a tabela **MONITORING**');
            }).finally(() => {
                connection.end();
            })
    }).catch(error => {
        console.log('Erro ao criar a tabela **MONITORING**');
    })
}

export default { createMonitoringTable };