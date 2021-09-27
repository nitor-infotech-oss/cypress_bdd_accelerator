const report = require('multiple-cucumber-html-reporter');

var myArgs = process.argv
const datetime = new Date();

var os = require('os');
let osName;
if (os.type().toLowerCase().includes('windows')){
    osName = 'Windows'
}
else
    osName = 'Linux'
report.generate({
	jsonDir: './cypress/results/cucumber-json',
	reportPath: './cypress/results/cucumber-json/cucumber_report.html',
	metadata:{
        browser: {
            name: myArgs[3],
            version: myArgs[4]
        },
        "device": os.hostname(),
        platform: {
            name: osName,
            version: os.version
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Reusable'},
            {label: 'Release', value: myArgs[2]},
            {label: 'Execution Time', value: datetime.toUTCString()}
        ]
    }
});