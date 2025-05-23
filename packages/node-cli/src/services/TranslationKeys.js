/*
 ** Copyright (c) 2024 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
'use strict';

module.exports = {
	ACCOUNT_CREDENTIALS: {
		ACCOUNT_INFO: {
			ACCOUNT_ID: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_ACCOUNT_ID',
			ACCOUNT_NAME: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_ACCOUNT_NAME',
			ACCOUNT_TYPE: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_ACCOUNT_TYPE',
			ROLE: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_ROLE',
		},
		AUTHID: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_AUTHID',
		DOMAIN: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_ACCOUNT_INFO_DOMAIN',
	},
	ACCOUNT_TYPE: {
		RELEASE_PREVIEW: 'ACCOUNT_TYPE_RELEASE_PREVIEW',
		SANDBOX: 'ACCOUNT_TYPE_SANDBOX',
		PRODUCTION: 'ACCOUNT_TYPE_PRODUCTION',
	},
	ANSWERS_VALIDATION_MESSAGES: {
		ALPHANUMERIC_HYPHEN_UNDERSCORE: 'ANSWERS_VALIDATION_MESSAGES_ALPHANUMERIC_HYPHEN_UNDERSCORE',
		ALPHANUMERIC_HYPHEN_UNDERSCORE_EXTENDED: 'ANSWERS_VALIDATION_MESSAGES_ALPHANUMERIC_HYPHEN_UNDERSCORE_EXTENDED',
		APP_ID_FORMAT: 'ANSWERS_VALIDATION_MESSAGES_APP_ID_FORMAT',
		AUTH_ID_ALREADY_USED: 'ANSWERS_VALIDATION_MESSAGES_AUTH_ID_ALREADY_USED',
		CHOOSE_OPTION: 'ANSWERS_VALIDATION_MESSAGES_CHOOSE_OPTION',
		CURRENT_AUTHID: 'ANSWERS_VALIDATION_MESSAGES_CURRENT_AUTHID',
		EMPTY_FIELD: 'ANSWERS_VALIDATION_MESSAGES_EMPTY_FIELD',
		FIELD_HAS_SPACES: 'ANSWERS_VALIDATION_MESSAGES_FIELD_HAS_SPACES',
		FIELD_NOT_LOWER_CASE: 'ANSWERS_VALIDATION_MESSAGES_FIELD_NOT_LOWER_CASE',
		FIELD_HAS_XML_FORBIDDEN_CHARACTERS: 'ANSWERS_VALIDATION_MESSAGES_FIELD_HAS_XML_FORBIDDEN_CHARACTERS',
		FILE_ALREADY_EXISTS: 'ANSWERS_VALIDATION_MESSAGES_FILE_ALREADY_EXISTS',
		FILENAME_CONTAINS_FORBIDDEN_CHARACTERS: 'ANSWERS_VALIDATION_MESSAGES_FILENAME_CONTAINS_FORBIDDEN_CHARACTERS',
		FILENAME_ENDS_WITH_PERIOD: 'ANSWERS_VALIDATION_MESSAGES_FILENAME_ENDS_WITH_PERIOD',
		FOLDER_ALREADY_EXISTS: 'ANSWERS_VALIDATION_MESSAGES_FOLDER_ALREADY_EXISTS',
		INVALID_EMAIL: 'ANSWERS_VALIDATION_MESSAGES_INVALID_EMAIL',
		MAX_LENGTH: 'ANSWERS_VALIDATION_MESSAGES_MAX_LENGTH',
		PROJECT_VERSION_FORMAT: 'ANSWERS_VALIDATION_MESSAGES_PROJECT_VERSION_FORMAT',
		PRODUCTION_DOMAIN: 'ANSWERS_VALIDATION_MESSAGES_PRODUCTION_DOMAIN',
		PUBLISHER_ID_FORMAT: 'ANSWERS_VALIDATION_MESSAGES_PUBLISHER_ID_FORMAT',
		SCRIPT_ID_FORMAT: 'ANSWERS_VALIDATION_MESSAGES_SCRIPT_ID_FORMAT',
		WRONG_PROJECT_TYPE: 'ANSWERS_VALIDATION_MESSAGES_WRONG_PROJECT_TYPE',
	},
	CLI: {
		INTERACTIVE_OPTION_DESCRIPTION: 'CLI_INTERACTIVE_OPTION_DESCRIPTION',
		SHOW_NOT_INTERACTIVE_COMMAND_MESSAGE: 'CLI_SHOW_NOT_INTERACTIVE_COMMAND_MESSAGE',
		SHOW_NOT_INTERACTIVE_COMMAND_MESSAGE_CUSTOM_RECORDS: 'CLI_SHOW_NOT_INTERACTIVE_COMMAND_MESSAGE_CUSTOM_RECORDS',
		TITLE: 'CLI_TITLE',
		USAGE: 'CLI_USAGE',
		VERSION_HELP: 'CLI_VERSION_HELP',
	},
	COMMAND_ADDDEPENDENCIES: {
		MESSAGES: {
			ADDING_DEPENDENCIES: 'COMMAND_ADDDEPENDENCIES_MESSAGE_ADDING_DEPENDENCIES',
			NO_UNRESOLVED_DEPENDENCIES: 'COMMAND_ADDDEPENDENCIES_MESSAGE_NO_UNRESOLVED_DEPENDENCIES',
			DEPENDENCIES_ADDED_TO_MANIFEST: 'COMMAND_ADDDEPENDENCIES_MESSAGE_DEPENDENCIES_ADDED_TO_MANIFEST',
		},
	},
	COMMAND_CREATEFILE: {
		QUESTIONS: {
			ADD_SUITESCRIPT_MODULES: 'COMMAND_CREATEFILE_ADD_SUITESCRIPT_MODULES',
			CHOOSE_SUITESCRIPT_TYPE: 'COMMAND_CREATEFILE_CHOOSE_SUITESCRIPT_TYPE',
			ENTER_NAME: 'COMMAND_CREATEFILE_ENTER_NAME',
			SELECT_FOLDER: 'COMMAND_CREATEFILE_SELECT_FOLDER',
			SELECT_SUITESCRIPT_MODULES: 'COMMAND_CREATEFILE_SELECT_SUITESCRIPT_MODULES',
		},
		MESSAGES: {
			CREATING_FILE: 'COMMAND_CREATEFILE_MESSAGE_CREATING_FILE',
			SUITESCRIPT_FILE_CREATED: 'COMMAND_CREATEFILE_MESSAGE_SUITESCRIPT_FILE_CREATED',
			SUITESCRIPT_FILE_CREATED_WITH_MODULES: 'COMMAND_CREATEFILE_MESSAGE_SUITESCRIPT_FILE_CREATED_WITH_MODULES',
		},
	},
	COMMAND_CREATEPROJECT: {
		QUESTIONS: {
			CHOOSE_PROJECT_TYPE: 'COMMAND_CREATEPROJECT_QUESTIONS_CHOOSE_PROJECT_TYPE',
			ENTER_PROJECT_ID: 'COMMAND_CREATEPROJECT_QUESTIONS_ENTER_PROJECT_ID',
			ENTER_PROJECT_NAME: 'COMMAND_CREATEPROJECT_QUESTIONS_ENTER_PROJECT_NAME',
			ENTER_PROJECT_VERSION: 'COMMAND_CREATEPROJECT_QUESTIONS_ENTER_PROJECT_VERSION',
			ENTER_PUBLISHER_ID: 'COMMAND_CREATEPROJECT_QUESTIONS_ENTER_PUBLISHER_ID',
			INCLUDE_UNIT_TESTING: 'COMMAND_CREATEPROJECT_QUESTIONS_INCLUDE_UNIT_TESTING',
			OVERWRITE_PROJECT: 'COMMAND_CREATEPROJECT_QUESTIONS_OVERWRITE_PROJECT',
		},
		MESSAGES: {
			CREATING_PROJECT_STRUCTURE: 'COMMAND_CREATEPROJECT_MESSAGES_CREATING_PROJECT_STRUCTURE',
			INIT_NPM_DEPENDENCIES: 'COMMAND_CREATEPROJECT_MESSAGES_INIT_NPM_DEPENDENCIES',
			INIT_NPM_DEPENDENCIES_FAILED: 'COMMAND_CREATEPROJECT_MESSAGES_INIT_NPM_DEPENDENCIES_FAILED',
			NAVIGATE_TO_FOLDER: 'COMMAND_CREATEPROJECT_MESSAGES_NAVIGATE_TO_FOLDER',
			OVERWRITE_ERROR: 'COMMAND_CREATEPROJECT_MESSAGES_OVERWRITE_ERROR',
			PROCESS_FAILED: 'COMMAND_CREATEPROJECT_MESSAGES_PROCESS_FAILED',
			PROJECT_CREATED: 'COMMAND_CREATEPROJECT_MESSAGES_PROJECT_CREATED',
			PROJECT_CREATION_CANCELED: 'COMMAND_CREATEPROJECT_MESSAGES_PROJECT_CREATION_CANCELED',
			SAMPLE_UNIT_TEST_ADDED: 'COMMAND_CREATEPROJECT_MESSAGES_SAMPLE_UNIT_TEST_ADDED',
			SETUP_TEST_ENV: 'COMMAND_CREATEPROJECT_MESSAGES_SETUP_TEST_ENV',
		},
	},
	COMMAND_DEPLOY: {
		ERRORS: {
			APPLY_INSTALLATION_PREFERENCES_IN_ACP: 'COMMAND_DEPLOY_ERRORS_APPLY_INSTALLATION_PREFERENCES_IN_ACP',
			WRONG_ACCOUNT_SPECIFIC_VALUES_OPTION: 'COMMAND_DEPLOY_ERRORS_WRONG_ACCOUNT_SPECIFIC_VALUES_OPTION',
			VALIDATE_AND_DRYRUN_OPTIONS_PASSED: 'COMMAND_DEPLOY_ERRORS_VALIDATE_AND_DRYRUN_OPTIONS_PASSED',
		},
		MESSAGES: {
			AND: 'COMMAND_DEPLOY_MESSAGES_AND',
			APPLYING_CONTENT_PROTECTION: 'COMMAND_DEPLOY_MESSAGES_APPLYING_INSTALLATION_PREFERENCES',
			DEPLOYING: 'COMMAND_DEPLOY_MESSAGES_DEPLOYING',
			LOCALLY_VALIDATED: 'COMMAND_DEPLOY_MESSAGES_LOCALLY_VALIDATED',
			NOT_APPLYING_CONTENT_PROTECTION: 'COMMAND_DEPLOY_MESSAGES_NOT_APPLYING_INSTALLATION_PREFERENCES',
			NOT_ASKING_INSTALLATION_PREFERENCES_REASON: 'COMMAND_DEPLOY_MESSAGES_NOT_ASKING_INSTALLATION_PREFERENCES_REASON',
			PREVIEWING: 'COMMAND_DEPLOY_MESSAGES_PREVIEWING',
		},
		OUTPUT: {},
		QUESTIONS: {
			ACCOUNT_SPECIFIC_VALUES: 'COMMAND_DEPLOY_QUESTIONS_ACCOUNT_SPECIFIC_VALUES',
			APPLY_INSTALLATION_PREFERENCES: 'COMMAND_DEPLOY_QUESTIONS_APPLY_INSTALLATION_PREFERENCES',
			PERFORM_LOCAL_VALIDATION: 'COMMAND_DEPLOY_QUESTIONS_PERFORM_LOCAL_VALIDATION',
		},
		QUESTIONS_CHOICES: {
			ACCOUNT_SPECIFIC_VALUES: {
				CANCEL_PROCESS: 'COMMAND_DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_CANCEL_PROCESS',
				DISPLAY_WARNING: 'COMMAND_DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_DISPLAY_WARNING',
				IGNORE: 'COMMAND_DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_IGNORE',
			},
		},
	},
	COMMAND_IMPORTFILES: {
		ERRORS: {
			INTERNAL: 'COMMAND_IMPORTFILES_ERRORS_INTERNAL',
			IS_SUITEAPP: 'COMMAND_IMPORTFILES_ERRORS_IS_SUITEAPP',
			NO_FOLDERS_FOUND: 'COMMAND_IMPORTFILES_ERRORS_NO_FOLDERS_FOUND',
		},
		MESSAGES: {
			CANCEL_IMPORT: 'COMMAND_IMPORTFILES_MESSAGES_CANCEL_IMPORT',
			IMPORTING_FILES: 'COMMAND_IMPORTFILES_MESSAGES_IMPORTING_FILES',
			LOADING_FILES: 'COMMAND_IMPORTFILES_MESSAGES_LOADING_FILES',
			LOADING_FOLDERS: 'COMMAND_IMPORTFILES_MESSAGES_LOADING_FOLDERS',
		},
		OUTPUT: {
			FILES_IMPORTED: 'COMMAND_IMPORTFILES_OUTPUT_FILES_IMPORTED',
			FILES_NOT_COMPARED: 'COMMAND_IMPORTFILES_OUTPUT_FILES_NOT_COMPARED',
			FILES_NOT_IMPORTED: 'COMMAND_IMPORTFILES_OUTPUT_FILES_NOT_IMPORTED',
			FILE_NOT_UPDATED: 'COMMAND_IMPORTFILES_OUTPUT_FILE_NOT_UPDATED',
			FILE_UPDATED: 'COMMAND_IMPORTFILES_OUTPUT_FILE_UPDATED',
		},
		QUESTIONS: {
			EXCLUDE_PROPERTIES: 'COMMAND_IMPORTFILES_QUESTIONS_EXCLUDE_PROPERTIES',
			OVERWRITE_FILES: 'COMMAND_IMPORTFILES_QUESTIONS_OVERWRITE_FILES',
			SELECT_FILES: 'COMMAND_IMPORTFILES_QUESTIONS_SELECT_FILES',
			SELECT_FOLDER: 'COMMAND_IMPORTFILES_QUESTIONS_SELECT_FOLDER',
		},
		WARNINGS: {
			OVERRIDE: 'COMMAND_IMPORTFILES_WARNINGS_OVERRIDE',
		},
	},
	COMMAND_IMPORTOBJECTS: {
		ERRORS: {
			CALLING_LIST_OBJECTS: 'COMMAND_IMPORTOBJECTS_ERRORS_COMMAND_IMPORTOBJECTS',
			PROCESS_FAILED: 'COMMAND_IMPORTOBJECTS_ERRORS_PROCESS_FAILED',
		},
		MESSAGES: {
			CANCEL_IMPORT: 'COMMAND_IMPORTOBJECTS_MESSAGES_CANCEL_IMPORT',
			IMPORTING_OBJECTS: 'COMMAND_IMPORTOBJECTS_MESSAGES_IMPORTING_OBJECTS',
			LOADING_LIST_OF_OBJECTS: 'COMMAND_IMPORTOBJECTS_MESSAGES_LOADING_LIST_OF_OBJECTS',
			LOADING_OBJECTS: 'COMMAND_IMPORTOBJECTS_MESSAGES_LOADING_OBJECTS',
			NO_OBJECTS_IMPORTED: 'COMMAND_IMPORTOBJECTS_MESSAGES_NO_OBJECTS_IMPORTED',
			NO_OBJECTS_TO_LIST: 'COMMAND_IMPORTOBJECTS_MESSAGES_NO_OBJECTS_TO_LIST',
		},
		OUTPUT: {
			IMPORTED_OBJECTS: 'COMMAND_IMPORTOBJECTS_OUTPUT_IMPORTED_OBJECTS',
			OBJECT_ERROR: 'COMMAND_IMPORTOBJECTS_OUTPUT_OBJECT_IMPORT_ERROR',
			OBJECT_IMPORT_FAILED: 'COMMAND_IMPORTOBJECTS_OUTPUT_OBJECT_IMPORT_FAILED',
			REFERENCED_SUITESCRIPT_FILE_IMPORT_FAILED: 'COMMAND_IMPORTOBJECTS_OUTPUT_REFERENCED_SUITESCRIPT_FILE_IMPORT_FAILED',
			REFERENCED_SUITESCRIPT_FILE_IMPORTED: 'COMMAND_IMPORTOBJECTS_OUTPUT_REFERENCED_SUITESCRIPT_FILE_IMPORTED',
			REFERENCED_SUITESCRIPT_FILES: 'COMMAND_IMPORTOBJECTS_OUTPUT_REFERENCED_SUITESCRIPT_FILES',
			UNIMPORTED_OBJECTS: 'COMMAND_IMPORTOBJECTS_OUTPUT_UNIMPORTED_OBJECTS',
		},
		QUESTIONS: {
			APPID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_APPID',
			DESTINATION_FOLDER: 'COMMAND_IMPORTOBJECTS_QUESTIONS_DESTINATION_FOLDER',
			IMPORT_REFERENCED_SUITESCRIPTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_IMPORT_REFERENCED_SUITESCRIPTS',
			FILTER_BY_CUSTOM_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_FILTER_BY_CUSTOM_OBJECTS',
			FILTER_BY_SCRIPT_ID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_FILTER_BY_SCRIPT_ID',
			OVERWRITE_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_OVERWRITE_OBJECTS',
			OVERWRITE_OBJECTS_AND_FILES: 'COMMAND_IMPORTOBJECTS_QUESTIONS_OVERWRITE_OBJECTS_AND_FILES',
			SCRIPT_ID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SCRIPT_ID',
			SELECT_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SELECT_OBJECTS',
			SHOW_ALL_CUSTOM_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SHOW_ALL_CUSTOM_OBJECTS',
			SPECIFIC_APPID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SPECIFIC_APPID',
		},
		WARNINGS: {
			OVERRIDE: 'COMMAND_IMPORTOBJECTS_WARNINGS_OVERRIDE',
		},
	},
	COMMAND_LISTFILES: {
		ERRORS: {
			NO_FOLDERS_FOUND: 'COMMAND_LISTFILES_ERRORS_NO_FOLDERS_FOUND',
		},
		GETTING_INERNAL_ERROR: 'COMMAND_LISTFILES_GETTING_INERNAL_ERROR',
		LOADING_FILES: 'COMMAND_LISTFILES_LOADING_FILES',
		LOADING_FOLDERS: 'COMMAND_LISTFILES_LOADING_FOLDERS',
		SELECT_FOLDER: 'COMMAND_LISTFILES_SELECT_FOLDER',
	},
	COMMAND_LISTOBJECTS: {
		LISTING_OBJECTS: 'COMMAND_LISTOBJECTS_LISTING_OBJECTS',
		QUESTIONS: {
			APPID: 'COMMAND_LISTOBJECTS_QUESTIONS_APPID',
			FILTER_BY_CUSTOM_OBJECTS: 'COMMAND_LISTOBJECTS_QUESTIONS_FILTER_BY_CUSTOM_OBJECTS',
			FILTER_BY_SCRIPT_ID: 'COMMAND_LISTOBJECTS_QUESTIONS_FILTER_BY_SCRIPT_ID',
			SCRIPT_ID: 'COMMAND_LISTOBJECTS_QUESTIONS_SCRIPT_ID',
			SHOW_ALL_CUSTOM_OBJECTS: 'COMMAND_LISTOBJECTS_QUESTIONS_SHOW_ALL_CUSTOM_OBJECTS',
			SPECIFIC_APPID: 'COMMAND_LISTOBJECTS_QUESTIONS_SPECIFIC_APPID',
		},
		SUCCESS_OBJECTS_IMPORTED: 'COMMAND_LISTOBJECTS_SUCCESS_OBJECTS_IMPORTED',
		SUCCESS_NO_OBJECTS: 'COMMAND_LISTOBJECTS_SUCCESS_NO_OBJECTS',
	},
	COMMAND_IMPORTCONFIGURATION: {
		PROGRESS: 'COMMAND_IMPORTCONFIGURATION_PROGRESS',
	},
	COMMAND_MANAGE_ACCOUNT: {
		ERRORS: {
			CREDENTIALS_EMPTY: 'COMMAND_MANAGE_ACCOUNT_ERROR_CREDENTIALS_EMPTY',
			CREDENTIALS_NOT_FOUND: 'COMMAND_MANAGE_ACCOUNT_ERROR_CREDENTIALS_NOT_FOUND',
			OPTION_NOT_SPECIFIED: 'COMMAND_MANAGE_ACCOUNT_ERROR_OPTION_NOT_SPECIFIED',
		},
		QUESTIONS: {
			NEW_NAME: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_NEW_NAME',
			SELECT_CREDENTIALS: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_SELECT_CREDENTIALS',
			SELECT_ACTION: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_SELECT_ACTION',
			VERIFY_REMOVE: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_VERIFY_REMOVE',
		},
		QUESTIONS_CHOICES: {
			ACTIONS: {
				EXIT: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_CHOICES_ACTIONS_EXIT',
				REMOVE: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_CHOICES_ACTIONS_REMOVE',
				RENAME: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_CHOICES_ACTIONS_RENAME',
				REVOKE: 'COMMAND_MANAGE_ACCOUNT_QUESTIONS_CHOICES_ACTIONS_REVOKE',
			},
			SELECT_AUTHID: {
				EXISTING_AUTH_ID: 'COMMAND_SETUPACCOUNT_QUESTIONS_CHOICES_SELECT_AUTHID_EXISTING_AUTH_ID',
				EXISTING_AUTH_ID_URL_NOT_PRODUCTION: 'COMMAND_SETUPACCOUNT_QUESTIONS_CHOICES_SELECT_AUTHID_EXISTING_AUTH_ID_URL_NOT_PRODUCTION',
			},
		},
		MESSAGES: {
			CANCEL: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_CANCEL',
			INFO: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_INFO',
			LISTING: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_LISTING',
			REMOVING: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_REMOVING',
			RENAMING: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_RENAMING',
			REVOKING: 'COMMAND_MANAGE_ACCOUNT_MESSAGES_REVOKING',
		},
		OUTPUT: {
			SUCCESS: 'COMMAND_MANAGE_ACCOUNT_OUTPUT_SUCCESS',
		},
	},

	COMMAND_OPTIONS: {
		HELP: 'COMMAND_OPTIONS_HELP',
		INTERACTIVE_HELP: 'COMMAND_OPTIONS_INTERACTIVE_HELP',
		IS_MANDATORY: 'COMMAND_OPTIONS_IS_MANDATORY',
		VALIDATION_ERRORS: 'COMMAND_OPTIONS_VALIDATION_ERRORS',
		VALIDATION_ERRORS_INTERACTIVE_SUGGESTION: 'COMMAND_OPTIONS_VALIDATION_ERRORS_INTERACTIVE_SUGGESTION',
	},

	COMMAND_PACKAGE: {
		LOCAL_VALIDATION_NOT_EXECUTED: 'COMMAND_PACKAGE_LOCAL_VALIDATION_NOT_EXECUTED',
		PACKAGING: 'COMMAND_PACKAGE_PACKAGING',
	},

	COMMAND_SDK_WRAPPER: {
		MESSAGES: {
			EXECUTING_COMMAND: 'COMMAND_SDK_WRAPPER_EXECUTING_COMMAND',
		},
	},

	COMMAND_REFRESH_AUTHORIZATION: {
		MESSAGES: {
			AUTHORIZATION_REFRESH_COMPLETED: 'COMMAND_REFRESH_AUTHORIZATION_MESSAGES_AUTHORIZATION_REFRESH_COMPLETED',
			CREDENTIALS_NEED_TO_BE_REFRESHED: 'COMMAND_REFRESH_AUTHORIZATION_MESSAGES_CREDENTIALS_NEED_TO_BE_REFRESHED'
		}
	},

	COMMAND_SETUPACCOUNT: {
		QUESTIONS: {
			NEW_AUTH_ID: 'COMMAND_SETUPACCOUNT_QUESTIONS_NEW_AUTH_ID',
			SELECT_AUTHID: 'COMMAND_SETUPACCOUNT_QUESTIONS_SELECT_AUTHID',
			URL: 'COMMAND_SETUPACCOUNT_QUESTIONS_URL',
		},
		QUESTIONS_CHOICES: {
			SELECT_AUTHID: {
				NEW_AUTH_ID: 'COMMAND_SETUPACCOUNT_QUESTIONS_CHOICES_SELECT_AUTHID_NEW_AUTH_ID',
				EXISTING_AUTH_ID: 'COMMAND_SETUPACCOUNT_QUESTIONS_CHOICES_SELECT_AUTHID_EXISTING_AUTH_ID',
				EXISTING_AUTH_ID_URL_NOT_PRODUCTION: 'COMMAND_SETUPACCOUNT_QUESTIONS_CHOICES_SELECT_AUTHID_EXISTING_AUTH_ID_URL_NOT_PRODUCTION',
			},
		},
		MESSAGES: {
			CANCEL_SETUP: 'COMMAND_SETUPACCOUNT_MESSAGES_CANCEL_SETUP',
			SELECT_CONFIGURED_AUTHID: 'COMMAND_SETUPACCOUNT_MESSAGES_SELECT_CONFIGURED_AUTHID',
		},
		OUTPUT: {
			NEW_OAUTH: 'COMMAND_SETUPACCOUNT_OUTPUT_NEW_OAUTH',
			REUSED_AUTH_ID: 'COMMAND_SETUPACCOUNT_OUTPUT_REUSED_AUTH_ID',
		},
	},

	COMMAND_SETUPACCOUNTCI: {
		OUTPUT: {
			NEW_OAUTH: 'COMMAND_SETUPACCOUNTCI_OUTPUT_NEW_OAUTH',
		},
	},

	COMMAND_UPDATE: {
		ERRORS: {
			CUSTOM_RECORD: 'COMMAND_UPDATE_ERRORS_CUSTOM_RECORD',
			NO_OBJECTS_IN_PROJECT: 'COMMAND_UPDATE_ERRORS_NO_OBJECTS_IN_PROJECT',
		},
		QUESTIONS: {
			FILTER_BY_SCRIPT_ID: 'COMMAND_UPDATE_QUESTIONS_FILTER_BY_SCRIPT_ID',
			INCLUDE_CUSTOM_INSTANCES: 'COMMAND_UPDATE_QUESTIONS_INCLUDE_CUSTOM_INSTANCES',
			OVERWRITE_OBJECTS: 'COMMAND_UPDATE_QUESTIONS_OVERWRITE_OBJECTS',
			OVERWRITE_OBJECTS_WITH_CUSTOM_INSTANCES: 'COMMAND_UPDATE_QUESTIONS_OVERWRITE_OBJECTS_WITH_CUSTOM_INSTANCES',
			SCRIPT_ID: 'COMMAND_UPDATE_QUESTIONS_SCRIPT_ID',
			SCRIPT_ID_FILTER: 'COMMAND_UPDATE_QUESTIONS_SCRIPT_ID_FILTER',
		},
		MESSAGES: {
			CANCEL_UPDATE: 'COMMAND_UPDATE_MESSAGES_CANCEL_UPDATE',
			NO_OBJECTS_WITH_SCRIPT_ID_FILTER: 'COMMAND_UPDATE_MESSAGES_NO_OBJECTS_WITH_SCRIPT_ID_FILTER',
			UPDATING_OBJECTS: 'COMMAND_UPDATE_MESSAGES_UPDATING_OBJECTS',
			UPDATING_OBJECT_WITH_CUSTOM_INSTANCES: 'COMMAND_UPDATE_MESSAGES_UPDATING_OBJECT_WITH_CUSTOM_INSTANCES',
		},
		OUTPUT: {
			UPDATED_CUSTOM_RECORDS: 'COMMAND_UPDATE_OUTPUT_UPDATED_CUSTOM_RECORDS',
			NO_UPDATED_OBJECTS: 'COMMAND_UPDATE_OUTPUT_NO_UPDATED_OBJECTS',
			UPDATED_OBJECTS: 'COMMAND_UPDATE_OUTPUT_UPDATED_OBJECTS',
		},
	},
	COMMAND_UPLOADFILES: {
		ERRORS: {
			INTERNAL: 'COMMAND_UPLOADFILES_ERRORS_INTERNAL',
			RESTRICTED_FOLDER: 'COMMAND_UPLOADFILES_ERROR_RESTRICTED_FOLDER',
		},
		QUESTIONS: {
			OVERWRITE_FILES: 'COMMAND_UPLOADFILES_QUESTIONS_OVERWRITE_FILES',
			SELECT_FILES: 'COMMAND_UPLOADFILES_QUESTIONS_SELECT_FILES',
			SELECT_FOLDER: 'COMMAND_UPLOADFILES_QUESTIONS_SELECT_FOLDER',
		},
		MESSAGES: {
			CANCEL_UPLOAD: 'COMMAND_UPLOADFILES_MESSAGES_CANCEL_UPLOAD',
			EMPTY_FOLDER: 'COMMAND_UPLOADFILES_MESSAGES_EMPTY_FOLDER',
			NOTHING_TO_UPLOAD: 'COMMAND_UPLOADFILES_MESSAGES_NOTHING_TO_UPLOAD',
			RESTRICTED_FOLDER: 'COMMAND_UPLOADFILES_MESSAGES_RESTRICTED_FOLDER',
			UPLOADING_FILES: 'COMMAND_UPLOADFILES_MESSAGES_UPLOADING_FILES',
		},
		OUTPUT: {
			FILES_UPLOADED: 'COMMAND_UPLOADFILES_OUTPUT_FILES_UPLOADED',
			FILES_NOT_UPLOADED: 'COMMAND_UPLOADFILES_OUTPUT_FILES_NOT_UPLOADED',
		},
	},
	COMMAND_VALIDATE: {
		MESSAGES: {
			APPLYING_INSTALLATION_PREFERENCES: 'COMMAND_VALIDATE_MESSAGES_APPLYING_INSTALLATION_PREFERENCES',
			NOT_APPLYING_INSTALLATION_PREFERENCES: 'COMMAND_VALIDATE_MESSAGES_NOT_APPLYING_INSTALLATION_PREFERENCES',
			VALIDATING: 'COMMAND_VALIDATE_MESSAGES_VALIDATING',
		},
		QUESTIONS: {
			SERVER_SIDE: 'COMMAND_VALIDATE_QUESTIONS_SERVER_SIDE',
			APPLY_INSTALLATION_PREFERENCES: 'COMMAND_VALIDATE_QUESTIONS_APPLY_INSTALLATION_PREFERENCES',
			ACCOUNT_SPECIFIC_VALUES: 'COMMAND_VALIDATE_QUESTIONS_ACCOUNT_SPECIFIC_VALUES',
		},
		QUESTIONS_CHOICES: {
			ACCOUNT_OR_LOCAL: {
				ACCOUNT: 'COMMAND_VALIDATE_QUESTIONS_CHOICES_AGAINST_ACCOUNT',
				LOCAL: 'COMMAND_VALIDATE_QUESTIONS_CHOICES_LOCAL',
			},
			ACCOUNT_SPECIFIC_VALUES: {
				IGNORE: 'COMMAND_VALIDATE_QUESTIONS_CHOICES_IGNORE',
				WARNING: 'COMMAND_VALIDATE_QUESTIONS_CHOICES_WARNING',
				CANCEL: 'COMMAND_VALIDATE_QUESTIONS_CHOICES_CANCEL',
			},
		},
		OUTPUT: {
			HEADING_LABEL_WARNING: 'COMMAND_VALIDATE_OUTPUT_HEADING_LABEL_WARNING',
			HEADING_LABEL_ERROR: 'COMMAND_VALIDATE_OUTPUT_HEADING_LABEL_ERROR',
			LABEL_LINE_NUMBER: 'COMMAND_VALIDATE_OUTPUT_LABEL_LINE_NUMBER',
			VALIDATION_OUTPUT_MESSAGE: 'COMMAND_VALIDATE_OUTPUT_VALIDATION_OUTPUT_MESSAGE',
		},
	},
	ERRORS: {
		APPLY_ACCOUNT_SPECIFIC_VALUES_IN_SUITEAPP: 'ERRORS_APPLY_ACCOUNT_SPECIFIC_VALUES_IN_SUITEAPP',
		ADD_ERROR_LINE: 'ERRORS_ADD_ERROR_LINE',
		CLI_CONFIG_BEFORE_EXECUTING_FAILED: 'ERRORS_CLI_CONFIG_BEFORE_EXECUTING_FAILED',
		CLI_CONFIG_BEFORE_EXECUTING_WRONG_RETURN_VALUE: 'ERRORS_CLI_CONFIG_BEFORE_EXECUTING_WRONG_RETURN_VALUE',
		CLI_CONFIG_ERROR_LOADING_CONFIGURATION_MODULE: 'ERRORS_CLI_CONFIG_ERROR_LOADING_CONFIGURATION_MODULE',
		CLI_SDK_JAVA_VERSION_NOT_COMPATIBLE: 'ERRORS_CLI_SDK_JAVA_VERSION_NOT_COMPATIBLE',
		CLI_SDK_JAVA_VERSION_NOT_INSTALLED: 'ERRORS_CLI_SDK_JAVA_VERSION_NOT_INSTALLED',
		COMMAND_DOES_NOT_EXIST: 'ERRORS_COMMAND_DOES_NOT_EXIST',
		COMMAND_DOES_NOT_SUPPORT_INTERACTIVE_MODE: 'ERRORS_COMMAND_DOES_NOT_SUPPORT_INTERACTIVE_MODE',
		FILE: 'ERRORS_FILE',
		FILE_NOT_EXIST: 'ERRORS_FILE_NOT_EXIST',
		GENERAL_CONNECTION_PROBLEM: 'ERRORS_GENERAL_CONNECTION_PROBLEM',
		INTERACTIVE_MODE_MORE_OPTIONS: 'ERRORS_INTERACTIVE_MODE_MORE_OPTIONS',
		NO_OBJECTS: 'ERRORS_NO_OBJECTS',
		NOT_PROJECT_FOLDER: 'ERRORS_NOT_PROJECT_FOLDER',
		MISSING_DEFAULT_AUTH_ID: 'ERRORS_MISSING_DEFAULT_AUTH_ID',
		PROCESS_FAILED: 'ERRORS_PROCESS_FAILED',
		PROMPTING_INTERACTIVE_QUESTIONS_FAILED: 'ERRORS_PROMPTING_INTERACTIVE_QUESTIONS_FAILED',
		RUN_SETUP_ACCOUNT: 'ERRORS_RUN_SETUP_ACCOUNT',
		SCRUMBOX_URL_NOT_FOUND: 'ERRORS_SCRUMBOX_URL_NOT_FOUND',
		SDKEXECUTOR: {
			NO_JAR_FILE_FOUND: 'ERRORS_SDKEXECUTOR_NO_JAR_FILE_FOUND',
			NO_TBA_FOR_ACCOUNT_AND_ROLE: 'ERRORS_SDKEXECUTOR_NO_TBA_FOR_ACCOUNT_AND_ROLE',
			RUNNING_COMMAND: 'ERRORS_SDKEXECUTOR_RUNNING_COMMAND',
			SDK_ERROR: 'ERRORS_SDKEXECUTOR_SDK_ERROR',
		},
		SDK_SETTINGS_FILE: {
			WRONG_JSON_SYNTAX: 'ERRORS_SDK_SETTINGS_FILE_WRONG_JSON_SYNTAX',
			INVALID_CUSTOM_VM_OPTION: 'ERRORS_SDK_SETTINGS_FILE_INVALID_CUSTOM_VM_OPTION',
			GENERIC_PROBLEM: 'ERRORS_SDK_SETTINGS_FILE_GENERIC_PROBLEM',
		},
		SEE_PROJECT_STRUCTURE: 'ERRORS_SEE_PROJECT_STRUCTURE',
		SETUP_REQUIRED: 'ERRORS_SETUP_REQUIRED',
		TIMED_OUT_CONNECTION: 'ERRORS_TIMED_OUT_CONNECTION',
		XML_MANIFEST_TAG_MISSING: 'ERRORS_XML_MANIFEST_TAG_MISSING',
		XML_PROJECTTYPE_ATTRIBUTE_MISSING: 'ERRORS_XML_PROJECTTYPE_ATTRIBUTE_MISSING',
		XML_PROJECTTYPE_INCORRECT: 'ERRORS_XML_PROJECTTYPE_INCORRECT',
		WRITING_PROJECT_JSON: 'ERRORS_WRITING_PROJECT_JSON',
		WRITING_FILE: 'ERRORS_WRITING_FILE',
		WRONG_JSON_FILE: 'ERRORS_WRONG_JSON_FILE',
		CANT_CREATE_FOLDER: 'ERRORS_CANT_CREATE_FOLDER',
	},
	NO: 'NO',
	SDK_DOWNLOAD_SERVICE: {
		DOWNLOADING: 'SDK_DOWNLOAD_SERVICE_DOWNLOADING',
		SUCCESS: 'SDK_DOWNLOAD_SERVICE_SUCCESS',
		GET_TIMEOUT: 'SDK_DOWNLOAD_SERVICE_GET_TIMEOUT',
		ERROR: 'SDK_DOWNLOAD_SERVICE_ERROR',
		FILE_NOT_AVAILABLE_ERROR: 'SDK_DOWNLOAD_SERVICE_FILE_NOT_AVAILABLE_ERROR',
		WRONG_DOWNLOAD_URL_PROTOCOL: 'SDK_DOWNLOAD_SERVICE_WRONG_DOWNLOAD_URL_PROTOCOL',
	},
	UNIT_TEST: {
		TEST_FAILED: 'UNIT_TEST_TEST_FAILED',
		TEST_FAILURES_PRESENT: 'UNIT_TEST_TEST_FAILURES_PRESENT',
	},
	UTILS: {
		ACCOUNT_SPECIFIC_VALUES_ARGUMENT_HANDLER: {
			ERRORS: {
				APPLY_ACCOUNT_SPECIFIC_VALUES_IN_SUITEAPP:
					'UTILS_ACCOUNT_SPECIFIC_VALUES_ARGUMENT_HANDLER_ERRORS_APPLY_ACCOUNT_SPECIFIC_VALUES_IN_SUITEAPP',
				WRONG_ACCOUNT_SPECIFIC_VALUES_OPTION: 'UTILS_ACCOUNT_SPECIFIC_VALUES_ARGUMENT_HANDLER_ERRORS_WRONG_ACCOUNT_SPECIFIC_VALUES_OPTION',
			},
		},
		APPLY_INSTALLATION_PREFERENCES_ARGUMENT_HANDLER: {
			INSTALLATION_PREFERENCES_ERRORS: {
				APPLY_INSTALLATION_PREFERENCES_IN_ACP: 'COMMAND_DEPLOY_ERRORS_APPLY_INSTALLATION_PREFERENCES_IN_ACP',
			},
		},
		AUTHENTICATION: {
			AUTHENTICATING: 'UTILS_AUTHENTICATION_AUTHENTICATING',
			AUTHORIZING: 'UTILS_AUTHENTICATION_AUTHORIZING',
			LOADING_AUTHIDS: 'UTILS_AUTHENTICATION_LOADING_AUTHIDS',
			SUCCESS_SETUP: 'UTILS_AUTHENTICATION_SUCCESS_SETUP',
			STARTING_OAUTH_FLOW: 'UTILS_AUTHENTICATION_SAVING_STARTING_OAUTH_FLOW',
		},
		ERRORS: {
			COMMAND: 'UTILS_ERRORS_COMMAND',
		},
	},
	YES: 'YES',
};
