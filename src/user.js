var User = function(){
    this.name = 'User';
};

User.prototype.getName = function() {
    return this.name;
};
User.prototype.setName = function(name) {
    this.name = name;
};
