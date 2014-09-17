describe("cr-auth module", function(){
    
    beforeEach(function(){
        module('cr.auth');
    });
    
    it('can get an instance of $crAuth Base64 provider', inject(function($crAuthBasic) {
        expect($crAuthBasic).toBeDefined();
    }));
    

});
