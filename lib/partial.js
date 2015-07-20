'use strict';

// MODULES //

var beta = require( 'compute-beta/lib/number-number.js' );


// FUNCTIONS //

var pow = Math.pow,
	sqrt = Math.sqrt;


// PARTIAL //

/**
* FUNCTION: partial( v )
*	Partially applies degrees of freedom `v` and returns a function for evaluating the probability density function (PDF) for a Student t distribution.
*
* @param {Number} v - degrees of freedom
* @returns {Function} PDF
*/
function partial( v ) {
	var betaTerm =  sqrt(v) * beta( v/2, 0.5 ),
		exponent =  ( 1 + v ) / 2;
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Student's t distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		return pow( v / ( v + pow( x, 2 ) ), exponent ) / betaTerm;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
