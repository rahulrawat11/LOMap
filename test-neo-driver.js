var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "gnow"));
var session = driver.session();

var dump = { 
    onNext: function(record) { console.log(record.keys, record.length, record._fields, record._fieldLookup); }, 
    onCompleted: function() { console.log("Completed"); }, 
    onError: console.log 
}
session.run("MATCH (n) RETURN COUNT(*)").subscribe(dump);

var counter = function() { 
  var start = Date.now();
  return {
    count : 0,
    onNext: function(r) { this.count++; },
    onCompleted: function() { console.log("rows",this.count,"took",(Date.now()-start)); }}
};

session.run("MATCH (n) RETURN id(n)").subscribe(counter());
session.run("MATCH (n)-->(m) RETURN id(n),id(m)").subscribe(counter());

session.run("MATCH (n:User) RETURN id(n)").subscribe(counter());
