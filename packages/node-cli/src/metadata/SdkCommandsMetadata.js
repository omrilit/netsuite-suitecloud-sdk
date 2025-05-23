module.exports = {
	"project:adddependencies": {
		"name": "project:adddependencies",
		"sdkCommand": "adddependencies",
		"usage": "",
		"description": "Adds the missing dependencies to the manifest file.",
		"isSetupRequired": false,
		"options": {
			"all": {
				"name": "all",
				"option": "all",
				"description": "Adds all missing dependencies to the SuiteCloud project. When specified, ensure that you do not use the -feature, -file, and -object options.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"feature": {
				"name": "feature",
				"option": "feature",
				"description": "Specifies the feature dependency references to add to the project. Each reference is a name:value pair that is delimited by a space. For example, CUSTOMRECORD:required. When specified, ensure that you do not use the -all option.",
				"mandatory": false,
				"type": "MULTIPLE",
				"usage": "CUSTOMRECORD:required [...]",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"file": {
				"name": "file",
				"option": "file",
				"description": "Specifies the files to add to the project. When specified, ensure that you do not use the -all option.",
				"mandatory": false,
				"type": "MULTIPLE",
				"usage": "\/js\/test.js [...]",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"object": {
				"name": "object",
				"option": "object",
				"description": "Specifies the object script IDs to add to the project. When specified, ensure that you do not use the -all option.",
				"mandatory": false,
				"type": "MULTIPLE",
				"usage": "scriptid [...]",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"account:setup:ci": {
		"name": "account:setup:ci",
		"sdkCommand": "authenticateci",
		"usage": "",
		"description": "Grants authorization for SuiteCloud SDK to access NetSuite with an account-role combination. It does not require browser-based login to NetSuite.",
		"isSetupRequired": false,
		"options": {
			"account": {
				"name": "account",
				"option": "account",
				"description": "References the NetSuite account ID.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"certificateid": {
				"name": "certificateid",
				"option": "certificateid",
				"description": "References the certificate ID obtained from NetSuite after uploading the public key file.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"url": {
				"name": "url",
				"option": "url",
				"description": "References the NetSuite domain of the account you want to use. It only needs to be specified if you want to use a customized NetSuite domain.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"privatekeypath": {
				"name": "privatekeypath",
				"option": "privatekeypath",
				"description": "References the local path to the private key file matching the certificate in NetSuite. For example: \"d:\/path\/private-key.pem\".",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			}
		}
	},
	"file:create": {
		"name": "file:create",
		"sdkCommand": "createfile",
		"usage": "",
		"description": "Creates a SuiteScript file.",
		"isSetupRequired": false,
		"options": {
			"type": {
				"name": "type",
				"option": "type",
				"description": "Specifies the type of the SuiteScript file that you want to create. For example, \"ClientScript\"",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "ClientScript",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"module": {
				"name": "module",
				"option": "module",
				"description": "Specifies the SuiteScript modules you want to add to the SuiteScript file. For example, \"N\/record\"",
				"mandatory": false,
				"type": "MULTIPLE",
				"usage": "N\/record [...]",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"path": {
				"name": "path",
				"option": "path",
				"description": "Specifies the File Cabinet path of the SuiteScript file to create. For example, \"\/SuiteScripts\/ClientScipt.js\".",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "\"\/SuiteScripts\/ClientScript.js\"",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"project:create": {
		"name": "project:create",
		"sdkCommand": "createproject",
		"usage": "",
		"description": "Creates a SuiteCloud project, either a SuiteApp or an account customization project (ACP).",
		"isSetupRequired": false,
		"options": {
			"overwrite": {
				"name": "overwrite",
				"option": "overwrite",
				"description": "Overwrites the existing project.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"parentdirectory": {
				"name": "parentdirectory",
				"option": "parentdirectory",
				"description": "Sets the parent folder where to create the project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "d:\/foo\/bar",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"projectid": {
				"name": "projectid",
				"option": "projectid",
				"description": "Specifies the project ID. It is mandatory for SuiteApps.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "foobar",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"projectname": {
				"name": "projectname",
				"option": "projectname",
				"description": "Specifies the project name.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "FooBar",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"projectversion": {
				"name": "projectversion",
				"option": "projectversion",
				"description": "Specifies the project version. It is mandatory for SuiteApps.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "1.0.0",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"publisherid": {
				"name": "publisherid",
				"option": "publisherid",
				"description": "Specifies the publisher ID. It is mandatory for SuiteApps.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "com.netsuite",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"type": {
				"name": "type",
				"option": "type",
				"description": "Specifies the project type. Enter one of the following options: ACCOUNTCUSTOMIZATION or SUITEAPP.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "ACCOUNTCUSTOMIZATION",
				"defaultOption": false,
				"disableInIntegrationMode": false
			}
		}
	},
	"project:deploy": {
		"name": "project:deploy",
		"sdkCommand": "deploy",
		"usage": "",
		"description": "Deploys the folder containing the project. The project folder is zipped before deployment, only including the files and folders referenced in the deploy.xml file.",
		"isSetupRequired": true,
		"options": {
			"accountspecificvalues": {
				"name": "accountspecificvalues",
				"option": "accountspecificvalues",
				"description": "Indicates how to handle the presence of account-specific values in an account customization project. If there are account-specific values in the project, enter WARNING to continue with the deployment process, or ERROR to stop it. If the option is not specified, the default value is ERROR. It only applies to account customization projects.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "WARNING",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"applyinstallprefs": {
				"name": "applyinstallprefs",
				"option": "applyinstallprefs",
				"description": "Applies the settings from the hiding.xml, locking.xml, and overwriting.xml files. It only applies to SuiteApps.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"log": {
				"name": "log",
				"option": "log",
				"description": "Sets the deployment log file location, as either a directory or a file name. If it is a directory, a default log file is generated in the specified location. If a log file already exists in the specified location, deployment log details are appended to that existing file.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "d:\/path\/test.log",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"no_preview": {
				"name": "no_preview",
				"option": "no_preview",
				"description": "Skips the preview step.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"skip_warning": {
				"name": "skip_warning",
				"option": "skip_warning",
				"description": "Indicates that the warning before deployment to production account will be skipped.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"validate": {
				"name": "validate",
				"option": "validate",
				"description": "Validates the project before deploying. If an error ocurrs during the deployment, the process is stopped.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			}
		}
	},
	"file:import": {
		"name": "file:import",
		"sdkCommand": "importfiles",
		"usage": "",
		"description": "Imports files from an account to your account customization project. You cannot import files from a SuiteApp.",
		"isSetupRequired": true,
		"options": {
			"paths": {
				"name": "paths",
				"option": "paths",
				"description": "Specifies the File Cabinet paths of the files to import. For example, \"\/SuiteScripts\/file.js\".",
				"mandatory": true,
				"type": "MULTIPLE",
				"usage": "\"\/SuiteScripts\/test.js\"",
				"defaultOption": true,
				"disableInIntegrationMode": false
			},
			"excludeproperties": {
				"name": "excludeproperties",
				"option": "excludeproperties",
				"description": "Excludes all file properties within the .attributes folder.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"allowforsuiteapps": {
				"name": "allowforsuiteapps",
				"option": "allowforsuiteapps",
				"description": "",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"object:import": {
		"name": "object:import",
		"sdkCommand": "importobjects",
		"usage": "",
		"description": "Imports custom objects from your NetSuite account to the SuiteCloud project. In account customization projects (ACP), if SuiteScript files are referenced in the custom objects you import, these files get imported by default.",
		"isSetupRequired": true,
		"options": {
			"appid": {
				"name": "appid",
				"option": "appid",
				"description": "Specifies your application ID. If specified, only custom objects with that application ID are imported. Otherwise, only custom objects with no application ID are imported.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "org.mycompany.helloworldapp",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"scriptid": {
				"name": "scriptid",
				"option": "scriptid",
				"description": "Specifies the script ID. To specify multiple IDs, enter the IDs separated by spaces. Enter \"ALL\" to import all custom objects of the specified type.",
				"mandatory": true,
				"type": "MULTIPLE",
				"usage": "customrecord_tes01 customrecord_test02 [...]",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"maxItemsInImportObjectsRequest": {
				"name": "maxItemsInImportObjectsRequest",
				"option": "maxItemsInImportObjectsRequest",
				"description": "Set the maximum number of scriptIds that can be in a single call.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": 30,
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"type": {
				"name": "type",
				"option": "type",
				"description": "Specifies the type of custom objects to import. Enter \"ALL\" to import all custom objects. To see what custom objects are supported by SDF, see https:\/\/system.netsuite.com\/app\/help\/helpcenter.nl?fid=sdfxml.html.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "customrecordtype",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"destinationfolder": {
				"name": "destinationfolder",
				"option": "destinationfolder",
				"description": "Specifies the project folder where objects will be stored. It must be within the Objects folder of your project. For example, \/Objects\/MyObjects.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "\/Objects",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"excludefiles": {
				"name": "excludefiles",
				"option": "excludefiles",
				"description": "Indicates that the SuiteScript files referenced in custom objects are not imported. It can only be used in account customization projects (ACP).",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"file:list": {
		"name": "file:list",
		"sdkCommand": "listfiles",
		"usage": "",
		"description": "Lists the files in the File Cabinet of your account.",
		"isSetupRequired": true,
		"options": {
			"folder": {
				"name": "folder",
				"option": "folder",
				"description": "Specifies the File Cabinet path, for example, \"\/SuiteScripts\". All files within subfolders are included.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "\"\/SuiteScripts\"",
				"defaultOption": true,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"object:list": {
		"name": "object:list",
		"sdkCommand": "listobjects",
		"usage": "",
		"description": "Lists the custom objects deployed in an account.",
		"isSetupRequired": true,
		"options": {
			"appid": {
				"name": "appid",
				"option": "appid",
				"description": "Specifies your application ID. If specified, only custom objects with that application ID are listed. Otherwise, only custom objects with no application ID are listed.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "org.mycompany.helloworldapp",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"scriptid": {
				"name": "scriptid",
				"option": "scriptid",
				"description": "Specifies the script ID. If you specify it, only objects containing that script ID will be listed. Otherwise, all objects are listed.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "customrecord",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"type": {
				"name": "type",
				"option": "type",
				"description": "Specifies the type of custom objects to list. To specify multiple types, enter the types separated by spaces. Otherwise, all types are listed. To see what custom objects are supported by SDF, see https:\/\/system.netsuite.com\/app\/help\/helpcenter.nl?fid=sdfxml.html.",
				"mandatory": false,
				"type": "MULTIPLE",
				"usage": "customrecordtype workflow [...]",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"configuration:import": {
		"name": "configuration:import",
		"sdkCommand": "importconfiguration",
		"usage": "",
		"description": "Imports configurations from your NetSuite account to the SDF project.",
		"isSetupRequired": true,
		"options": {
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you gave to a specific account-role combination.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Specify the path of your project folder.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:/project/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"configurationid": {
				"name": "configurationid",
				"option": "configurationid",
				"description": "Specifies the configuration to import. This value should be set to FEATURES:ALL_FEATURES. You can only import the configuration for all features.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"account:manageauth": {
		"name": "account:manageauth",
		"sdkCommand": "manageauth",
		"usage": "",
		"description": "Manages authentication IDs for all your projects. An authentication ID is a custom alias you give to a specific account-role combination.",
		"isSetupRequired": false,
		"options": {
			"list": {
				"name": "list",
				"option": "list",
				"description": "Prints a list of all the configured authentication IDs. Usage: manageauth -list.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"info": {
				"name": "info",
				"option": "info",
				"description": "Prints the following information for the specified authentication ID: account ID, role ID, and url. Usage: manageauth -info {authenticationID}.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"rename": {
				"name": "rename",
				"option": "rename",
				"description": "Renames an authentication ID. You must specify it together with the renameto option. Usage: manageauth -rename {authenticationID} -renameto {newAuthenticationID}.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"renameto": {
				"name": "renameto",
				"option": "renameto",
				"description": "Specifies the new ID for an authentication ID. You must specify it together with the rename option. Usage: manageauth -rename {authenticationID} -renameto {newAuthenticationID}.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"remove": {
				"name": "remove",
				"option": "remove",
				"description": "Removes an authentication ID. This option only removes the credentials locally and it doesn't revoke the token from the account. Usage: manageauth -remove {authenticationID}.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			}
		}
	},
	"project:package": {
		"name": "project:package",
		"sdkCommand": "package",
		"usage": "",
		"description": "Generates a ZIP file from your project, respecting the structure specified in the deploy.xml file.",
		"isSetupRequired": false,
		"options": {
			"destination": {
				"name": "destination",
				"option": "destination",
				"description": "Specifies a path to store the ZIP file containing your project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Specifies the path of your project folder.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"object:update": {
		"name": "object:update",
		"sdkCommand": "update",
		"usage": "",
		"description": "Overwrites the custom objects in the project with the custom objects in an account.",
		"isSetupRequired": true,
		"options": {
			"scriptid": {
				"name": "scriptid",
				"option": "scriptid",
				"description": "Specifies the script ID of the objects you want to overwrite.",
				"mandatory": true,
				"type": "MULTIPLE",
				"usage": "scriptid [...]",
				"defaultOption": true,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"file:upload": {
		"name": "file:upload",
		"sdkCommand": "uploadfiles",
		"usage": "",
		"description": "Uploads files from your project to an account.",
		"isSetupRequired": true,
		"options": {
			"paths": {
				"name": "paths",
				"option": "paths",
				"description": "Specifies the file cabinet paths of the files to upload. To specify multiple paths, enter a space between paths and enclose the entire argument in double quotes. For example, \"\/SuiteScripts\/file.js\" for account customization projects, and \"\/SuiteApps\/com.project.example\/script.js\" for SuiteApp projects.",
				"mandatory": true,
				"type": "MULTIPLE",
				"usage": "\"\/SuiteScripts\/test.js\"",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			}
		}
	},
	"project:validate": {
		"name": "project:validate",
		"sdkCommand": "validate",
		"usage": "",
		"description": "Validates the folder containing the SuiteCloud project.",
		"isSetupRequired": true,
		"options": {
			"accountspecificvalues": {
				"name": "accountspecificvalues",
				"option": "accountspecificvalues",
				"description": "Indicates how to handle the presence of account-specific values in an account customization project. If there are account-specific values in the project, enter WARNING to continue with the deployment process, or ERROR to stop it. If the option is not specified, the default value is ERROR. It only applies to account customization projects.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "WARNING",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"authid": {
				"name": "authid",
				"option": "authid",
				"description": "References the custom alias you give to a specific account-role combination. Referred to as authentication ID and auth ID in the documentation.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"applyinstallprefs": {
				"name": "applyinstallprefs",
				"option": "applyinstallprefs",
				"description": "Applies the settings from the hiding.xml, locking.xml, and overwriting.xml files. It only applies to SuiteApps.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"log": {
				"name": "log",
				"option": "log",
				"description": "Sets the validation log file location, as either a directory or a file name. If it is a directory, a default log file is generated in the specified location. If a log file already exists in the specified location, validation log details are appended to that existing file.",
				"mandatory": false,
				"type": "SINGLE",
				"usage": "d:\/path\/test.log",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"project": {
				"name": "project",
				"option": "project",
				"description": "Sets the folder or zipped file containing the project. It overrides the default project.",
				"mandatory": true,
				"type": "SINGLE",
				"usage": "c:\/project\/",
				"defaultOption": false,
				"disableInIntegrationMode": true
			},
			"server": {
				"name": "server",
				"option": "server",
				"description": "Indicates that the server will perform the validation.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			}
		}
	}
};
