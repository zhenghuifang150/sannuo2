function requestHeader(obj,callBack){
	  var request = new XMLHttpRequest();
	  request.open("GET",obj.url);
	  request.send();
	  request.onreadystatechange = function(){
	    if(request.readyState == 4 && request.status == 200){
	      var str = request.responseText;
	      var obj = JSON.parse(str);
	      if(callBack){
	        callBack(obj);
//	         console.log(obj);
	      }
	    }
	  }
}
  var wrap = $(".wrap");
  var second = $(".second");
  var first = $(".first");
  var Img = $(".Img");
  window.onresize = function(){
      $(".first").css({
        width:wrap.width(),
      });
      $(".Img").css({
        width:wrap.width(),
      })
    }

			/////////////大图切换////////////////
	requestHeader({
	  url:"../../php/cood/state.php",
	},function(obj){

	        obj.push(obj[0]);
	        obj.unshift(obj[obj.length-2]);
	      var wrap = $("<div/>");
	      wrap.addClass("wrap");
	      var lunbo = $("#lunbo");
	      lunbo.append(wrap);
	      var ul = $('<ul/>');
	      ul.addClass("second");
	      wrap.append(ul);
	      for (var i = 0; i < obj.length; i++) {
	          var li = $("<li/>");
	          li.addClass("first");
	          var img = $("<img/>")
	          img.addClass("Img");
	           img.attr('src',"../../php/cood/img/"+obj[i].lbt_img);
	          li.append(img);
	          ul.append(li);
	      }
	      ul.css({
	          left:-wrap.width() + 'px'
	      })


				function goleft(){
	          var off = ul.position().left;
	          off += wrap.width();
	          ul.css({
	              left:off,
	          })
	              if(off == 0){
	                 ul.css({
	                  left: - (ul.width() - 2 * wrap.width()),
	                 });
	              }

	      }
	    //  创建右按钮
	      clearInterval(timer);
	      var right = $("<div/>");
	      right.addClass("right");
	      wrap.append(right);
	      right.on("click",function(){
	              var off = ul.position().left;
	              off -= wrap.width();
	              ul.css({
	                  left:off,
	              })
	               if(off == -(wrap.children('ul').width() - wrap.width())){
	                 ul.css({
	                  left:-(wrap.width()),
	                 });
	              }
	      })
				  var timer = null;
			timer=	setInterval(goleft,3000)
	      return wrap;
	  });
	/////////////////////字体轮播//////////////////////////
	requestHeader({
		url:'../../php/cood/ztlbt.php',
	},function (obj){
			  obj.push(obj[0]);
	           obj.unshift(obj[obj.length - 2]);
	           var wrapper = $("<div/>");
	           wrapper.addClass("wrapper");
	           var bigzt = $(".bigzt");
	           bigzt.append(wrapper);
	           var ul = $("<ul/>");
	           ul.addClass("ztlbo")
	           wrapper.append(ul);
	            ul.css({
			            width:wrapper.width() * obj.length + 'px'
			          });
	           wrapper.append(ul);
	           for(var i=0;i<obj.length;i++){
	           	   var li = $("<li/>");
	           	   li.addClass("ztlb");
	           	   li.text(obj[i].ztlbt_title);
	           	   var img = $("<img/>");
	           	   img.addClass("My");
	           	   img.attr('src',"../../php/cood/img/"+obj[i].ztlbt_img);
	           	   li.append(img);
	           	   li.css({
	           	   	width:wrapper.width(),
	           	   	height:wrapper.height()

	           	   })
	           	   ul.append(li);
	           }
	          ul.css({
	          	marginTop:-wrapper.height() + "px"
	          })
							moveZt(obj);
			})

			function moveZt(){
				var wrapper = $(".wrapper");
				var off = wrapper.position().top;
	        setInterval(function(){
	            off -= wrapper.height();
									console.log(off);
	            wrapper.children('ul').animate({
	                top:off
	            },1000,function(){
	                if(off == -(wrapper.children('ul').height() - wrapper.height())){
	                    wrapper.children('ul').css("top",-wrapper.height());
	                    off = -wrapper.height();
	                }
	            });
	        },3000);
			}
	// ///////////////////////菜单的移入///////////////////////////////////////////////
	        var menu_2 = $(".menu_2");
			var about_one = $(".about_one");
			menu_2.on("mouseover",function () {
				about_one.css({
					display:"block",
				})
			})
			menu_2.on("mouseout",function () {
			 about_one.css({
					display:"none",
				})
			})
			about_one.on("mouseover",function () {
				about_one.css({
					display:"block",
				})
			})
			about_one.on("mouseout",function () {
				about_one.css({
					display:"none",
				})
			})
			var menu_3 = $(".menu_3");
			var about_two = $(".about_two");
			menu_3.on("mouseover",function () {
				about_two.css({
					display:"block",
				})
			})
			menu_3.on("mouseout",function () {
			 about_two.css({
					display:"none",
				})
			})
			about_two.on("mouseover",function () {
				about_two.css({
					display:"block",
				})
			})
			about_two.on("mouseout",function () {
				about_two.css({
					display:"none",
				})
			})
			var menu_4 = $(".menu_4");
			var about_tired = $(".about_tired");
			menu_4.on("mouseover",function () {
				about_tired.css({
					display:"block",
				})
			})
			menu_4.on("mouseout",function () {
			 about_tired.css({
					display:"none",
				})
			})
			about_tired.on("mouseover",function () {
				about_tired.css({
					display:"block",
				})
			})
			about_tired.on("mouseout",function () {
				about_tired.css({
					display:"none",
				})
			})
			var menu_5 = $(".menu_5");
			var about_forth = $(".about_forth");
			menu_5.on("mouseover",function () {
				about_forth.css({
					display:"block",
				})
			})
			menu_5.on("mouseout",function () {
			 about_forth.css({
					display:"none",
				})
			})
			about_forth.on("mouseover",function () {
				about_forth.css({
					display:"block",
				})
			})
			about_forth.on("mouseout",function () {
				about_forth.css({
					display:"none",
				})
			})
			/////////////////////集体新闻和最新资讯吗=/////////////////////////////////////////////////
			requestHeader({
		       url:'../../php/cood/nows.php',
	       },function (obj){
//	       	console.log(typeof obj)
			var Con_big_top_1 = $(".Con_big_top_1");
			var Con_img = $(".Con_img");
            var Con_title = $(".Con_title");
            var Con_title_a = $(".Con_title_a");
            var Con_content = $(".Con_content");
            var img = $("<img/>");
            Con_img.append(img);
            img.attr('src',"../../php/cood/img/"+obj[0].jtyw_img);
            Con_title_a.text(obj[0].jtyw_title);
			Con_content.text(obj[0].jtyw_title2);
		 });

			requestHeader({
		       url:'../../php/cood/bottom.php',
	       },function (obj){
	       	console.log(obj);
	       	var Con_big_bottom = $(".Con_big_bottom");
			var ul = $("<ul/>");
			ul.addClass('now_content');
			Con_big_bottom.append(ul);
			 for(var j=0;j<4;j++){
			 	var li = $("<li/>");
			 	li.addClass("now_a");
			 	var a = $("<a/>");
			 	a.addClass('now_a_1');
			 	li.append(a);
			 	a.text(obj[j].nows_title);

			 	ul.append(li);
			 	var now_time = $("<div/>");
			 	now_time.addClass("now_time");

			 	li.append(now_time);
			  	now_time.text(obj[j].nows_timer);
			 }
	       });
		   requestHeader({
		       url:'../../php/cood/game.php',
	       },function (obj){
	       	var Con_game = $(".Con_game");
	       	var ul = $("<ul/>");
	       	ul.addClass("Con_game_content");
	       	Con_game.append(ul);
	       	for (var c = 0;c<8;c++) {
	       		var li = $("<li/>");
	       		li.addClass("Con_game_title");
	       		var a = $("<a/>");
			 	a.addClass('Con_game_a');
			 	li.append(a);
			 	ul.append(li);
			 	a.text(obj[c].bestnow_title);

			 	var Con_game_time = $("<div/>");
			 	Con_game_time.addClass('Con_game_time');
			 	li.append(Con_game_time);
			 	Con_game_time.text(obj[c].bestnow_time);
	       	}
	       })
		   ////////////////////点击集体新闻和最新游戏///////////////////////////////////////////////////////////
		 var Con_left = $(".Con_left");
		 var Con_right = $(".Con_right");
		 var Con_big = $(".Con_big");
		 var Con_game = $(".Con_game");
		 Con_left.on("click",function(){
		 	Con_left.css({
		 		background: 'rgb(182,217,228)',

		 	})
		 	Con_big.css({display:"block"}),
		 	Con_right.css({background: "white",}),
		 	Con_game.css({display:"none"})
		 })
		  Con_right.on("click",function(){
		 	Con_right.css({
		 		background: 'rgb(182,217,228)',
		 	})
		 	Con_left.css({background: "white",}),
		 	Con_game.css({display:"block"}),
		 	Con_big.css({display:"none"})
		 });
		///////////////////////视频///////////////////////////////////////////
	requestHeader({
		       url:'../../php/cood/video.php',
	       },function (obj){
	       	var max_top = $(".max_top");
	       	var max_inside = $(".max_inside");
	       	var source = $("<source/>");
	       	max_inside.append(source);
	       	source.attr('src',"../../php/cood/video/"+obj[0].vider_url);

	       });
	       //////////////////下拉菜单////////////////////////////
	requestHeader({
		       url:'../../php/cood/menu.php',
	       },function (obj){
	       	console.log(obj)
	       	 var footer_ul = $(".footer_ul");
	       	 var ul = $("<ul/>");
	       	 ul.addClass("footer_left_a");
	       	 footer_ul.append(ul);
	       	 for (var d =0;d<9;d++) {
	       	 	var li = $("<li/>");
	       	 	li.addClass("footer_b")
	       	 	ul.append(li);
	       	 	var div = $("<div/>");
	       	 	div[0].data  = obj[d];
	       	 	div.addClass("footer_aa");
	       	 	li.append(div);
	       	 	div.text(obj[d].menu_title);
	       	 	div[0].onclick = function(){
	       	 		console.log(this.data);
	       	 		window.location.assign(this.data.menu_url);
	       	 	}
	       	 }
	       	 var footer_b = $(".footer_b");
	       	  $(footer_b[0]).css({background: "gainsboro"})
	       });

	       var footer_ul = $(".footer_ul");
		  var footer_text = $(".footer_text");
		  footer_text.on('click',function(){
		  	footer_ul.css({display:"block"})
		  	return false;
		  });
		 var left_img = $(".left_img");
		 left_img.on('click',function(){
		  	footer_ul.css({display:"none"})
		  	return false;
		 });
		 /////////二维码////////////////
		 var fixed = $(".fixed");
		 var fixed_2 = $(".fixed_2");
		 $(fixed).on('mouseover',function(){
		 	fixed_2.css({
		 		display:"block"
		 	})
		 	return false;
		 })
		   $(fixed).on('mouseout',function(){
		 	fixed_2.css({
		 		display:"none"
		 	})
		 	return false;
		 })
		   ////////////滚轮事件//////////////////////////
