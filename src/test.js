import foo from '.';

foo.__Rewire__('fooHelper', function() { return 'rewired foo'; });

foo();
