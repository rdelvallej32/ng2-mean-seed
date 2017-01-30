'use strict';

import _ from 'lodash';
import Example from './example.model';

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      return res.status(404).end();
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).json({
      title: 'Error',
      error: err
    });
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

export function index(req, res) {
  Example.find()
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function show(req, res) {
  Example.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

export function create(req, res) {
  Example.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

export function update(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }

  Example.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function destroy(req, res) {
  Example.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
