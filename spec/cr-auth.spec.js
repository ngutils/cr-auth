describe("cr-auth module", function(){

    beforeEach(function(){
        module('cr.auth');
    });

    it('can get an instance of crAuthBase service', inject(function(crAuthBasic) {
        expect(crAuthBasic).toBeDefined();
    }));


});
