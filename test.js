import test from 'ava';
import mn from '.';

test('Test Names', t => {
	t.true(mn.all.length > 0);
	t.truthy(mn.random());
	t.not(mn.random(), mn.random());
	t.is(mn.all[0], 'Aaron');
	t.is(mn.all[1], 'Abagtha');
	t.is(mn.all[40], 'Abraham');
});
