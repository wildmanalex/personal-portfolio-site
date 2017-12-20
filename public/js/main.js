var myRouter = new VueRouter({
    routes: [

        {
            path: '/work',

            component: function(resolve, reject){
				// console.log('fdsfds')
                $.get('/html/workcopy.html', function(htmlFromServer){
					console.log(htmlFromServer)
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the about component')},
                        destroyed: function(){ console.log('destroyed the about component')}
                    }
					// console.log(newComponent)
                    resolve(newComponent)
                })
            }
        },
		{
			path: '/about',
			component:function(resolve, reject){
				$.get('/html/about.html', function(htmlFromServer){
					console.log('got to about reequest')
					var newComponent = {
						template: htmlFromServer,
						created: function(){ console.log('created the about component')},
						destroyed: function(){ console.log('destroyed the about component')}
					}
					resolve(newComponent)
				})
			},
			scrollBehavior (to, from, savedPosition) {
		  return { x: 0, y: 500 }
	  },
		},
    ],

})


var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {

    },

})
