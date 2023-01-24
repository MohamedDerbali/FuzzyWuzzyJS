#!/usr/bin/env node

/**
 * fuzzywuzzy
 * fuzzywuzzy-cli
 *
 * @author mohamedderbali <https://mohamedderbaliwebsite.vercel.app/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const _progress = require('cli-progress');
const colors = require('ansi-colors');
const shell = require('shelljs');
shell.config.silent = true;

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (input.includes(`create`)) {
		const files = {
			'app.js               ': 187,
			// 'userRoutes.js ': 589,
			'installing packages  ': 5342,
			'package.json    	  ': 42
			// 'single-bar.js ': 2123,
			// 'terminal.js   ': 4123
		};
		const bars = [];

		// create new container
		const multibar = new _progress.MultiBar({
			format: colors.cyan(' {bar} | "{file}" | {value}/{total}'),
			hideCursor: true,
			barCompleteChar: '\u2588',
			barIncompleteChar: '\u2591',
			clearOnComplete: true,
			stopOnComplete: true,
			forceRedraw: true
		});

		console.log('Creating FuzzyWuzzy application...\n');
		for (const filename in files) {
			const size = files[filename];

			bars.push(multibar.create(size, 0, { file: filename }));
		}

		const timer = setInterval(function () {
			for (let i = 0; i < bars.length; i++) {
				const bar = bars[i];

				if (bar.value < bar.total) {
					bar.increment();
				}
			}
			if (multibar.isActive === false) {
				clearInterval(timer);
				console.log('FuzzyWuzzy app is created, goodluck :)!');
			}
		}, 3);
		shell.exec(
			'mkdir app && cd app && git init && git remote add origin https://github.com/MohamedDerbali/FuzzyWuzzyJS.git && git pull origin squeleton'
		);
	}
	debug && log(flags);
})();
