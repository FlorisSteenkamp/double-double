import { equal } from 'assert';
import TestDirector from 'test-director';

const tests = new TestDirector();

tests.add('JavaScript addition.', () => {
  equal(1 + 1, 2);
});

tests.run();