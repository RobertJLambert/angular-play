var app = angular.module( "instantSearch", [])

app.filter( 'searchFor', function()
{
	return function( arr, searchString )
  {
		if( !searchString )
			return arr

		var result = []

		searchString = searchString.toLowerCase()

		angular.forEach( arr, function( item )
		{
			if( item.name.toLowerCase().indexOf( searchString ) !== -1 ) {
				result.push( item )
			}
		})

		return result
	}
})

// controller
function instantSearchController( $scope )
{
  // Items array
  $scope.items =
  [
    {
      name: '牛乳 ぎゅうにゅう gyuunyuu - Cow\'s milk',
      price: 1
    },
    {
      name: 'パン pan - Bread',
      price: 1.20
    },
    {
      name: '卵 たまご tamago - Eggs',
      price: 1.80
    },
    {
      name: '寿司 すし - Sushi',
      price: 6.95
    },
    {
      name: '枝豆 えだまめ - Edamame',
      price: 2.99
    },
    {
      name: '米 こめ come - Rice',
      price: 1.35
    },
    {
      name: 'チョコ chyoko - Chocolate',
      price: 1.88
    },
    {
      name: '豚肉 ぶたにく butaniku - Pork',
      price: 3.19
    },
    {
      name: '豚カツ とんかつ tonkatsu - Breaded Pork Cutlet',
      price: 4.95
    }
  ]


  // Active toggle
	$scope.toggleActive = function( s )
  {
		s.active = !s.active
	}

  // Total calculation
	$scope.total = function()
  {
		var total = 0

		angular.forEach( $scope.items, function( s )
    {
			if ( s.active )
				total += s.price
		})

		return total
	}

  $scope.addName = function()
  {
    $scope.items.push( $scope.enteredName )
	
				result.push( $scope.enteredName )
    //$scope.enteredName = ''
  }

  // appa.controller( 'instantSearchController', function( $scope, $http ) {
  //   $http.get( "json/items.json" ).then( function ( response ) {
  //       $scope.items = response.data.records;
  //   })
  // })
}
