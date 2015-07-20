'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( v )
*	Partially applies degrees of freedom `v` and returns a function for evaluating the probability density function (PDF) for a Student t distribution.
*
* @param {Number} v - degrees of freedom
* @returns {Function} PDF
*/
function partial( v ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Student t distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
