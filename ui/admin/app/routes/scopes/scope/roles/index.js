import Route from '@ember/routing/route';
export default class ScopesScopeRolesIndexRoute extends Route {
  // =methods

  setupController(controller) {
    const scope = this.modelFor('scopes.scope');
    super.setupController(...arguments);
    controller.setProperties({ scope });
  }
}
