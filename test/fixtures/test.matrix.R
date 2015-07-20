options( digits = 16 );
library( jsonlite );

v = 1
x = 0:24
y = dt( x, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )