QUnit.module( "Group 01", function(hooks){
   
    hooks.before( function( assert ) {
        console.log('one time called');
        assert.ok( true, "one time called" );
    });

    hooks.after( function( assert ) {
        console.log('last time called');
        assert.ok( true, "last time called" );
    });

    hooks.beforeEach( function( assert ) {
        console.log('beforeEach called');
        assert.ok( true, "beforeEach called" );
    });

    hooks.afterEach( function( assert ) {
        console.log('afterEach called');
        assert.ok( true, "afterEach called" );
    });

    QUnit.test( "Group 01 - Test 01", function( assert ) {
        console.log('Group 01 - Test 01');
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test( "Group 01 - Test 02", function( assert ) {
        console.log('Group 01 - Test 02');
        assert.ok( 1 == "1", "Passed!" );
    });
});