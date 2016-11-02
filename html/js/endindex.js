
       var end_do = $("#end_do");
       var end_bg = $("#end_bg");
		var timer = null;
		function move(obj){
			var offTop = end_do.position().top;
			var off = end_bg.height();
			console.log(offTop)
			setInterval(function(){
				offTop += off;
				end_do.animate({top:offTop},1000,function(){
					if(offTop == off){
						end_do.css({top:-offTop})
						offTop = -off;
					}
				});
			},4000)
		}
		move(end_do);
		var end_one = $(".end_one");
		var end_gun = $(".end_gun");
		end_one.on("mouseover",function () {
				end_gun.css({
					display:"block",
				})
			})
			end_one.on("mouseout",function () {
			 end_gun.css({
					display:"none",
				})
			})
			end_gun.on("mouseout",function () {
			 end_gun.css({
					display:"none",
				})
			})
		    end_gun.on("mouseover",function () {
				end_gun.css({
					display:"block",
				})
			})
		