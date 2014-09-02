describe("Пользователь(User)", function(){
    var user = new User();
    it('Имя по умолчанию `User`', function(){
       expect(user.getName()).toEqual('User');
    });
    it('Установить имя `Гоша`', function(){
       user.setName('Гоша')
       expect(user.getName()).toEqual('Гоша');
    });
});