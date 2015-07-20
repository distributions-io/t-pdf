'use strict';

// MODULES //

var beta = require( 'compute-beta/lib/number-number.js' );


// FUNCTIONS //

var pow = Math.pow,
	sqrt = Math.sqrt;


// PDF //

/**
* FUNCTION: pdf( x, v )
*	Evaluates the probability density function (PDF) for a Student t distribution with degrees of freedom `v` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} v - degrees of freedom
* @returns {Number} evaluated PDF
*/
function pdf( x, v ) {
	return pow( v / ( v + pow( x, 2 ) ), ( 1 + v ) / 2 ) / ( sqrt(v) * beta( v/2, 0.5 ) );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
