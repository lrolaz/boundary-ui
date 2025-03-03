import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  modelName: 'managed-group',

  _hashForModel(model) {
    const json = ApplicationSerializer.prototype._hashForModel.apply(
      this,
      arguments
    );
    json.auth_method_id = model.authMethodId;
    return json;
  },
});
