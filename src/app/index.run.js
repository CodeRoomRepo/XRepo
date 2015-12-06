(function() {
  'use strict';

  angular
    .module('newProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
