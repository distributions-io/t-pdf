options( digits = 16 );
library( jsonlite );


v = 5
x = seq( -1000, 1000, 0.5 )
y = dt( x, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
