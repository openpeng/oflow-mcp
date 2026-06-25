import test from 'node:test';
import assert from 'node:assert/strict';
import { isOflowError, OflowError } from './errors.js';

test('OflowError carries code and message', () => {
  const err = new OflowError('NOT_FOUND', 'Instance not found: x');
  assert.equal(err.code, 'NOT_FOUND');
  assert.equal(err.name, 'OflowError');
  assert.match(err.message, /NOT_FOUND/);
  assert.equal(isOflowError(err), true);
  assert.equal(isOflowError(new Error('boom')), false);
});

test('OflowError carries optional details', () => {
  const err = new OflowError('CHECKPOINT_VALIDATION_FAILED', 'missing output', { missing_required: ['summary'] });
  assert.deepEqual(err.details, { missing_required: ['summary'] });
  assert.equal(new OflowError('INVALID_ARGUMENT', 'bad').details, undefined);
});
