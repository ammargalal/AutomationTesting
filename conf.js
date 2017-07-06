
exports.config = {
		 directConnect: true,
		  //seleniumAddress: 'http://localhost:4444/wd/hub',
		  
		  
		  //specs: ['first.js','datatypes.js','object_example.js']
		  specs: ['pageObject.js'],
		  
		 /*capabilities: {
			    'browserName': 'firefox'
			  },
			  */
		  jasmineNodeOpts: {
			  //showColors: true,
			  defaultTimeoutInterval: 100000,
			//  isVerbose: true
			   }

			// framework: 'jasmine' ,
		};