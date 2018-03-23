QUnit.module( "Group 01", function(){
    QUnit.test( "Group 01 - Test 01", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test( "Group 01 - Test 02", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test( "Group 01 - Test 03", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.module( "Group 01 - Sub Group 01", function(){
        QUnit.test( "Group 01 - Sub Group 01 - Test 01", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });
    
        QUnit.test( "Group 01 - Sub Group 01 - Test 02", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });
    
        QUnit.test( "Group 01 - Sub Group 01 - Test 03", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });

        QUnit.module( "Group 01 - Sub Group 01 - Sub Sub Group 01", function(){
            QUnit.test( "Group 01 - Sub Group 01 - Sub Sub Group 01 - Test 01", function( assert ) {
                assert.ok( 1 == "1", "Passed!" );
            });
        
            QUnit.test( "Group 01 - Sub Group 01 - Sub Sub Group 01 - Test 02", function( assert ) {
                assert.ok( 1 == "1", "Passed!" );
            });
        
            QUnit.test( "Group 01 - Sub Group 01 - Sub Sub Group 01 - Test 03", function( assert ) {
                assert.ok( 1 == "1", "Passed!" );
            });
        });
    });

    QUnit.module( "Group 01 - Sub Group 02", function(){
        QUnit.test( "Group 01 - Sub Group 02 - Test 01", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });
    
        QUnit.test( "Group 01 - Sub Group 02 - Test 02", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });
    
        QUnit.test( "Group 01 - Sub Group 02 - Test 03", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
        });
    });
});
