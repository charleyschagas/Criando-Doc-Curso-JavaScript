linhas (15 sloc)  463 Bytes

function  substituiNumerosPares ( array )  {
	if  ( ! array . length )  retorna  console . log ( -1 ) ; _

	const  naoZero  =  ( num )  =>  num  !==  0 ;
	const  numPar  =  ( num )  =>  num  %  2  ===  0 ;

	for  ( deixe  i  =  0 ;  i  <  array . length ;  i ++ )  {
		if  ( numPar ( array [ i ] )  &&  naoZero ( array [ i ] ) )  {
			consola . log ( `trocando ${ array [ i ] } por 0...` ) ;
			matriz [ i ]  =  0 ;
		}  else  if  ( ! naoZero ( array [ i ] ) )  {
			consola . log ( 'Ops, você já vale 0!' ) ;
		}
	}
	consola . log ( array ) ;
}

NúmerosPares ( substituição [ 2 ,  0 ,  3 ,  5 ] ) ;

