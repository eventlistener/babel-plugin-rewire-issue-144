import bar from './bar';

function fooHelper() {
	return 'foo';
}

export default function foo() {
	return fooHelper();
}
