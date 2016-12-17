//angularjs
//头部引用

	//在app内声明对 ***infinite-scroll***的依赖
	var app = angular.module('myApp',['infinite-scroll']);
	app.controller('header',function($scope){
		
	})
	
//第二栏图标栏使用json加载数据	
    app.controller('second',function($scope,$http){
    	$http.get('js/iconData.json').success(function(data){
//  		console.log(data);
    		$scope.data1=data[0].result;
    		$scope.data2=data[1].result;
    		$scope.data3=data[2].result;
    		$scope.data4=data[3].result;
    		
    	}).error(function (data) {
        	console.log(123)
        })
    })



//商品栏

	app.controller('goods', function($scope, Reddit) {
	  $scope.reddit = new Reddit();
	  $scope.more=function(){
	  	
	  }
	});
	
	
	app.factory('Reddit', function($http) {
	  var Reddit = function() {
	    this.items = [];
	    this.busy = false;
	    this.after = '';
	    this.page = 0;
	  };
	app.factory('more',function(){
		
	});
	
	
	  Reddit.prototype.nextPage = function($scope) {
	    if (this.busy) return;
	    this.busy = true;
		
	   	var url = "http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=" + this.page;
	    $http.get(url).success(function(data) {
	      var items= data.result;
		  console.log(items)    
	      this.items = this.items.concat(items);
	      
	    //加载5次后不再加载，设置infinite-scroll-disabled:
		//这个值默认是false(Boolean类型), 默认关闭 “停止滚动” 这个功能.
	      if(this.page >3){
	      	this.busy = true; 
	      }else{
	      	this.busy = false;
	      }
	      console.log(this.page)
	      
	      this.page += 1;
		  	
	    }.bind(this));
	  };
	      
	      
	    
	
	  return Reddit;
	});
	





//<!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
        	pagination: '.swiper-pagination',
        	paginationClickable: true
    	});
    	

//第三栏名店抢购时间设置

var timer=setInterval(function(){
	var nowtime = new Date();
	//console.log(now)
	var currenttime = new Date(2016,10,20,0,0,0,0)
	//console.log(currenttime)
	var cuttime=currenttime - nowtime;
	var time=parseInt( cuttime/1000);
	var hour =parseInt((time/3600)%24);
	var minute =parseInt((time/60)%60);
	var second = parseInt(time%60);
	if(hour<10){
		$(".hour").text("0"+hour)
	}else{
		$(".hour").text(hour);
		
	}
	if(minute<10){
		$(".minute").text("0"+minute)
	}else{
		$(".minute").text(minute);
		
	}
	if(second<10){
		$(".seconds").text("0"+second)
	}else{
		$(".seconds").text(second);
		
	}
	if(cuttime==0){
		clearInterval(timer)
	}
},1000)


//商品加载






			/*
				懒加载效果
					1）页面载入时请求部分数据
					2）当滚动条滚动到接近底部时，加载更多的数据
						给window绑定scroll事件
			 */
			// 获取页面元素
			
//			
//			var index = 0;
//			var $datalist = $('#datalist');
//			var $ul = $datalist.children('ul');
//			// 2）当滚动条滚动到接近底部时，加载更多的数据
//			$(window).on('scroll',function(){
//				
//				var scrollTop = $(window).scrollTop();
//				
//				// 文档内容高度
//				var docHeight = $(document).height();
//
//				// 窗口高度
//				var winHeight = $(window).height();
//				
//				
//				
//				// 滚动条滚到底时触发
//				if(scrollTop >= docHeight - winHeight){
//					index++;
//					if(index<=3){
//						$('#loading').show();
//						ajax(showImg);
//					}
//						$("#loading").hide();
//					$(".more").click(function(){
//						index++;
//						$('#loading').show();
//						ajax(showImg);
//					})
//						
//					
//				};
//				
//			});
//			
//			ajax(showImg);
			
			
			
//			function ajax (callback) {
//				var i = (index == 1) ? index : index * 8;
//				$.ajax({
//						url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=8&cb=tempGuessLikeCallback',
//						dataType:'jsonp',
//						jsonp: 'callback',
//						scriptCharset:'gb2312', 
//						jsonpCallback: 'tempGuessLikeCallback',
//						success:function(res){
//							var data = res.data;
//							
//							var _html = '';
//							$.each(data,function(idx,obj){
//								// 把json的图片路径先放在新增的data-lazy-img属性里面，等数据处理完了再替换src属性
//								_html += '<li><div class="p-img"><a href="' + obj.clk +'"><img src="img/loading.gif" data-lazy-img="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"></a></div><div class="p-right"><div class="p-name"><a href="">' + unescape(obj.t) + '</a></div><div class="p-price"><b>' + obj.jp + '</b></div></div></li>';
//							});
//							$('<ul/>').addClass('list-'+index).html(_html).appendTo($datalist);
//							
//							// 回调函数，等数据全部拼接完再执行
//							if (typeof callback == 'function') {
//								callback();
//							}
//						}
//					});
//			}
//			
			// 用data-lazy-img属性替换src属性
			function showImg () {
				$('.list-' + index + ' img').each(function (){
					$(this).animate({opacity:0.3}, 500, function() {
						$(this).attr('src', $(this).attr('data-lazy-img')).animate({opacity: 1}, 1000);
					});
				})
			}
		