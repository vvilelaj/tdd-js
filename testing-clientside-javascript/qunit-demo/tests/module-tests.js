QUnit.module( "group a");

QUnit.test( "hello modules", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "second hi to modules", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "every test after module definition inherits its module name", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});