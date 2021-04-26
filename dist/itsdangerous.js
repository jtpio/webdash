var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="itsdangerous.data";var REMOTE_PACKAGE_BASE="itsdangerous.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","itsdangerous-1.1.0-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","itsdangerous",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:23960,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1096,2306,3438,4554,5550,6617,7831,8996,10241,11451,12617,13926,14957,16403,17579,18740,19915,21065,22337,23503],sizes:[1096,1210,1132,1116,996,1067,1214,1165,1245,1210,1166,1309,1031,1446,1176,1161,1175,1150,1272,1166,457],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_itsdangerous.data")}Module["addRunDependency"]("datafile_itsdangerous.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/itsdangerous-1.1.0-py3.8.egg-info/top_level.txt",start:0,end:13,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous-1.1.0-py3.8.egg-info/dependency_links.txt",start:13,end:14,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous-1.1.0-py3.8.egg-info/SOURCES.txt",start:14,end:1143,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous-1.1.0-py3.8.egg-info/PKG-INFO",start:1143,end:4760,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/exc.py",start:4760,end:7719,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/jws.py",start:7719,end:15189,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/timed.py",start:15189,end:20824,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/signer.py",start:20824,end:27169,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/serializer.py",start:27169,end:35822,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/url_safe.py",start:35822,end:38097,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/_compat.py",start:38097,end:39230,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/__init__.py",start:39230,end:39938,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/encoding.py",start:39938,end:41162,audio:0},{filename:"/lib/python3.8/site-packages/itsdangerous/_json.py",start:41162,end:41593,audio:0}],remote_package_size:28056,package_uuid:"c3048c31-31c2-4b0c-8756-dc44eb54673b"})})();