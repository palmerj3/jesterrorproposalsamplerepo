# Sample repo for github issue
A sample repo for jest "error" test classification proposal

## Run tests
1. yarn install
2. yarn test

## Observe results

Test suite __tests__/bar.test.js contains a single test with a single failed assertion.

test suite __tests__/foo.test.js contains a single test with an uncaught exception.

Both test suites are classified exactly the same (apart from the error messages) from the perspective of a testResultsProcessor.

## Results (for those who don't run the tests)

```json{
  "numFailedTestSuites": 2,
  "numFailedTests": 2,
  "numPassedTestSuites": 0,
  "numPassedTests": 0,
  "numPendingTestSuites": 0,
  "numPendingTests": 0,
  "numRuntimeErrorTestSuites": 0,
  "numTotalTestSuites": 2,
  "numTotalTests": 2,
  "snapshot": {
    "added": 0,
    "didUpdate": false,
    "failure": false,
    "filesAdded": 0,
    "filesRemoved": 0,
    "filesUnmatched": 0,
    "filesUpdated": 0,
    "matched": 0,
    "total": 0,
    "unchecked": 0,
    "uncheckedKeys": [],
    "unmatched": 0,
    "updated": 0
  },
  "startTime": 1523367454533,
  "success": false,
  "testResults": [
    {
      "console": [],
      "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mfoo › should foo\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toEqual(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n    \n    Expected value to equal:\n      \u001b[32m\"bar\"\u001b[39m\n    Received:\n      \u001b[31m\"foo\"\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 3 | \u001b[39m    \u001b[90m//throw new Error('foo failed');\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 4 | \u001b[39m    expect(\u001b[32m'foo'\u001b[39m)\u001b[33m.\u001b[39mtoEqual(\u001b[32m'foo'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 5 | \u001b[39m    expect(\u001b[32m'foo'\u001b[39m)\u001b[33m.\u001b[39mtoEqual(\u001b[32m'bar'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 6 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 7 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 8 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m      \u001b[22m\n\u001b[2m      \u001b[2mat Object.it (\u001b[2m\u001b[0m\u001b[36m__tests__/foo.test.js\u001b[39m\u001b[0m\u001b[2m:5:19)\u001b[2m\u001b[22m\n",
      "numFailingTests": 1,
      "numPassingTests": 0,
      "numPendingTests": 0,
      "perfStats": {
        "end": 1523367455351,
        "start": 1523367455172
      },
      "snapshot": {
        "added": 0,
        "fileDeleted": false,
        "matched": 0,
        "unchecked": 0,
        "unmatched": 0,
        "updated": 0,
        "uncheckedKeys": []
      },
      "testFilePath": "/Users/jpalmer/Development/OO/jesterrorproposalsamplerepo/__tests__/foo.test.js",
      "testResults": [
        {
          "ancestorTitles": [
            "foo"
          ],
          "duration": 7,
          "failureMessages": [
            "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toEqual(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected value to equal:\n  \u001b[32m\"bar\"\u001b[39m\nReceived:\n  \u001b[31m\"foo\"\u001b[39m\n    at Object.it (/Users/jpalmer/Development/OO/jesterrorproposalsamplerepo/__tests__/foo.test.js:5:19)\n    at Object.asyncFn (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/jasmine_async.js:88:37)\n    at resolve (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:54:12)\n    at Promise (<anonymous>)\n    at mapper (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:41:19)\n    at promise.then (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:86:41)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)"
          ],
          "fullName": "foo should foo",
          "location": null,
          "numPassingAsserts": 0,
          "status": "failed",
          "title": "should foo"
        }
      ],
      "sourceMaps": {},
      "skipped": false,
      "leaks": false
    },
    {
      "console": [],
      "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mbar › should bar\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toEqual(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n    \n    Expected value to equal:\n      \u001b[32m\"foo\"\u001b[39m\n    Received:\n      \u001b[31m\"bar\"\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 1 | \u001b[39mdescribe(\u001b[32m'bar'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 2 | \u001b[39m  it(\u001b[32m'should bar'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 3 | \u001b[39m    expect(\u001b[32m'bar'\u001b[39m)\u001b[33m.\u001b[39mtoEqual(\u001b[32m'foo'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 4 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 5 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 6 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m      \u001b[22m\n\u001b[2m      \u001b[2mat Object.it (\u001b[2m\u001b[0m\u001b[36m__tests__/bar.test.js\u001b[39m\u001b[0m\u001b[2m:3:19)\u001b[2m\u001b[22m\n",
      "numFailingTests": 1,
      "numPassingTests": 0,
      "numPendingTests": 0,
      "perfStats": {
        "end": 1523367455384,
        "start": 1523367455360
      },
      "snapshot": {
        "added": 0,
        "fileDeleted": false,
        "matched": 0,
        "unchecked": 0,
        "unmatched": 0,
        "updated": 0,
        "uncheckedKeys": []
      },
      "testFilePath": "/Users/jpalmer/Development/OO/jesterrorproposalsamplerepo/__tests__/bar.test.js",
      "testResults": [
        {
          "ancestorTitles": [
            "bar"
          ],
          "duration": 2,
          "failureMessages": [
            "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toEqual(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected value to equal:\n  \u001b[32m\"foo\"\u001b[39m\nReceived:\n  \u001b[31m\"bar\"\u001b[39m\n    at Object.it (/Users/jpalmer/Development/OO/jesterrorproposalsamplerepo/__tests__/bar.test.js:3:19)\n    at Object.asyncFn (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/jasmine_async.js:88:37)\n    at resolve (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:54:12)\n    at Promise (<anonymous>)\n    at mapper (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:41:19)\n    at promise.then (/Users/jpalmer/Development/OO/jest/packages/jest-jasmine2/build/queue_runner.js:86:41)\n    at <anonymous>"
          ],
          "fullName": "bar should bar",
          "location": null,
          "numPassingAsserts": 0,
          "status": "failed",
          "title": "should bar"
        }
      ],
      "sourceMaps": {},
      "skipped": false,
      "leaks": false
    }
  ],
  "wasInterrupted": false
}```
