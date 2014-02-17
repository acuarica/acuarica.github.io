var mod = angular.module('app', [ 'ngGrid' ]).config(
		[ '$locationProvider', function($locationProvider, $http) {
			// EnumRoute(routeProvider, PaginaConfig());
			// SingletonRoute(routeProvider, EmpresaConfig());
			// AbmRoute(routeProvider, UsuarioConfig());
		} ]);

mod.config(function($httpProvider) {
	$httpProvider.responseInterceptors.push(function($q, $log, $location,
			$window) {
		return function(promise) {
			return promise.then(function(response) {
				var logdata = angular.toJson(response.data);
				var logresponse = {
					status : response.status,
					config : response.config,
					data : logdata.substring(0, 100)
							+ (logdata.length > 100 ? '...' : ''),
				};

				// $log.info("http interceptor.get: " +
				// angular.toJson(response));
				// $log.info("http interceptor.get: " +
				// angular.toJson(logresponse));
				// do something on success

				return response;
			}, function(response) {
				var logdata = angular.toJson(response.data);
				var logresponse = {
					status : response.status,
					config : response.config,
					data : logdata.substring(0, 100)
							+ (logdata.length > 100 ? '...' : ''),
				};

				$log.info("http onerror interceptor.get: "
						+ angular.toJson(logresponse));

				// do something on error
				/*
				 * if (canRecover(response)) { return responseOrNewPromise }
				 */
				// $window.location.href = "//acceder";
				if (response.status == 401) {
					$location.path("/login");
				}

				return $q.reject(response);
			});
		}
	});
});

function AbmRoute(routeProvider, config, http) {
	config = {
		baseUrl : config.entityName,
		gridColumns : config.gridColumns,
		gridServiceUrl : getServiceUrl(config.entityName, 'grid'),
		newServiceUrl : getServiceUrl(config.entityName, 'new'),
		getServiceUrl : getServiceUrl(config.entityName, 'get'),
		insertServiceUrl : getServiceUrl(config.entityName, 'insert'),
		updateServiceUrl : getServiceUrl(config.entityName, 'update'),
		manageTitle : 'Gestion de ' + config.plural,
		newTitle : 'Nuevo ' + config.label,
		editTitle : 'Modificar ' + config.label + ' ?',
		formView : 'forms/' + config.entityName + '.html',
	};

	var baseUrl = config.baseUrl;

	var manageLinkUrl = '/' + baseUrl;
	var newLinkUrl = '/' + baseUrl + '/crear';

	return routeProvider.when(manageLinkUrl, {
		templateUrl : 'views/manage.html',
		controller : ManageController(config.manageTitle, [ {
			label : config.newTitle,
			link : '#' + newLinkUrl,
			icon : 'icon-plus'
		} ], config.gridColumns, config.gridServiceUrl, http)
	}).when(newLinkUrl, {
		templateUrl : 'views/form.html',
		controller : FormController(config.newTitle, config.formView, [ {
			label : config.manageTitle,
			link : '#' + manageLinkUrl,
			icon : 'icon-th'
		}, ], function(rp) {
			return config.newServiceUrl
		}, function(rp) {
			return config.insertServiceUrl;
		})
	}).when('/' + config.baseUrl + '/modificar/:id', {
		templateUrl : 'views/form.html',
		controller : FormController(config.editTitle, config.formView, [ {
			label : config.manageTitle,
			link : '#' + manageLinkUrl,
			icon : 'icon-th'
		}, {
			label : config.newTitle,
			link : '#' + newLinkUrl,
			icon : 'icon-plus'
		}, ], function(rp) {
			return config.getServiceUrl + '?id=' + rp.id
		}, function(rp) {
			return config.updateServiceUrl + '?id=' + rp.id;
		})
	});
}

function EnumRoute(routeProvider, config) {
	config = {
		baseUrl : config.entityName,
		gridColumns : config.gridColumns,
		gridServiceUrl : getServiceUrl(config.entityName, 'grid'),
		getServiceUrl : getServiceUrl(config.entityName, 'get'),
		updateServiceUrl : getServiceUrl(config.entityName, 'update'),
		manageTitle : 'Gestion de ' + config.plural,
		editTitle : 'Modificar ' + config.label + ' ?',
		formView : 'forms/' + config.entityName + '.html',
	};

	var manageLinkUrl = '/' + config.baseUrl;

	return routeProvider.when(
			manageLinkUrl,
			{
				templateUrl : 'views/manage.html',
				controller : ManageController(config.manageTitle, [],
						config.gridColumns, config.gridServiceUrl)
			}).when('/' + config.baseUrl + '/modificar/:id', {
		templateUrl : 'views/form.html',
		controller : FormController(config.editTitle, config.formView, [ {
			label : config.manageTitle,
			link : '#' + manageLinkUrl,
			icon : 'icon-th'
		} ], function(rp) {
			return config.getServiceUrl + '?id=' + rp.id
		}, function(rp) {
			return config.updateServiceUrl + '?id=' + rp.id;
		})
	});
}

function SingletonRoute(routeProvider, config) {
	config = {
		baseUrl : config.entityName,
		getServiceUrl : getServiceUrl(config.entityName, 'get'),
		updateServiceUrl : getServiceUrl(config.entityName, 'update'),
		editTitle : 'Modificar ' + config.label + ' ?',
		formView : 'forms/' + config.entityName + '.html',
	};

	var baseUrl = config.baseUrl;

	var manageLinkUrl = '/' + baseUrl;

	return routeProvider.when('/' + baseUrl + '/modificar', {
		templateUrl : 'views/form.html',
		controller : FormController(config.editTitle, config.formView, [],
				function(rp) {
					return config.getServiceUrl
				}, function(rp) {
					return config.updateServiceUrl;
				})
	});
}

function CompaniaFormController($scope, $log) {
	$scope.$on('selfLoaded', function() {
		$log.info("got loaded");
		for ( var pid in $scope.selects.productor) {
			var found = false;
			for ( var p in $scope.self.productores) {
				var t = $scope.self.productores[p].productor__id;

				if (pid == t) {
					found = true;
					break;
				}
			}

			if (!found) {
				$scope.self.productores.push({
					productor__id : pid,
					codigoEnCompania : ""
				});
			}
		}
	});

	$scope.addContacto = function() {
		$scope.self.contactos.push({});
	}

	$scope.removeContacto = function(contacto) {
		var index = $scope.self.contactos.indexOf(contacto);
		$scope.self.contactos.splice(index, 1);
	}

	$scope.getProductorNombre = function(productor) {
		return $scope.selects.productor[productor.productor__id];
	}
}

function DocumentoFormController($scope, $log, $http) {

	var map = {
		p1 : 'comun',
		p2 : 'automotores',
		p3 : 'art',
		p4 : 'comun',
		p5 : 'aeronaves',
		p6 : 'aeronaves',
		p7 : 'responsabilidadcivil',
		p8 : 'integrales',
		p9 : 'segurotecnico',
		p10 : 'vidaobligatorio',
		p11 : 'vidacolectivo',
		p12 : 'accidentespersonales'
	};

	$scope.setPaginaView = function(control) {
		$scope.paginaView = 'forms/paginas/' + control + '.html';
	}

	$scope.findCodigoEnCompania = function(pid, productores) {
		// $log.info(pid);
		$log.info(productores);
		for ( var i in productores) {
			var productor = productores[i];
			// $log.info(i);
			// $log.info(productor);
			// $log.info("productor["+i+"]: "+ productor);
			if (pid === productor.productor__id) {
				return productor.codigoEnCompania;
			}
		}

		return null;
	}

	$scope.aseguradoSelected = function(data) {
		// $scope.asegurado = data;
		$scope.self.asegurado = data;
	}

	$scope.companiaSelected = function(data) {
		$scope.self.compania = data;
		// findCodigoEnCompania($scope.compania, $scope.productor);
	}

	$scope.productorSelected = function(data) {
		// $scope.productor = data;
		// findCodigoEnCompania($scope.compania, $scope.productor);
	}

	$scope.seccionSelected = function(data) {
		var pagina = data ? map['p' + data.pagina__id] : null;
		var control = pagina ? pagina : '_sinpagina';

		$scope.setPaginaView(control);
	}

	$scope.addItem = function(collection) {
		collection.push({});
	}

	$scope.removeItem = function(collection, item) {
		var index = collection.indexOf(item);
		collection.splice(index, 1);
	}

	$scope.setPaginaView('_sinpagina');
}

function OrdenDeEmisionFormController($scope, $log, $http) {
	$scope.actions.push({
		label : 'PDF',
		link : getServiceUrl('ordendeemision', 'pdf') + '?id=' + '11',
		icon : 'icon-plus',
		target : '_blank'
	});

	$scope.polizaOrigenSelected = function(data) {
		$log.info("data desde polizaorigenselected: " + data);
		$log.info(data);

		if (!data) {
			$scope.tipoOrdenLabel = "Orden de Cobertura";
			return;
		}

		$scope.tipoOrdenLabel = "Orden de Renovacion";

		var url = getServiceUrl('ordendeemision', 'newfrompoliza') + '?id='
				+ data.__id;

		$http.get(url).success(function(data, status) {
			var self = data.self;

			$scope.setSelf(self);
		}).error(function(data, status) {
			$log.error("Error al cargar orden de emision desde poliza...");
		});
	}

	$scope.hasSelf = function() {
		return $scope.self;
	}

	$scope.isOrdenDeRenovacion = function() {
		return $scope.self.noPolizaOrigen;
	}
}

function WelcomeController($scope, $rootScope) {
	$rootScope.pageTitle = "Inicio";
}

function LoginController($scope, $http, $log, $location) {
	$scope.login = function() {
		$http.post(getBaseUrl() + '/acceder/login', $scope.self).success(
				function(data, status) {
					$scope.status = status;
					$scope.data = data;
					cols = angular.fromJson(data);

					$location.path('/');
				}).error(function(data, status) {

			if (status === 401) {
				$scope.error = data.error;
			}

			$scope.status = status;
			$scope.data = data || "Request failed";
		});
	}
}

function ManageController(title, actions, gridColumns, gridServiceUrl) {
	var cols = null;

	return function($scope, $http, $log, $rootScope) {
		$rootScope.pageTitle = title;

		$scope.title = title;
		$scope.actions = actions;

		$scope.$on('$viewContentLoaded', function() {

			if (!cols) {
				$http.get(gridServiceUrl + 'columns').success(
						function(data, status) {
							$scope.status = status;

							$log.info("Loaded columns for grid.");
							cols = angular.fromJson(data);

							load([ gridColumns[0] ].concat(cols.columns),
									gridServiceUrl, cols.sortColumns);
						}).error(function(data, status) {
					$log.error("Error while loading...");

					$scope.status = status;
					$scope.data = data || "Request failed";
				});
			} else {
				load([ gridColumns[0] ].concat(cols.columns), gridServiceUrl,
						cols.sortColumns);
			}

		});
	};
}

function FormController(title, formView, actions, getServiceUrl,
		saveServiceUrl, icon) {
	return function($scope, $http, $routeParams, mseghttp, $log, $rootScope) {
		$rootScope.pageTitle = title;
		$scope.icon = icon;

		$scope.routeParams = $routeParams;

		$scope.title = title;
		$scope.formView = formView;
		$scope.actions = actions;

		$scope.appendError = function(message) {
			$log.info("Error appended: " + message);

			// if (!$scope.data) {
			// $scope.data = {errors: []};
			// }
			if (!$scope.data) {
				$scope.data = {
					errors : []
				};
			}

			$scope.data.errors.push(message);
		}

		$scope.setSelf = function(self) {
			$scope.self = self;
		}

		$scope.formAction = saveServiceUrl($routeParams);
		$http
				.get(getServiceUrl($routeParams))
				.success(
						function(data, status) {
							$scope.status = status;

							pristine = angular.fromJson(data.self);
							$scope.self = angular.copy(pristine);
							$scope.selects = data.selects;

							$scope.$broadcast('selfLoaded');

							$scope.inrequest = false;

							$scope.submit = function() {

								$scope.errors = [];
								$scope.messages = [];

								var form = $scope.msegForm;
								$log.info(form);
								for ( var prop in form) {
									if (form[prop].$error) {
										var control = form[prop];
										var error = control.$error;

										for ( var key in error) {
											if (error[key]) {
												$log.info(key);
												$scope.errors.push(key);
											}
										}
									}
								}

								if (!form.$valid) {
									return;
								}

								$log.info("Submitted!!!");

								$scope.inrequest = true;
								$http
										.post(saveServiceUrl($routeParams),
												$scope.self)
										.success(
												function(data, status) {
													$scope.data = data;
													$scope.status = status;
													$scope.inrequest = false;

													if (data.errors) {
														var errors = [];

														for ( var attr in data.errors) {
															$log
																	.info(data.errors[attr]);
															for ( var index in data.errors[attr]) {

																var error = data.errors[attr][index];
																$log
																		.info(error);
																errors
																		.push(error);
															}
														}

														$scope.errors = errors;
													} else {
														var messages = [];
														messages
																.push("Operacion completada con exito");

														$scope.messages = messages;
													}

													// $scope.data.errors
												})
										.error(
												function(data, status) {
													$scope.data = data
															|| "Request failed";
													$scope.status = status;
													$scope.inrequest = false;
												});
							};

							$scope.isDiscardDisabled = function() {
								return angular.equals($scope.self, pristine);
							};

							$scope.isSaveDisabled = function() {
								return $scope.inrequest;
								return false && ($scope.form.$invalid || angular
										.equals($scope.self, pristine));
							};

							$scope.discard = function() {
								$scope.self = angular.copy(pristine);
							};

							$scope.toggleEdit = function() {
								if ($scope.readonly) {
									$scope.readonly = false;
									$scope.toggleEditLabel = "Ver";
								} else {
									$scope.readonly = true;
									$scope.toggleEditLabel = "Editar";
								}
							};

							$scope.readonly = false;
							$scope.toggleEditLabel = "Ver";

						}).error(function(data, status) {
					$scope.status = status;
					$scope.data = data || "Request failed";
				});
	}
}
