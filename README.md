
东集扫描枪(Seuic) 插件使用说明
1.  安装   cordova plugin add /XXX/SeuicScanner

2.  angular里直接使用    declare var SeuicScanner: any;

3.  调用扫描里的方法   
   扫描：   SeuicScanner.getCode(function (code){
					String result = code;  //code为扫描二维码
				}, function(error) {
				
				}
			)
