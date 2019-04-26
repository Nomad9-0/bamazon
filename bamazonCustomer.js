var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     :  3306,  
    user     : 'root',
    //Your Password
    password : '************',
    database : 'bamazon_DB'
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

// query the database for all items
function start() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, results) {
        if (err) throw err;
        console.table(results);
        // prompt the user
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++){
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What item would you like to purchase?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                }
            ]).then(function(answer) {
                // get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.choice) {
                        chosenItem = results[i];
                        console.table(chosenItem);
                    }
                }
                //chosenItem.stock_quantity
                if (chosenItem.stock_quantity > answer.quantity) {
                // update db and start over
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity:chosenItem.stock_quantity-answer.quantity
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                          ],
                        function(error) {
                            if (error) throw err;
                            console.log("Item Purchased!");
                            console.log("-------------------------------------------");
                            start();
                        }  
                    );
                    //console.log(chosenItem);
                }else {
                    console.log('Insufficient quantity!');
                    console.log("-------------------------------------------");
                    start();
                }
            });
    });    
}