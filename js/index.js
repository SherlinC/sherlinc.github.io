var s = skrollr.init({
	render: function(data) {
	  //Log the current scroll position.
	  $('#info').text(data.curTop);
	  $('#info');
	}
});
//第一个从右往左
$(function () { // wait for document ready
				var lungpath = {
								entry : {
									// curviness:0.1,
									// autoRotate: true,
									values: [
										
										// {x: 850,	y: 400},
										// 	{x: 850,	y: 400},
											{x: 1050,	y: 400},
										
										
									
										]
								},
						
								leave : {
									// curviness: 1.05,
									// autoRotate: true,
									values: [
									
											{x: 650,	y: 400},
											{x: 650,	y: 400},
											{x: 650,	y: 400},
											{x: 550,	y: 400},	
											{x: 550,	y: 500},
											{x: 450,	y: 500},
											{x: 430,	y: 500},	
									    	{x: 430,	y: 500},
									    	{x: 420,	y: 500},
									    	{x: 400,	y: 500},
											{x: 400,	y: 500},
											{x: 300,	y: 500},
										    {x: 300,	y: 550},		
				                            {x: 300 ,	y: $(window).height()+400},
										]
								}
							};
							// init controller
							var controller = new ScrollMagic.Controller();

							// create tween
							var tween = new TimelineMax()
								.add(TweenMax.to($("#lung"), 0, {css:{bezier:lungpath.entry}, ease:Power1.easeInOut}))
							
								.add(TweenMax.to($("#lung"), 1, {css:{bezier:lungpath.leave}, ease:Power1.easeInOut}));

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1", duration: 5000, offset: 200})
											.setPin("#target1")
											.setTween(tween)
											.addIndicators() // add indicators (requires plugin)
											.addTo(controller);
						})

/
//driving
$(function () { // wait for document ready
				var flightpath = {
								entry : {
									// curviness:0.1,
									// autoRotate: true,
									values: [
										
									
											{x: 150,	y: 30},
											{x: 150,	y: 30},
											{x: 130,	y: 30},
											{x: 150,	y: 70},
											{x: 130,	y: 100},
										    {x: 130,	  y: 30},
											{x: 150,	y: 70},
											{x: 130,	y: 100},
									
										]
								},
								// looping : {
								// 	// curviness: 1.25,
								// 	// autoRotate: true,
								// 	values: [
								// 			{x: 150,	y: 120},
								// 			{x: 200,	y: 120},
								// 			{x: 350,	y: 120},
								// 			{x: 450,	y: 120},
											
								// 		]
								// },
								leave : {
									// curviness: 1.05,
									// autoRotate: true,
									values: [
											{x: 130,	y: 110},
												{x: 130,	y: 120},
													{x: 130,	y: 140},
											{x: 130,	y: 140},
										
											{x: 100,	y: 140},
											{x: 130,	y: 140},
											{x: 100,	y: 140},
											{x: 130,	y: 140},
										
										
											{x: 250,	y: 140},
											{x: 650,	y: 200},
											{x: 650,	y: 250},
										
											{x: 650,	y:800},
												
													
											// {x: 600 ,	y: $(window).height()},
										]
								}
							};
							// init controller
							var controller = new ScrollMagic.Controller();

							// create tween
							var tween = new TimelineMax()
								.add(TweenMax.to($("#plane"), 0, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
								// .add(TweenMax.to($("#plane"), 0, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
								.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3600, offset: 100})
											.setPin("#target")
											.setTween(tween)
											.addIndicators() // add indicators (requires plugin)
											.addTo(controller);
						})


//stuck			
$(function () { // wait for document ready
				var stuckpath = {
								entry : {
									curviness:0.1,
									// autoRotate: true,
									values: [
										
									
											{x: 10,	y: 130},
												
									
										]
								},
						
								leave : {
									curviness: 1.05,
									// autoRotate: true,
									values: [
											
												{x: 10,	y: 140},
												{x: 20,	y: 250},
											    {x: 10,	y: 250},	
				                				{x: 50,	y: 400},
				                				{x: 30,	y: 450},
				                				{x: 50,	y: 450},
				                				{x: 30,	y: 450},												
											// {x: 50 ,	y: $(window).height()},
										]
								}
							};
							// init controller
							var controller = new ScrollMagic.Controller();

							// create tween
							var tween = new TimelineMax()
								.add(TweenMax.to($("#omg"), 1.1, {css:{bezier:stuckpath.entry}, ease:Power1.easeInOut}))
								// .add(TweenMax.to($("#plane"), 0, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
								.add(TweenMax.to($("#omg"), 1, {css:{bezier:stuckpath.leave}, ease:Power1.easeInOut}));

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger_stuck", duration: 5000, offset: 100})
											.setPin("#target_stuck")
											.setTween(tween)
											.addIndicators() // add indicators (requires plugin)
											.addTo(controller);
						})

  var controller = new ScrollMagic.Controller();
   var scene = new ScrollMagic.Scene({
              triggerElement: "#trigger_class"
            })
            .setTween("#animate1", 1, {backgroundColor: "#E85D48", scale: 2.5}) // trigger a TweenMax.to tween
            .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);

 var controller_1 = new ScrollMagic.Controller();
   var scene = new ScrollMagic.Scene({
              triggerElement: "#trigger_class"
            })
            .setTween("#animate_school", 1.6, {backgroundColor: "#E85D48", scale: 2.5}) // trigger a TweenMax.to tween
            .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller_1);
  // var controller_1 = new ScrollMagic.Controller();
  //  var scene_1 = new ScrollMagic.Scene({
  //             triggerElement: "#trigger_masks"
  //           })
  //           .setTween("#animate2", 1, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
  //           .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  //           .addTo(controller_1);