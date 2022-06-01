'use strict';

const config = require('../');
const fs = require('fs');
const ec0lint_css = require('ec0lint-css');

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8');

describe('flags no warnings with valid css', () => {
	let result;

	beforeEach(() => {
		result = ec0lint_css.lint({
			code: validCss,
			config,
		});
	});

	it('did not error', () => {
		return result.then((data) => expect(data.errored).toBeFalsy());
	});

	it('flags no warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
	});
});

describe('flags warnings with invalid css', () => {
	let result;

	beforeEach(() => {
		result = ec0lint_css.lint({
			code: invalidCss,
			config,
		});
	});

	it('did error', () => {
		return result.then((data) => expect(data.errored).toBeTruthy());
	});

	it('flags one warning', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(1));
	});
});
