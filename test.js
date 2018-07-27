import test from 'ava';
import mn from './';

test('Test Names',t => {
	t.true(mn.all.length > 0);
	t.truthy(mn.rand());
	t.not(mn.rand(), mn.rand());
	t.is(mn.all[0], 'Aaron');
	t.is(mn.all[1], 'Abagtha');
	t.is(mn.all[40], 'Abraham');
});
