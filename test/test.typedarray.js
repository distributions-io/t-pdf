/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {
	var validationData = require( './fixtures/typedarray.json' ),
		v = validationData.v;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Student t pdf', function test() {
		var data, actual, expected, i;

		data = new Float64Array( validationData.data );
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, v );

		expected = new Float64Array( validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}) );

		for ( i = 0; i < actual.length; i++ ) {
			if ( isFiniteNumber( actual[ i ] )&& isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual[ i ], expected[ i ], 1e-14 );
			}
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), v ), new Int8Array() );
	});

});
