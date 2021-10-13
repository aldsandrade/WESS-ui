const mysql = require('mysql');

const pool = mysql.createPool({
	host: 'us-cdbr-east-04.cleardb.com',
	user: 'b7a968139deee5',
	password: 'da64a6d5',
	database: 'heroku_99c310fb1abd7e2'
});

module.exports = {
    /**
     * Função que verifica o volume de todos os recipientes
     * @returns volumes
     */
	queryVolumes: function() {
        return new Promise((resolve, reject) => {
            pool.getConnection(function(error, connection) {
                if (error) {
                    console.error(error);
                    callback(true);
                    reject();
                }
    
                let sql = 'SELECT * FROM monitoramento';
    
                connection.query(sql, [], function(error, results) {
                    if (error) {
                        console.error(error);
                        callback(true);
                        reject();
                    }
                    resolve(results);
                });
                
            });
        });
	},
    /**
     * Função que verifica se existe um registro de volume economizado no dia
     * @param {number} volume volume obtido no dia
     * @param {Date} data dia em que a economia foi realizada
     * @returns {Object} data e quantiade de litros
     */
     queryEconomiaRealizada: function(data) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function(error, connection) {
                if (error) {
                    console.error(error);
                    callback(true);
                    reject();
                }
    
                let sql = 'SELECT * from economia_realizada WHERE data = ?';
    
                connection.query(sql, [data], function(error, results) {
                    if (error) {
                        console.error(error);
                        callback(true);
                        reject();
                    }
                    resolve(results);
                });
            });
        })
	},
};
