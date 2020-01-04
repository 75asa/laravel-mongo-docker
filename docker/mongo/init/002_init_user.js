let testdb = db.getSiblingDB('test');
testdb.createUser({
  user: 'test',
  pwd: 'password',
  roles: [{
    role: 'readWrite',
    db: 'test'
  }]
});
testdb.getUsers();
