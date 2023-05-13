// my-awesome-reporter.ts

class MyReporter {
  onBegin(config, suite) {
    // Send the data into kibana/grafana/3rd party in-house / orther services
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test, result) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;